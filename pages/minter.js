import React from "react";
import Sidebar from "@/components/Sidebar";
import ProfileNavbar from "@/components/ProfileNavbar";

const minter = () => {
  return (
    <div className="gradi">
      <div className="flex">
        <Sidebar />
        <ProfileNavbar />
      </div>
    </div>
  );
};

export default minter;
