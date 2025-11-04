import React from "react";
import suit1 from "../../assets/clothes/suit1.jpg";

export const ConnectLandingPage: React.FC = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/2">
          <div className="flex justify-around h-[50px] items-center">
            <span className="text-[22px] hover:transition-transform duration-200 hover:scale-[1.2]">
              Home
            </span>
            <span className="text-[22px] hover:transition-transform duration-200 hover:scale-[1.2]">
              About us
            </span>
            <span className="text-[22px] hover:transition-transform duration-200 hover:scale-[1.2]">
              Activity
            </span>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="flex w-1/3 justify-around h-[50px] items-center">
            <span className="text-[22px] hover:transition-transform duration-200 hover:scale-[1.2]">
              Sign In
            </span>
            <span className="text-[22px] hover:transition-transform duration-200 hover:scale-[1.2]">
              Sign Up
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-[250px]">
          <div className="flex">
            <div className="w-1/2">
              <div className="flex flex-col h-full justify-center items-center text-[28px]">
                <p>Join us - connect with style,</p>
                <p>create with passion, and</p>
                <p>celebrate yourself.</p>
              </div>
            </div>
            <div className="w-1/2">
              <img className="h-[400px]" src={suit1} alt="suit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
