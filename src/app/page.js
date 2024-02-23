import Image from "next/image";
import AmazonLogo from "../../public/assets/Amazon_logo.svg";
import Link from "next/link";
import LoginForm from "./component/LoginForm";

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
      <hr className="border border-gray-200 opacity-50 mt-[22px] h-[1px] w-screen" />
      <div className="mt-[26px] flex flex-col">
        <div className="flex justify-between">
          <span className="text-[10px]">
            <Link
              className="inline-block text-sky-600 hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
              href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fbusiness%2Fregister%2Fcheck%2Fstatus%3Fref_%3Dab_welcome_bw_ckab_dsk%26originalRef%3Dab_reg_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_ab_reg_web_us&openid.mode=checkid_setup&marketPlaceId=ATVPDKIKX0DER&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=ab_welcome_login_us&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&ref_=ab_welcome_bw_ap-sn_dsk&switch_account=signin&disableLoginPrepopulate=1"
            >
              Conditions of Use
            </Link>
          </span>
          <span className="text-[10px]">
            <Link
              className="inline-block text-sky-600 hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
              href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fbusiness%2Fregister%2Fcheck%2Fstatus%3Fref_%3Dab_welcome_bw_ckab_dsk%26originalRef%3Dab_reg_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_ab_reg_web_us&openid.mode=checkid_setup&marketPlaceId=ATVPDKIKX0DER&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=ab_welcome_login_us&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&ref_=ab_welcome_bw_ap-sn_dsk&switch_account=signin&disableLoginPrepopulate=1"
            >
              Privacy Notice
            </Link>
          </span>
          <span className="text-[10px]">
            <Link
              className="inline-block text-sky-600 hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
              href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fbusiness%2Fregister%2Fcheck%2Fstatus%3Fref_%3Dab_welcome_bw_ckab_dsk%26originalRef%3Dab_reg_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_ab_reg_web_us&openid.mode=checkid_setup&marketPlaceId=ATVPDKIKX0DER&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=ab_welcome_login_us&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&ref_=ab_welcome_bw_ap-sn_dsk&switch_account=signin&disableLoginPrepopulate=1"
            >
              Help
            </Link>
          </span>
        </div>
        <span className="text-gray-500 text-[10px] mt-[10px]">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </span>
      </div>
    </div>
  );
}
