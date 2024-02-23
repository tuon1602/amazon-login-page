import React from "react";
import Link from "next/link";
import { Globe } from "@/app/wrapper/IconWrapper";
import UnitedState from "../../../public/assets/United_States.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="hidden md:block">
        <hr className="border border-gray-200 opacity-50 mt-[22px] h-[1px] w-screen" />
        <div className="mt-[26px] flex flex-col">
          <div className="flex justify-center gap-5">
            <span className="text-[10px]">
              <Link
                className="inline-block text-[#0066c0] hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
                href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fbusiness%2Fregister%2Fcheck%2Fstatus%3Fref_%3Dab_welcome_bw_ckab_dsk%26originalRef%3Dab_reg_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_ab_reg_web_us&openid.mode=checkid_setup&marketPlaceId=ATVPDKIKX0DER&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=ab_welcome_login_us&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&ref_=ab_welcome_bw_ap-sn_dsk&switch_account=signin&disableLoginPrepopulate=1"
              >
                Conditions of Use
              </Link>
            </span>
            <span className="text-[10px]">
              <Link
                className="inline-block text-[#0066c0] hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
                href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fbusiness%2Fregister%2Fcheck%2Fstatus%3Fref_%3Dab_welcome_bw_ckab_dsk%26originalRef%3Dab_reg_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_ab_reg_web_us&openid.mode=checkid_setup&marketPlaceId=ATVPDKIKX0DER&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=ab_welcome_login_us&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&ref_=ab_welcome_bw_ap-sn_dsk&switch_account=signin&disableLoginPrepopulate=1"
              >
                Privacy Notice
              </Link>
            </span>
            <span className="text-[10px]">
              <Link
                className="inline-block text-[#0066c0] hover:text-[#f0c14b] hover:text-decoration-1 hover:underline"
                href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fbusiness%2Fregister%2Fcheck%2Fstatus%3Fref_%3Dab_welcome_bw_ckab_dsk%26originalRef%3Dab_reg_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_ab_reg_web_us&openid.mode=checkid_setup&marketPlaceId=ATVPDKIKX0DER&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=ab_welcome_login_us&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&ref_=ab_welcome_bw_ap-sn_dsk&switch_account=signin&disableLoginPrepopulate=1"
              >
                Help
              </Link>
            </span>
          </div>
          <span className="text-gray-500 text-[10px] mt-[10px] text-center">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
