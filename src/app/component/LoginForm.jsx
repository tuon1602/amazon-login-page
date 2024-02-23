"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "../wrapper/IconWrapper";
import { AlertCircle, AlertTriangle } from "lucide-react";
import Dropdown from "./Dropdown";
import { handleLogin, handleRegister } from "../actions";
import { useFormState } from "react-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
const LoginForm = () => {
  const [state, formAction] = useFormState(handleLogin, undefined);
  const [registerState, registerFormAction] = useFormState(
    handleRegister,
    undefined
  );
  const [radio, setRadio] = useState("signin");
  const handleOnchange = (value) => {
    setRadio(value);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <main className="mr-[10px]">
      {state?.error === 404 && (
        <div className="md:hidden">
          <div className="mb-3 rounded-lg border-[1px] border-[#c40000] shadow pt-[13px] pb-[12px] px-[17px]">
            <p className="text-[#c40000] text-[15px] font-bold">
              There was a problem
            </p>
            <p className="text-[15px] text-[#11111] max-w-[300px]">
              Enter your email or mobile phone number
            </p>
          </div>
        </div>
      )}
      {state?.error === 400 ||
        (state?.error === 405 && (
          <div className="md:hidden">
            <div className="mb-3 rounded-lg border-[1px] border-[#c48c00] shadow pt-[13px] pb-[12px] px-[17px]">
              <p className="text-[#c48c00] text-[15px] font-bold">
                No account found with email address
              </p>
              <p className="text-[15px] text-[#11111] max-w-[300px]">
                Please check your email address or click Create Account if you
                are new to Amazon.
              </p>
            </div>
          </div>
        ))}
      {state?.error === 401 && (
        <div className="md:hidden">
          <div className="mb-3 rounded-lg border-[1px] border-[#c48c00] shadow pt-[13px] pb-[12px] px-[17px]">
            <p className="text-[#c48c00] text-[15px] font-bold">
              No account found with mobile number
            </p>
            <p className="text-[15px] text-[#11111] max-w-[300px]">
              Please check your mobile number or click Create Account if you are
              new to Amazon.
            </p>
          </div>
        </div>
      )}
      {state?.error === 400 ||
        (state?.error === 405 && (
          <div className="mb-3 rounded-lg border-[1px] border-[#c40000] shadow py-[15px] px-[26px] hidden md:block">
            <div className="flex gap-4">
              <div>
                <AlertTriangle
                  className="font-thin text-[#c40000] w-8 h-8"
                  strokeWidth={1}
                />
              </div>
              <div>
                <p className="text-[#c40000] text-[17px]">
                  There was a problem
                </p>
                <p className="text-[13px] text-[#11111] max-w-[300px]">
                  We cannot find an account with that email address
                </p>
              </div>
            </div>
          </div>
        ))}
      {state?.error === 401 && (
        <div className="mb-3 rounded-lg border-[1px] border-[#c40000] shadow py-[15px] px-[26px] hidden md:block">
          <div className="flex gap-4">
            <div>
              <AlertTriangle
                className=" text-[#c40000] w-8 h-8"
                strokeWidth={1}
              />
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
      <div className="md:hidden mb-[10px] text-[22px]">Welcome</div>
      <section className="border-2 rounded-lg border-gray-200 md:min-w-[20rem] md:py-[20px] md:px-[26px] px-[16px] py-[10px]">
        <RadioGroup
          defaultValue="signin"
          onValueChange={(event) => handleOnchange(event)}
          className="md:hidden"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="register"
              id="r1"
              className="h-[23px] w-[23px]"
            />
            <label htmlFor="r1" className="font-bold text-[15px]">
              Create account{" "}
              {radio === "register" ? (
                <span className="font-bold text-[13px]">New to amazon?</span>
              ) : (
                <span className="font-thin text-[13px]">New to amazon?</span>
              )}
            </label>
          </div>
          {/* registerForm */}
          {radio === "register" && (
            <div>
              <form
                className="mt-[10px] flex flex-col gap-3"
                action={registerFormAction}
              >
                <div className="">
                  <label className="md:hidden font-bold pl-[2px] pb-[2px] text-[15px] md:text-[13px] ml-0.5">
                    First and last name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="px-[7px] py-[3px] border-[#a6a6a6] border-[1px] drop-shadow rounded h-[43px] md:h-[31px] w-full"
                  />
                </div>
                <div>
                  <label className="md:hidden font-bold pl-[2px] pb-[2px]  text-[15px] md:text-[13px] ml-0.5">
                    Mobile number or email
                  </label>
                  <input
                    type="text"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    name="emailOrNumber"
                    className="px-[7px] py-[3px] border-[#a6a6a6] border-[1px] drop-shadow rounded h-[43px] md:h-[31px] w-full"
                  />
                </div>
                <div>
                  <label className="md:hidden font-bold pl-[2px] pb-[2px]  text-[15px] md:text-[13px] ml-0.5">
                    Create a password
                  </label>
                  <input
                    type={`${showPassword ? `text` : `password`}`}
                    name="password"
                    className="px-[7px] py-[3px] border-[#a6a6a6] border-[1px] drop-shadow rounded h-[43px] md:h-[31px] w-full"
                  />
                </div>
                <div className="flex items-center ml-1">
                  <Checkbox
                    className="w-[23px] h-[23px] data-[state=checked]:bg-white data-[state=checked]:text-[#e87a08]"
                    onCheckedChange={handleShowPassword}
                  />
                  <span className="ml-3 text-[13px]">Show password</span>
                </div>
                <button
                  type="submit"
                  className="my-4 rounded-lg bg-[#fed815] text-sm h-[43px] md:h-[31px] font-normal hover:bg-[#f0c14b]"
                >
                  Continue
                </button>
                <div className="text-[15px] md:text-[12px] max-w-[300px]">
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
                <hr className="mb-[10px]" />
                <div className="flex flex-col">
                  <span className="font-bold md:text-[13px] text-[15px]">
                    Buying for work?
                  </span>
                  <span className="text-[15px] md:text-[13px]">
                    <Link
                      className="inline-block text-[#0066c0] hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
                      href="/"
                    >
                      Shop on Amazon Business
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          )}
          <hr />
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="signin"
              id="r2"
              className="h-[23px] w-[23px]"
            />
            <label htmlFor="r2" className="font-bold text-[15px]">
              Sign in{" "}
              {radio === "signin" ? (
                <span className="font-bold text-[13px]">
                  Already a customer?
                </span>
              ) : (
                <span className="font-thin">Already a customer?</span>
              )}
            </label>
          </div>
        </RadioGroup>
        {/* login form */}
        {radio === "signin" && (
          <div>
            <h1 className="hidden md:block text-[28px] font-normal">Sign in</h1>
            <form className="mt-[10px] flex flex-col" action={formAction}>
              <label className="hidden md:block font-bold pl-[2px] pb-[2px] text-[13px]">
                Email or mobile phone number
              </label>
              <label className="md:hidden font-bold pl-[2px] pb-[2px]  text-[15px] md:text-[13px] ml-2">
                Email or phone number
              </label>
              <input
                type="text"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                name="emailOrNumber"
                className={`${
                  state?.error === 404
                    ? `px-[7px] py-[3px] border-[#c40000] border-[2px] drop-shadow rounded h-[43px] md:h-[31px]`
                    : `px-[7px] py-[3px] border-[#a6a6a6] border-[1px] drop-shadow rounded h-[43px] md:h-[31px]`
                }`}
              />
              {state?.error === 404 && (
                <div className="md:flex gap-2 mt-2 items-center hidden">
                  <AlertCircle className="text-[#c40000] h-5 w-5" />
                  <span className="text-[#c40000] text-[12px] font-thin">
                    Enter your email or mobile phone number
                  </span>
                </div>
              )}
              <button
                type="submit"
                className="my-4 rounded-lg bg-[#fed815] text-sm h-[43px] md:h-[31px] font-normal hover:bg-[#f0c14b]"
              >
                Continue
              </button>
            </form>
            <div className="text-[15px] md:text-[12px] md:max-w-[300px]">
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
            <hr className="mb-[10px]" />
            <div className="flex flex-col">
              <span className="font-bold md:text-[13px] text-[15px]">
                Buying for work?
              </span>
              <span className="text-[15px] md:text-[13px]">
                <Link
                  className="inline-block text-[#0066c0] hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
                  href="/"
                >
                  Shop on Amazon Business
                </Link>
              </span>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default LoginForm;
