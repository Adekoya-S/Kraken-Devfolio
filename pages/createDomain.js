import CreateHeader from "@/components/CreateHeader";
import DomainTypeCard from "@/components/DomainTypeCard";
import ProfileNavbar from "@/components/ProfileNavbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const createDomain = () => {
  return (
    <div className="gradi h-screen">
      <div className="flex">
        <Sidebar />
        <ProfileNavbar />
      </div>
      <div>
        <CreateHeader />

        <DomainTypeCard />
      </div>
    </div>
  );
};

export default createDomain;
