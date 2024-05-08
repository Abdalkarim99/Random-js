"use client";

import { createContext, useState } from "react";

export const MenuIcon = createContext();

const MenuIconProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    console.log({ open });
    setOpen((prev) => !prev);
  };

  return (
    <MenuIcon.Provider value={{ open, toggle }}>{children}</MenuIcon.Provider>
  );
};

export default MenuIconProvider;
