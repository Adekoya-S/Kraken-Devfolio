import React from "react";
import Sidebar from "@/components/Sidebar";
import ProfileNavbar from "@/components/ProfileNavbar";
import AccountHeader from "@/components/AccountHeader";

const dashboard = () => {
  return (
    <div className="animated_gradient">
      <div className="flex">
        <Sidebar />
        <ProfileNavbar />
      </div>
      <div className="">
        <AccountHeader />
      </div>
    </div>
  );
};

export default dashboard;
