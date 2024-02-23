import Image from "next/image";
import AmazonLogo from "../../public/assets/Amazon_logo.svg";
import Link from "next/link";
import LoginForm from "./component/LoginForm";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center py-[18px]">
      <Link href="https://www.amazon.com/" target="_blank">
        <Image
          src={AmazonLogo}
          priority
          alt="Follow us on amazon"
          height={31}
          width={103}
        />
      </Link>
      <div className="shadow">
        <div className="mt-[18px] flex flex-col">
          <LoginForm />
          <h2 className="w-full text-center border-b border-gray-200 leading-[0.1rem] my-6">
            <span className="bg-white px-2 text-[#767676] text-[12px]">
              New to amazon?
            </span>
          </h2>
          <Link
            href="/"
            className="border-[1px] border-gray-200 rounded-md px-5 py-1 text-center text-sm"
          >
            Create your Amazon account
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
