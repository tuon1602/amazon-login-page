"use client";
import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const handleOpenDropdown = () => {
    setOpen(!open);
  };
  return (
    <div>
      {open === false ? (
        <button
          onClick={handleOpenDropdown}
          className="flex items-center text-sky-600 hover:text-[#f0c14b] hover:text-decoration-1 hover:underline text-[13px]"
        >
          <ChevronRight className="h-[10px] w-[10px] text-black mr-2" />
          Need help?
        </button>
      ) : (
        <>
          <button
            onClick={handleOpenDropdown}
            className="flex items-center text-sky-600 hover:text-[#f0c14b] hover:text-decoration-1 hover:underline text-[13px]"
          >
            <ChevronDown className="h-[10px] w-[10px] text-black mr-2" />
            Need help?
          </button>
          <div className="flex flex-col ml-[18px]">
            <span className="text-[13px]">
              <Link
                className="inline-block text-sky-600 hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
                href="/"
              >
                Forgot your password?
              </Link>
            </span>
            <span className="text-[13px]">
              <Link
                className="inline-block text-sky-600 hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
                href="/"
              >
                Other issues with Sign-In
              </Link>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
