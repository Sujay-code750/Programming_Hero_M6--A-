import React from "react";
import BannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="py-20">
      <div className="w-7xl mx-auto flex justify-between items-center">
        <div className="bannerLeft space-y-5">

          <div className="flex items-center gap-3 bg-[#e1e7ff] rounded-full px-4 py-2 w-fit">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-6 h-6 bg-[#d1bdfe] opacity-30 rounded-full"></span>
              <span className="absolute w-4 h-4 bg-[#b37cfc] opacity-50 rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-[#7724f9] rounded-full"></span>
            </div>
            <p className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h1 className="text-[72px] font-bold text-base/20">
            Supercharge Your <br />
            Digital Workflow
          </h1>
          <p className="color-1 text-[18px] line-">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today.
          </p>
          <div className="buttons space-x-5">
            <button type="button" className="cursor-pointer primaryGradient px-5 py-4 rounded-full text-white font-semibold">
              Explore Products
            </button>
            <button type="button" className="cursor-pointer border border-[#642ef7] px-5 py-4 rounded-full">
              <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold">
                Watch demo
              </span>
            </button>
          </div>
        </div>
        <div className="bannerRight">
          <img src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
