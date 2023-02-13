import React from "react";
import DomainCard from "./DomainCard";

const StandardDomains = () => {
  return (
    <div className="ml-[300px] gap-4 columns-2 md:gap-2 sm:columns-3">
      <DomainCard />
      <DomainCard />
      {/* <DomainCard /> */}
    </div>
  );
};

export default StandardDomains;
