import React from "react";
import { Link } from "react-router-dom";

const NavBarSection = ({ change }) => {
  return (
    <section>
      <header className="body-font bg-BgColor text-TextColor">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-TextColor mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">🍦 Ice Creamyy</span>
          </a>

          {/* Navbar Links */}
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/flavors" className="mr-5 hover:text-TextColor">Flavors</Link>
            <Link to="/scoops" className="mr-5 hover:text-TextColor">Scoops</Link>
            <Link to="/sundaes" className="mr-5 hover:text-TextColor">Sundaes</Link>
            <Link to="/toppings" className="mr-5 hover:text-TextColor">Toppings</Link>
          </nav>

          {/* Dark / Light Button */}
          <button
            className="inline-flex items-center bg-blue-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base mt-4 md:mt-0"
            onClick={change}
          >
            Dark / Light
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </section>
  );
};

export default NavBarSection;
  