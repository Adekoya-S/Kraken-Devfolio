import ProfileNavbar from "@/components/ProfileNavbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const createDomain = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ProfileNavbar />
    </div>
  );
};

export default createDomain;
