"use client";

import React, { useContext } from "react";
import MainHeader from "./MainHeader";
import Link from "next/link";

import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { SiHelpscout } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { MenuIcon } from "@/context/MenuIcon";

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuIcon);

  return (
    <div className="bg-gray-200 w-screen min-h-screen">
      <MainHeader />

      <div className="flex justify-start items-center">
        <aside
          className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${
            open ? "w-60 p-4" : "w-0"
          } lg:hidden lg:p-4`}
        >
          <ul>
            <Link href="/">
              <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                <AiOutlineHome className="mr-2" />
                Home
              </li>
            </Link>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <GrProjects className="mr-2" />
              <h3 className="flex-1"> Projects</h3>
              <FaAngleRight />
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <FaCheck className="mr-2" />

              <h3 className="flex-1"> Projects</h3>
              <FaAngleRight />
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <FaCheckDouble className="mr-2" />

              <h3 className="flex-1">Complex</h3>
              <FaAngleRight />
            </li>

            <Link href='/about-us'>
              <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                <SiHelpscout className="mr-2" />
                About us
              </li>
            </Link>

            <Link href="/contact-us">
              <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                <FiPhoneCall className="mr-2" />
                Contact
              </li>
            </Link>
          </ul>
        </aside>
        <main className=" flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
