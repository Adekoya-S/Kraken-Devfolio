import React from "react";
import Sidebar from "@/components/Sidebar";
import ProfileNavbar from "@/components/ProfileNavbar";
import AccountHeader from "@/components/AccountHeader";
import DomainTab from "@/components/DomainTab";

const dashboard = () => {
  return (
    <div className="gradi">
      <div className="flex">
        <Sidebar />
        <ProfileNavbar />
      </div>
      <div>
        <AccountHeader />
        <DomainTab />
      </div>
    </div>
  );
};

export default dashboard;
