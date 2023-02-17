import React from "react";
import Sidebar from "@/components/Sidebar";
import ProfileNavbar from "@/components/ProfileNavbar";
import AccountHeader from "@/components/AccountHeader";
import DomainTab from "@/components/DomainTab";
import { useState, useEffect, createRef } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ConnectModal from "@/components/ConnectModal";

const Dashboard = () => {
  const [openMintModal, setOpenMintModal] = useState(true);
  const { isConnected, address } = useAccount();
  console.log(isConnected);

  const handleMintOnClose = () => setOpenMintModal(true);

  return (
    <>
      {isConnected && (
        <div className="bg-primary-black h-full">
          <div className="flex">
            <Sidebar />
            <ProfileNavbar />
          </div>
          <div>
            <AccountHeader />
            <DomainTab />
          </div>
        </div>
      )}
      {!isConnected && (
        <div className="bg-primary-black h-screen">
          <ConnectModal
            openMintModal={openMintModal}
            handleOnClose={handleMintOnClose}
          />
        </div>
      )}
    </>
  );
};

export default Dashboard;
