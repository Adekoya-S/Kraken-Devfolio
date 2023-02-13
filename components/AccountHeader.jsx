import React from "react";
import styles from "../styles";
import { FaWallet } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { RiWallet3Line } from "react-icons/ri";

const AccountHeader = () => {
  return (
    <section
      className={`ml-[330px] mt-[50px]   md:flex-row flex-col ${styles}`}
    >
      <div className="flex gap-4">
        <div className="card p-20 black-orange-gradient rounded-lg w-[45%] text-secondary-white flex items-center gap-4 shadow-2xl">
          <span className="bg-secondary-white p-2 rounded-lg">
            <AiOutlineHome className="text-gray-600 text-2xl" />
          </span>
          Address: 0x74hj4899d948043d332nfeu443
        </div>
        <div className="card p-20 black-orange-gradient rounded-lg w-[45%] text-secondary-white flex items-center gap-4 shadow-2xl">
          <span className="bg-secondary-white p-2 rounded-lg">
            <RiWallet3Line className="text-gray-600 text-2xl" />
          </span>
          Wallet Balance: <br /> 0.5 tFIL
        </div>
      </div>
    </section>
  );
};

export default AccountHeader;
