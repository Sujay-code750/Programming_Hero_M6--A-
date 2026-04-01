import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#101727]  pt-25">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-4">
            <div className='space-y-3'>
              <h2 className="text-[40px] font-semibold tracking-tighter text-white">
               DigiTools
              </h2>
                  <p className="text-zinc-400 max-w-md">
             Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
            </div>

        

            {/* <div className="mt-8 flex gap-6 text-2xl text-zinc-500">
                            <a href="#" className="hover:text-red-500 transition-colors"><FaTwitter /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaGithub /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaLinkedin /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaDiscord /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaYoutube /></a>
                        </div> */}
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-medium mb-6 text-[20px]">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-medium mb-6 text-[20px]">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-medium mb-6 text-[20px]">Legal</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='md:col-span-2'>
            <h3 className="text-white font-medium mb-6 text-[20px]">Social Links</h3>

            <div className='flex gap-5'>
                <div>
                <a href="#"><div className='bg-white w-10 h-10 flex justify-center items-center rounded-full'><span className='text-[#101727] text-xl'><AiFillInstagram /></span></div></a>
            </div>
              <div>
                <a href="#"><div className='bg-white w-10 h-10 flex justify-center items-center rounded-full'><span className='text-[#101727] text-xl'><FaSquareFacebook /></span></div></a>
            </div>
              <div>
                <a href="#"><div className='bg-white w-10 h-10 flex justify-center items-center rounded-full'><span className='text-[#101727] text-xl'><FaXTwitter /></span></div></a>
            </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 py-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} Digitools. All rights reserved..</div>

          <div className="flex gap-6">
            <a href="#" className='text-zinc-400 transition-all hover:text-white'>Privacy Policy</a>
            <a href="#" className='text-zinc-400 transition-all hover:text-white'>Terms of Service</a>
            <a href="#" className='text-zinc-400 transition-all hover:text-white'>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;