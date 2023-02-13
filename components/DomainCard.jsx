import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const image =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&w=1000&q=80";

const title = "Yellow";

const DomainCard = () => {
  return (
    <div
      className={`w-full h-full cursor-pointer relative overflow-hidden rex2 p-1 flex flex-col items-center mb-10`}
    >
      <img
        src={image}
        alt=""
        className="w-[250px] h-[300px] object-cover rounded-[30px] transition-all duration-500 hover:opacity-90 pt-2"
      />

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="mt-1 text-md text-center font-bold text-white w-full">
            {title}
          </h3>
          <div className="flex items-center justify-between mt-1">
            <div className="flex flex-col">
              {/* <p className="bg-slate-600 text-sm p-1 rounded-md cursor-text font-bold">
                Token ID: 0x00000
              </p> */}
              <p className="bg-gray-400 text-sm p-1 rounded-md font-bold mt-1">
                Contract Address: 0x234484444
              </p>
              <button className=" transition-all duration-500 hover:opacity-80  right-0 mt-2 text-white bg-gray-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm ml-2  py-2 ">
                Transfer Domain
              </button>
              <button className=" transition-all duration-500 hover:opacity-80  right-0 mt-2 text-white bg-slate-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm ml-2  py-2 ">
                Update Metadata
              </button>
            </div>
            <ToastContainer autoClose={6000} />
          </div>
          <div className="p-3" />
        </div>
      </div>
    </div>
  );
};

export default DomainCard;
