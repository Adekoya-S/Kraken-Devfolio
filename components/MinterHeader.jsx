import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MinterHeader = () => {
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-2xl outline-none focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
            placeholder="Enter your preferred name"
            required
            // value={userDomain}
            // onChange={(e) => setUserDomain(e.target.value)}
          />
          <div className="p-0 rounded-r-2xl">
            <select
              className="focus:outline-none h-[42px]  rounded-r-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold"
              //   onChange={handleChange}
            >
              {/* {tlds
                ? tlds.map((option, index) => (
                    <option key={index} value={option} className="p-2">
                      {option}
                    </option>
                  ))
                : "..."} */}
            </select>
          </div>
        </div>

        <p className="text-white font-bold text-center mb-4">
          {/* Domain Price: {selectTldPrice} MATIC */}
        </p>

        {/* {isConnected && (
          <button
            type="submit"
            className="text-white font-bold border-2 border-[button-gradient] flex mx-auto justify-center bg-black hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
            onClick={mintDomain}
          >
            Mint Domain
          </button>
        )}
        {!isConnected && (
          <button
            type="submit"
            className="text-white font-bold border-2 border-[button-gradient] flex mx-auto justify-center bg-black hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
            onClick={notify}
          >
            Mint Domain
            <ToastContainer />
          </button>
        )} */}
      </form>
    </>
  );
};

export default MinterHeader;
