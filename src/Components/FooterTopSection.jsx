import React from "react";

const FooterTopSection = () => {
  return (
    <div className="primaryGradient py-20">
      <div className="w-7xl mx-auto text-center text-white">
        <h1 className="text-[40px] font-bold mb-5">Ready to Transform Your Workflow?</h1>
        <p>
          Join thousands of professionals who are already using Digitools to work
          smarter. <br />
          Start your free trial today.
        </p>

        <div className="button space-x-5 mt-10 mb-4">
          <button
            type="button"
            className="cursor-pointer border border-transparent  px-5 py-3 rounded-full text-[#7127f8] bg-white font-semibold"
          >
            Explore Products
          </button>
          <button
            type="button"
            className="cursor-pointer border border-white px-5 py-3 rounded-full text-white font-semibold"
          >
            View Pricing
          </button>
        </div>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default FooterTopSection;
