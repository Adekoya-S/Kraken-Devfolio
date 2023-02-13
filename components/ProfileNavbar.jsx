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
      className={`${styles.innerWidth} mx-auto flex justify-end items-center gap-3`}
    >
      <form className="w-1/2">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none shadow-2xl">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-50 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-50 border border-gray-500 rounded-lg bg-gr gradi"
            placeholder="Search Domains..."
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>
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
