import React from 'react';

const NavBar = () => {
    return (
        <div className='border-b border-gray-200 py-3'>
            <div className="navbar w-7xl mx-auto">
  <div className="navbar-start">
    {/* dropdown menu */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>


    <a className="cursor-pointer bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-4xl font-bold">DigiTools</a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium text-base">
      <li><a href='#' className=''>Products</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end space-x-4">
    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span class="badge badge-sm indicator-item bg-transparent border-none text-red-500">0</span>
        </div>
      </div>
    <a href='#' className="font-semibold">Login</a>
    <a href="#" className='text-white px-5 py-3 rounded-full primaryGradient'>Get Started</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;