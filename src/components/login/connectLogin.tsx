import React, { useState } from "react";
import { CommonButton } from "../../sharedComponent/button/commonButton";
import { GoogleLogo } from "../../assets/connectLogo/googleLogo";

export const ConnectLogin: React.FC = () => {
  const [userNameEmail, setUserNameEmail]=useState()
  const [password,setPassword]=useState()

  const OnHandleChangeNameEmail=(e:any)=>{
    e.preventDefault();
    setUserNameEmail(e.target.value)
  }

  const OnHandleChangePassword=(e:any)=>{
    e.preventDefault();
    setPassword(e.target.value)
  }
  return (
    <>
      <div className="flex h-screen w-screen flex-col justify-center items-center">
        <div className="flex justify-center">
          <p className="text-[24px] font-[600]">Let's Connect</p>
        </div>
        <div className="flex justify-center">
          <p className="text-[32px] font-[500]">Sign in your account</p>
        </div>

        <div className="flex flex-col gap-[22px] mt-[20px] w-full max-w-[448px]">
          <div className="flex flex-col gap-[12px]">
            <p className="text-[18px]">Username or E-mail</p>
            <input
              className="h-[42px] focus:outline-none focus:ring-0 border-[1px] rounded-[6px] text-[17px] px-[10px] py-[6px] bg-gradient-to-br from-pink-100 to-purple-50"
              type="text"
              placeholder="Username or Email"
              value={userNameEmail}
              onChange={OnHandleChangeNameEmail}
            />
          </div>
          <div className="flex flex-col gap-[12px]">
            <p className="text-[18px]">Password</p>
            <input
              className="h-[42px] focus:outline-none focus:ring-0 border-[1px] rounded-[6px] text-[17px] px-[10px] py-[6px] bg-gradient-to-br from-pink-100 to-purple-50"
              type="password"
              placeholder="Password"
              value={password}
              onChange={OnHandleChangePassword}
            />
            <p className="text-[#277be8]">forgot password?</p>
          </div>
          <div className="flex justify-center">
            <CommonButton
              title="Sign in"
              className="text-white w-full text-[18px]"
            />
          </div>
          <div className="flex items-center gap-[6px]">
            <hr className="flex-1 border-t border-gray-800" />
            <p>OR</p>
            <hr className="flex-1 border-t border-gray-800" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-[22px] gap-[22px] w-full max-w-[448px]">
          <CommonButton
            className="text-[18px] w-full"
            title={
              <>
                <GoogleLogo />
                Continue with Google
              </>
            }
          />
          <p>Dont't have an account?<a href="/" className="hover:text-[#277be8] hover:underline"> Sign Up</a></p>

        </div>
      </div>
    </>
  );
};
