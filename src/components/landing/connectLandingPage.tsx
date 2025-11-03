import React from "react";

export const ConnectLandingPage: React.FC = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/2">
          <div className="flex justify-around shadow-[2px_2px_2px_0_rgba(0,0,0,0.25)]">
            <span>Home</span>
            <span>About us</span>
            <span>Activity</span>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
        <div className="flex w-1/2 justify-around">
          <span>Sign In</span>
          <span>Sign Up</span>
          </div>
        </div>
      </div>
    </>
  );
};
