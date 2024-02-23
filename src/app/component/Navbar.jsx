import React from "react";
import AmazonLogo from "../../../public/assets/Amazon_logo.svg";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <Link href="https://www.amazon.com/" target="_blank" className="hidden md:flex md:flex-col md:justify-center md:items-center md:pt-[18px]">
        <Image
          src={AmazonLogo}
          priority
          alt="Follow us on amazon"
          height={31}
          width={103}
        />
      </Link>
      <div className="md:hidden h-[48px] w-screen bg-[#232f3e] flex items-center pl-[12px]">
        <Image
          src={AmazonLogo}
          priority
          alt="Follow us on amazon"
          height={27}
          width={80}
        />
      </div>
    </>
  );
};

export default Navbar;
