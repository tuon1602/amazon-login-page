"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "../wrapper/IconWrapper";
import { AlertCircle, AlertTriangle } from "lucide-react";
import Dropdown from "./Dropdown";
import { handleLogin } from "../actions";
import { useFormState } from "react-dom";
const LoginForm = () => {
  const [state, formAction] = useFormState(handleLogin, undefined);
  console.log(state);
  return (
    <main>
      {state?.error === 400 && (
        <div className="mb-3 rounded-lg border-[1px] border-[#c40000] shadow py-[15px] px-[26px]">
          <div className="flex gap-4">
            <div>
              <AlertTriangle className="font-thin text-[#c40000] w-8 h-8" strokeWidth={1} />
            </div>
            <div>
              <p className="text-[#c40000] text-[17px]">There was a problem</p>
              <p className="text-[13px] text-[#11111] max-w-[300px]">
                We cannot find an account with that email address
              </p>
            </div>
          </div>
        </div>
      )}
      {state?.error === 401 && (
        <div className="mb-3 rounded-lg border-[1px] border-[#c40000] shadow py-[15px] px-[26px]">
          <div className="flex gap-4">
            <div>
              <AlertTriangle className=" text-[#c40000] w-8 h-8" strokeWidth={1} />
            </div>
            <div>
              <p className="text-[#c40000] text-[17px]">
                Incorrect phone number
              </p>
              <p className="text-[13px] text-[#11111] max-w-[300px]">
                We cannot find an account with that mobile number
              </p>
            </div>
          </div>
        </div>
      )}
      <section className="border-2 rounded-lg border-gray-200 min-w-[20rem] py-[20px] px-[26px]  ">
        <div>
          <h1 className="text-[28px] font-normal">Sign in</h1>
          <form className="mt-[10px] flex flex-col" action={formAction}>
            <label className="font-bold pl-[2px] pb-[2px] text-[13px]">
              Email or mobile phone number
            </label>
            <input
              type="text"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              name="emailOrNumber"
              className={`${
                state?.error === 404
                  ? `px-[7px] py-[3px] border-[#c40000] border-[2px] drop-shadow rounded`
                  : `px-[7px] py-[3px] border-[#a6a6a6] border-[1px] drop-shadow rounded`
              }`}
            />
            {state?.error === 404 && (
              <div className="flex gap-2 mt-2 items-center">
                <AlertCircle className="text-[#c40000] h-5 w-5" />
                <span className="text-[#c40000] text-[12px] font-thin">
                  Enter your email or mobile phone number
                </span>
              </div>
            )}
            <button
              type="submit"
              className="my-4 rounded-lg bg-[#FFD814] text-sm h-[31px] font-normal hover:bg-[#f0c14b]"
            >
              Continue
            </button>
          </form>
          <div className=" text-[12px] max-w-[300px]">
            By continuing, you agree to Amazon's{" "}
            <Link
              className="text-[#0066c0] hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
              href="/"
            >
              Conditions of Use
            </Link>{" "}
            and{" "}
            <Link
              className="text-[#0066c0] hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
              href="/"
            >
              Privacy Notice.
            </Link>
          </div>
          <div className="my-[22px]">
            <Dropdown />
          </div>
          <hr className="mb-[10px]"></hr>
          <div className="flex flex-col">
            <span className="font-bold text-[13px]">Buying for work?</span>
            <span className="text-[13px]">
              <Link
                className="inline-block text-[#0066c0] hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
                href="/"
              >
                Shop on Amazon Business
              </Link>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginForm;
