import React from "react";
import DomainCard from "./DomainCard";

const SbtDomains = () => {
  return (
    <div className="ml-[300px] gap-4 columns-2 md:gap-3 sm:columns-3">
      <DomainCard />
      <DomainCard />
      {/* <DomainCard /> */}
    </div>
  );
};

export default SbtDomains;
