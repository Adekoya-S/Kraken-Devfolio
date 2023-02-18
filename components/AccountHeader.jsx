"use client";

import React from "react";
import styles from "../styles";
import { FaWallet } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { RiWallet3Line } from "react-icons/ri";
import { useAccount, useBalance } from "wagmi";

const AccountHeader = () => {
  const { address } = useAccount();
  const { data } = useBalance({
    addressOrName: address,
  });

  const formatAddress = (address) => {
    let addressFormatted;
    if (address) {
      addressFormatted = address.slice(0, -16);
    } else {
      addressFormatted = "---";
    }
    return addressFormatted;
  };

  const formatBalance = (balance) => {
    let balanceFormatted;
    if (balance) {
      balanceFormatted = balance.slice(0, -2);
    } else {
      balanceFormatted = "---";
    }
    return balanceFormatted;
  };

  return (
    <section
      className={`ml-[330px] mt-[50px]   md:flex-row flex-col ${styles}`}
    >
      <div className="flex gap-4">
        <div className="card p-20 bg-slate-800  rounded-lg w-[45%] text-secondary-white flex items-center gap-4 shadow-2xl rex3">
          <span className="bg-secondary-white p-2 rounded-lg">
            <AiOutlineHome className="text-gray-600 text-2xl" />
          </span>
          Address: {formatAddress(address)}...
        </div>
        <div className="card p-20 bg-slate-800 rex3 rex rounded-lg w-[45%] text-secondary-white flex items-center gap-4 shadow-2xl">
          <span className="bg-secondary-white p-2 rounded-lg">
            <RiWallet3Line className="text-gray-600 text-2xl" />
          </span>
          Wallet Balance: <br /> {formatBalance(data?.formatted)} {data?.symbol}
        </div>
      </div>
    </section>
  );
};

export default AccountHeader;
