"use client";

import { MenuIcon } from "@/context/MenuIcon";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

const MainHeader = () => {
  const { toggle } = useContext(MenuIcon);

  return (
    <div className="bg-white flex justify-between items-center h-12 px-4 mb-4">
      <div>Brand</div>
      <div className="flex justify-center items-center gap-3">
        <div onClick={toggle} className=" lg:hidden">
          <FaBars className=" cursor-pointer" />
        </div>
        <div>Users</div>
      </div>
    </div>
  );
};

export default MainHeader;
