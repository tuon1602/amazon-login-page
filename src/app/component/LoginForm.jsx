import React from "react";
import Link from "next/link";
import { ChevronRight } from "../wrapper/IconWrapper";
import Dropdown from "./Dropdown";
const LoginForm = () => {
  return (
    <main className="border-2 rounded-lg border-gray-200 min-w-[20rem] py-[20px] px-[26px]  ">
      <div>
        <h1 className="text-[28px] font-normal">Sign in</h1>
        <form className="mt-[10px] flex flex-col">
          <label className="font-bold pl-[2px] pb-[2px] text-[13px]">
            Email or mobile phone number
          </label>
          <input
            type="email"
            className="px-[7px] py-[3px] border-[#a6a6a6] border-[1px] drop-shadow rounded"
          />
          <button className="my-4 rounded-lg bg-[#FFD814] text-sm h-[31px] font-light hover:bg-[#f0c14b]">
            Continue
          </button>
        </form>
        <div className=" text-[12px] max-w-[300px]">
          By continuing, you agree to Amazon's{" "}
          <Link
            className="text-sky-600 hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
            href="/"
          >
            Conditions of Use
          </Link>{" "}
          and{" "}
          <Link
            className="text-sky-600 hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
            href="/"
          >
            Privacy Notice.
          </Link>
        </div>
        <div className="my-[22px]">
          <Dropdown/>
        </div>
        <hr className="mb-[10px]"></hr>
        <div className="flex flex-col">
          <span className="font-bold text-[13px]">Buying for work?</span>
          <span className="text-[13px]">
            <Link
              className="inline-block text-sky-600 hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
              href="/"
            >
              Shop on Amazon Business
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
