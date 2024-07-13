import React from "react";
import Header from "./components/header";
import { EStoreAppContextWrapper } from "./context/app";

const layout = ({ children }: any) => {
  return (
    <EStoreAppContextWrapper>
      <div className="flex-1 w-full h-full">
        <Header />
        {children}
      </div>
    </EStoreAppContextWrapper>
  );
};

export default layout;
