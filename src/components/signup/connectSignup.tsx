import React, { useState } from "react";
import { CommonButton } from "../../sharedComponent/button/commonButton";
import { GoogleLogo } from "../../assets/connectLogo/googleLogo";
import {ConnectSignUpSchema} from "../../utils/schema/signUp/connectSignupSchema"




export const ConnectSignup: React.FC = () => {

  const [userName, setUsername]=useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]=useState("");
  // const [signUpErrors,setSignUpErrors]=useState<{[key:string]:string}>();



  const OnHandleChangeUsername=(e:any)=>{
    e.preventDefault();
    setUsername(e.target.value)
  }

  const OnHandleChangeEmail=(e:any)=>{
    e.preventDefault();
    setEmail(e.target.value)
  }

  const OnHandleChangePassword=(e:any)=>{
    e.preventDefault();
    setPassword(e.target.value);
  }

  const onClickSignupButton=()=>{
    const formValue = {
      userName,
      email,
      password
    }
    const validatedSignUpForm = ConnectSignUpSchema.validate(formValue, {abortEarly:false});
    console.log(validatedSignUpForm);
    // const errors = validatedSignUpForm.error?.details;
    // const mappedError= errors?.forEach((err)=>{
      
    // })
    // setSignUpErrors(errors);
  }

  return (
    <>
      <div className="flex h-screen w-screen flex-col justify-center items-center">
        <div className="flex justify-center">
          <p className="text-[24px] font-[600]">Let's Connect</p>
        </div>
        <div className="flex justify-center">
          <p className="text-[32px] font-[500]">Create an account</p>
        </div>

        <div className="flex flex-col gap-[22px] mt-[20px] w-full max-w-[448px]">
          <div className="flex flex-col gap-[12px]">
            <p className="text-[18px]">Username</p>
            <input
              className="h-[42px] focus:outline-none focus:ring-0 border-[1px] rounded-[6px] text-[17px] px-[10px] py-[6px] bg-gradient-to-br from-pink-100 to-purple-50"
              type="text"
              placeholder="Username"
              value={userName}
              onChange={OnHandleChangeUsername}
            />
          </div>
          {/* <div className="flex flex-col gap-[12px]">
            <p className="text-[18px]">Last Name</p>
            <input
              className="h-[42px] focus:outline-none focus:ring-0 border-[1px] rounded-[6px] text-[17px] px-[10px] py-[6px] bg-gradient-to-br from-pink-100 to-purple-50"
              type="text"
              placeholder="Last Name"
            />
          </div> */}
          <div className="flex flex-col gap-[12px]">
            <p className="text-[18px]">Email</p>
            <input
              className="h-[42px] focus:outline-none focus:ring-0 border-[1px] rounded-[6px] text-[17px] px-[10px] py-[6px] bg-gradient-to-br from-pink-100 to-purple-50"
              type="text"
              placeholder="Email"
              value={email}
              onChange={OnHandleChangeEmail}
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
          </div>
          <div className="flex justify-center">
            <CommonButton
              title="Signup"
              className="text-white w-full text-[18px]"
              onClick={onClickSignupButton}
            />
          </div>
          <div className="flex items-center gap-[6px]">
            <hr className="flex-1 border-t border-gray-800" />
            <p>OR</p>
            <hr className="flex-1 border-t border-gray-800" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[22px] mt-[22px] w-full max-w-[448px]">
          <CommonButton
            className="text-[18px] w-full"
            title={
              <>
                <GoogleLogo />
                Continue with Google
              </>
            }
          />
          <p>Already have an account? <a href="/login" className="hover:text-[#277be8] hover:underline">Sign in</a></p>
        </div>
      </div>
    </>
  );
};
