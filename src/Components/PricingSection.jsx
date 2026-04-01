import React from "react";

const PricingSection = () => {
  return (
    <div>
      <div className="w-7xl mx-auto py-20">
        <div className="text-center mb-5">
            <h2 className="text-[48px] font-bold">Simple, Transparent Pricing</h2>
        <p className="color-1 mt-2 text-base">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
        </div>

        {/* pricing cards */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-5">

          {/* card-1 */}
          <div className="card bg-[#f9fafc] border-2 border-gray-100 rounded-2xl">
            <div className="card-body">
              {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
              <div className="">
                <h2 className="text-[24px] font-semibold">Starter</h2>
                <p className="color-1 text-base">Perfect for getting started</p>
              </div>

              <h1 className="text-[20px]">
                <span className="text-[40px] font-bold">$0</span>/Month
              </h1>

              <ul className="mt-3 text-base mb-10 flex-1">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="color-1">Access to 10 free tools</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="color-1">Basic templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="color-1">Community support</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="color-1">1 project per month</span>
                </li>
              </ul>
              <div className="mt-6">
                <button
                  type="button"
                  className="w-full text-base cursor-pointer primaryGradient px-5 py-4 rounded-full text-white font-semibold"
                >
                  Get Started Free
                </button>
              </div>
            </div>
          </div>


          {/* card-2 */}
          <div className="card text-white primaryGradient border-2 border-gray-100 rounded-2xl">
            <div className="card-body relative">

              <span className="badge badge-lg rounded-full text-[#bb4d00] bg-[#fef3c6] text-center absolute -top-3 left-35">Most Popular</span>

              <div className="">
                <h2 className="text-[24px] font-semibold">Pro</h2>
                <p className="text-white text-base">Best for professionals</p>
              </div>

              <h1 className="text-[20px]">
                <span className="text-[40px] font-bold">$29</span>/Month
              </h1>

              <ul className="mt-3 text-base mb-10">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white">Access to all premium tools</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white">Unlimited templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white">Priority support</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white">Unlimited projects</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white">Cloud sync</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white">Advanced analytics</span>
                </li>
              </ul>
              <div className="mt-6">
                <button
                  type="button"
                  className="w-full text-base cursor-pointer bg-white px-5 py-4 rounded-full font-semibold"
                >
                   <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold">
                Start Pro Trial
              </span>
                </button>
              </div>
            </div>
          </div>


          {/* card-3 */}
          <div className="card bg-[#f9fafc] border-2 border-gray-100 rounded-2xl">
            <div className="card-body">
              {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
              <div className="">
                <h2 className="text-[24px] font-semibold">Enterprise</h2>
                <p className="color-1 text-base">For teams and businesses</p>
              </div>

              <h1 className="text-[20px]">
                <span className="text-[40px] font-bold">$99</span>/Month
              </h1>

              <ul className="mt-3 text-base mb-10">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="color-1">Everything in Pro</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="color-1">Team collaboration</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="color-1">Custom integrations</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="color-1">Dedicated support</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="color-1">SLA guarantee</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="color-1">Custom branding</span>
                </li>
              </ul>
              <div className="mt-6">
                <button
                  type="button"
                  className="w-full text-base cursor-pointer primaryGradient px-5 py-4 rounded-full text-white font-semibold"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
