import React from "react";
import { CommonButton } from "../../sharedComponent/button/commonButton";

export const ConnectSignup: React.FC = () => {
  return (
    <>
        <div className="flex justify-center">
            <p className="text-[24px] font-[600]">Sign Up</p>
        </div>
        <div className="flex justify-center">
          <p className="text-[20px] font-[500]">
            Fill in the Form to continue Signup.
          </p>
        </div>
        <div className="flex flex-col w-[520px] gap-[14px] bg-[#ffffff] px-[50px] py-[62px] mt-[20px] shadow-[0_4px_8px_rgb(0,0,0,0.25)] rounded-[14px] ">
          <div className="flex flex-col gap-[5px] justify-center">
            <p className="text-[20px]">First Name</p>
            <input className="h-[60px] focus:outline-none focus:ring-0 border-[1px] rounded-[6px] text-[20px] px-[10px] py-[6px]" type="text" placeholder="First Name" />
          </div>
          <div className="flex flex-col gap-[5px] justify-center">
            <p className="text-[20px]">Last Name</p>
            <input className="h-[60px] focus:outline-none focus:ring-0 border-[1px] rounded-[6px] text-[20px] px-[10px] py-[6px]" type="text" placeholder="Last Name" />
          </div>
          <div className="flex flex-col gap-[5px] justify-center">
            <p className="text-[20px]">Email</p>
            <input className="h-[60px] focus:outline-none focus:ring-0 border-[1px] rounded-[6px] text-[20px] px-[10px] py-[6px]" type="text" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-[5px] justify-center">
            <p className="text-[20px]">Password</p>
            <input className="h-[60px] focus:outline-none focus:ring-0 border-[1px] rounded-[6px] text-[20px] px-[10px] py-[6px]" type="password" placeholder="Password" />
          </div>
          <div className="flex justify-center">
            <CommonButton title="Signup" className="text-white w-[128px] text-[18px]" />
          </div>
        </div>
    </>
  );
};
