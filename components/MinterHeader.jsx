import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { config } from "../abi";
import krakenDomainFactory from "../abi/krakenDomainFactory.json";
import krakenDomainABI from "../abi/krakenDomainABI.json";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "@/components/ConfirmationModal";

const MinterHeader = () => {
  const { address, isConnected } = useAccount();
  const [userDomain, setUserDomain] = useState("");
  const [selectDomain, setSelectDomain] = useState(".test");
  const [selectDomainPrice, setSelectDomainPrice] = useState("0.2");
  const [domainFactory, setDomainFactory] = useState("");
  const [domains, setDomains] = useState();
  const [openMintModal, setOpenMintModal] = useState(false);
  const [domainHash, setDomainHash] = useState("");

  const notify = (e) => {
    e.preventDefault();

    toast.error("Please connect a Compatible Web3 Wallet", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleMintOnClose = () => setOpenMintModal(false);

  const getDomainPrice = async (domain) => {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_MANTLE_ENDPOINT
    );

    const domainAddress = await domainFactory.tldNamesAddresses(domain);

    const domainContract = new ethers.Contract(
      domainAddress,
      krakenDomainABI,
      provider
    );

    const price = await domainContract.price();
    // console.log(price);
    const formatPrice = ethers.utils.formatEther(price);
    setSelectDomainPrice(formatPrice);
    // console.log(formatPrice);
  };

  const getDomains = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_MANTLE_ENDPOINT
    );
    // const signer = provider.getSigner();

    const newDomainFactory = new ethers.Contract(
      config.domainFactoryAddress,
      krakenDomainFactory,
      provider
    );

    setDomainFactory(newDomainFactory);

    const tldAddresses = await newDomainFactory.getTldsArray().then((res) => {
      setDomains(res);
      // console.log(res);
    });
  };

  const handleChange = (event) => {
    setSelectDomain(event.target.value);
    getDomainPrice(event.target.value);
    // console.log(event.target.value);
  };

  useEffect(() => {
    getDomains();
  }, []);

  const mintDomain = async (e) => {
    e.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const formatPrice = await ethers.utils.parseUnits(selectDomainPrice, 18);
    const formattedName = userDomain.replace(/\s+/g, "").toLowerCase().trim();
    const domainAddress = await domainFactory.tldNamesAddresses(selectDomain);

    console.log(formattedName, domainAddress, formatPrice);

    const domainContract = new ethers.Contract(
      domainAddress,
      krakenDomainABI,
      signer
    );

    const mintNotification = toast.loading("Please wait! Minting your NFT");

    const mint = await domainContract.mint(formattedName, address, {
      value: formatPrice,
    });
    const receipt = await mint.wait();
    console.log(receipt);

    toast.update(mintNotification, {
      render: "Mint Completed Successfully",
      type: "success",
      isLoading: false,
      autoClose: 7000,
    });

    const txHash = await receipt.transactionHash;
    console.log(txHash);

    setDomainHash(txHash);
    setOpenMintModal(true);
  };

  return (
    <>
      <div className="text-center flex flex-col items-center ">
        <h1 className="mt-10 text-3xl font-bold text-secondary-white">
          Mint your Domain
        </h1>
        <div className="h-[250px] w-[350px]">
          <img src="/planet-14.png" alt="planet" className=" mt-4 " />
        </div>
      </div>

      <form>
        <div className="mb-6  mt-10 flex items-center md:mx-[500px] text-center">
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-l-2xl outline-none font-bold focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
            placeholder="Enter your preferred name"
            required
            value={userDomain}
            onChange={(e) => setUserDomain(e.target.value)}
          />
          <div className="p-0 rounded-r-2xl">
            <select
              className="focus:outline-none h-[42px]  rounded-r-2xl text-gray-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold"
              onChange={handleChange}
            >
              {domains
                ? domains.map((option, index) => (
                    <option key={index} value={option} className="p-2 bg-primary-black">
                      {option}
                    </option>
                  ))
                : "..."}
            </select>
          </div>
        </div>

        <p className="text-white font-bold text-center mb-4">
          Domain Price: {selectDomainPrice} BIT
        </p>

        <ConfirmationModal
          txHash={domainHash}
          openMintModal={openMintModal}
          handleOnClose={handleMintOnClose}
        />

        {isConnected && (
          <button
            type="submit"
            className="text-white font-bold border-2 border-[button-gradient] flex mx-auto justify-center bg-slate-600 hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
            onClick={mintDomain}
          >
            Mint Domain
          </button>
        )}
        {!isConnected && (
          <button
            type="submit"
            className="text-white font-bold border-2 border-[button-gradient] flex mx-auto justify-center bg-slate-600 hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
            onClick={notify}
          >
            Mint Domain
            <ToastContainer />
          </button>
        )}
      </form>
      <ToastContainer />
    </>
  );
};

export default MinterHeader;
