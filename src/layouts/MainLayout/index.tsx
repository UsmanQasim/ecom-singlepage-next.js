// Imports from React & Next
import React, { ReactNode } from "react";

// Local Imports
import Navbar from "./Navbar";

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="w-[100dvw] h-[100dvh]">
      <div className="h-[15%]">
        <Navbar />
      </div>
      <div className="h-[85%]">{children}</div>
    </div>
  );
};

export default Layout;
