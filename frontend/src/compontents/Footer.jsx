import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="py-4 flex justify-center items-center  font-normal dark:text-white">
      <BiCopyright /> { year} Jauhar Muhammed
    </div>
  );
};

export default Footer;
