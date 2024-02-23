import Image from "next/image";
import AmazonLogo from "../../public/assets/Amazon_logo.svg";
import Link from "next/link";
import LoginForm from "./component/LoginForm";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import { Globe } from "@/app/wrapper/IconWrapper";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="ml-[12px] md:flex md:flex-col md:justify-center md:items-center md:pb-[18px]">
        <div className="shadow">
          <div className="md:mt-[18px] mt-[10px] flex flex-col ">
            <LoginForm />
            <h2 className="hidden md:block w-full text-center border-b border-gray-200 leading-[0.1rem] my-6">
              <span className="bg-white px-2 text-[#767676] text-[12px]">
                New to amazon?
              </span>
            </h2>
            <Link
              href="/"
              className=" hidden md:block border-[1px] border-gray-200 rounded-md px-5 py-1 text-center text-sm"
            >
              Create your Amazon account
            </Link>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
      {/* Footer mobile */}
      <div className="md:hidden bg-[#232f3e] mt-[17px]">
        <div className="flex text-white py-[25px] justify-center flex-col items-center">
          <div className="flex gap-5">
            <div className="flex gap-4 items-center">
              <Globe className="w-[15px] h-[15px]" />
              <span className="font-[14px]">English</span>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_the_U.S..svg/512px-Flag_of_the_U.S..svg.png?20221027022216"
                width={20}
                height={8}
              />
              <span className="font-[14px]">United State</span>
            </div>
          </div>
          <div className="flex gap-5 mt-[12px] mb-[10px]">
            <span className="text-[12px]">Conditions of Use</span>
            <span className="text-[12px]">Privacy Notice</span>
            <span className="text-[12px]">Your Ads Privacy Choices</span>
          </div>
          <div className="text-[12px]">© 1996-2024, Amazon.com, Inc. or its affiliates</div>
        </div>
      </div>
    </>
  );
}
