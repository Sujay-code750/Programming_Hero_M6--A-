import React from 'react';
import User from "../assets/user.png"
import Package from "../assets/package.png"
import Rocket from "../assets/rocket.png"

const ThreeStepsSection = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='w-7xl mx-auto py-20 text-center'>
           
  <h2 className="text-[48px] font-bold">Get Started In 3 Steps</h2>
  <p className="color-1 mt-2 text-base">
    Start using premium digital tools in minutes, not hours.
  </p>

  <div className="grid md:grid-cols-3 gap-8 mt-10">

    {/* Card 1 */}
    <div className="card bg-base-100 border border-gray-200 relative pt-20 pb-15 px-6">
      <div className="badge badge-primary w-8 h-8 rounded-full absolute right-4 top-4 primaryGradient"><h1>01</h1></div>

      <div className="flex justify-center">
        <div className="w-26 h-26 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
          <img src={User} alt="" />
        </div>
      </div>

      <h3 className="font-semibold text-[24px] mt-4">Create Account</h3>
      <p className="color-1 mt-2">
       Sign up for free in seconds. No credit card required to get started.
      </p>
    </div>

    {/* Card 2 */}
    <div className="card bg-base-100 border border-gray-200 relative pt-20 pb-15 px-6">
      <div className="badge badge-primary w-8 h-8 rounded-full absolute right-4 top-4 primaryGradient"><h1>02</h1></div>

      <div className="flex justify-center">
        <div className="w-26 h-26 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
          <img src={Package} alt="" />
        </div>
      </div>

      <h3 className="font-semibold text-[24px] mt-4">Choose Products</h3>
      <p className="color-1 mt-2">
       Browse our catalog and select the tool that fit your needs.
      </p>
    </div>

    {/* Card 3 */}
    <div className="card bg-base-100 border border-gray-200 relative pt-20 pb-15 px-6">
      <div className="badge badge-primary w-8 h-8 rounded-full absolute right-4 top-4 primaryGradient"><h1>03</h1></div>

      <div className="flex justify-center">
        <div className="w-26 h-26 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
          <img src={Rocket} alt="" />
        </div>
      </div>

      <h3 className="font-semibold text-[24px] mt-4">Start Creating</h3>
      <p className="color-1 mt-2">
       Download and start using your premium tools immediately.
      </p>
    </div>

  </div>

            </div>
        </div>
    );
};

export default ThreeStepsSection;