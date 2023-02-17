import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { GridLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Switch from "./Switch";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const CreateModal = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <>
      <motion.div
        id="container"
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        onClick={handleOnClose}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="rex3 bg-primary-black  p-10 rounded-[40px] w-full mx-[380px] py-24">
          <div>
            <h1 className="text-center text-3xl text-secondary-white">
              Create your Custom SBT Domain
            </h1>
            <form className="flex flex-col" noValidate autoComplete="off">
              <label
                htmlFor="eventname"
                className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2"
              >
                Domain Name:
              </label>
              <input
                type="text"
                className="border black-orange-gradient text-sm border-secondary-white p-2 rounded mb-5 text-white"
                placeholder="Please input a name"
                required
                // defaultValue={senderName}
                // onChange={(e) => setSenderName(e.target.value)}
              />
              <label
                htmlFor="eventname"
                className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2"
              >
                Symbol:
              </label>
              <input
                type="text"
                className="border text-sm border-secondary-white black-orange-gradient p-2 rounded mb-5 text-white"
                placeholder='Domain symbol (i.e ".tld", ".kraken")'
                required
                // defaultValue={senderName}
                // onChange={(e) => setSenderName(e.target.value)}
              />
              <label
                htmlFor="eventname"
                className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2 pb-4"
              >
                Buying Status:
              </label>
              {/* <Switch
                isOn={buyingEnabled}
                handleToggle={() => setBuyingEnabled(!buyingEnabled)}
              /> */}
              <label
                htmlFor="eventname"
                className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2"
              >
                Mint Price:
              </label>
              <input
                id="amount"
                type="number"
                min="0.001"
                step="0.001"
                className="border border-secondary-white p-2 rounded mb-5 text-sm black-orange-gradient text-white"
                placeholder="price per mint"
                required
                // defaultValue={amount}
                // onChange={(e) => setAmount(e.target.value)}
              />
            </form>
            <div className="text-center">
              <button className="px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">
                Create Domain
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CreateModal;
