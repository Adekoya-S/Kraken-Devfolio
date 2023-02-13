"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { SiHiveBlockchain } from "react-icons/si";
import { MdOutlineNotificationsNone } from "react-icons/md";

const ProfileNavbar = () => (
  <nav className={`ml-[250px] h-1/2 bg-gray-500 gradi w-[85%] py-2`}>
    {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
    <div
      className={`${styles.innerWidth} mx-auto flex justify-end items-center`}
    >
      <div>
        <MdOutlineNotificationsNone className="text-2xl text-white " />
      </div>
      &nbsp; &nbsp;
      <button className="gradi p-2 pr-10 text-white rounded-[10px] font-bold">
        Connect Button
      </button>
    </div>
  </nav>
);

export default ProfileNavbar;
