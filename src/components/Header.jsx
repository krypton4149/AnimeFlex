import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BiGlobe, BiSearch, BiMenu, BiX } from "react-icons/bi";
import logo from "../assets/images/animeFlex.png";
import { Button } from "../components";
import { navLinks } from "../constants";

const Header = () => {
  const [isSearchFormOpen, setSearchFormOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const formRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleSearchForm = () => {
    setSearchFormOpen(!isSearchFormOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchFormOpen(false);
    navigate(`/search?query=${searchTerm}`);
    setSearchTerm("");
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setSearchFormOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isSearchFormOpen || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchFormOpen, isMobileMenuOpen]);

  return (
    <header className="relative w-full p-4 z-50 bg-gradient-to-b from-black to-transparent transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between w-full">
        <div className="w-1/6 max-lg:w-1/3">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="max-lg:hidden flex items-center justify-center gap-10 w-auto text-custom-white text-2xl font-bold font-Zain">
          {navLinks.map((nav) => (
            <NavLink
              to={nav.href}
              key={nav.label}
              className="hover:text-custom-green_dark"
            >
              {nav.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center justify-end gap-10 w-1/5 max-lg:w-1/2 max-lg:gap-6">
          <div>
            <BiSearch
              className="text-custom-green text-xl max-lg:text-3xl cursor-pointer"
              onClick={toggleSearchForm}
            />
          </div>
          <div className="max-lg:hidden flex items-center gap-1">
            <BiGlobe className="text-custom-green text-xl" />
            <select
              name="lang"
              className="bg-transparent text-custom-white focus:outline-none"
            >
              <option value="eng" className="text-custom-black">
                EN
              </option>
              <option value="frnch" className="text-custom-black">
                FR
              </option>
              <option value="grmn" className="text-custom-black">
                GR
              </option>
            </select>
          </div>
          <Button btnTitle="Login" btnURL="/login" />
          <BiMenu
            className="text-custom-green text-6xl cursor-pointer"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
      {isSearchFormOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-custom flex justify-center items-center bg-opacity-80">
          <form
            ref={formRef}
            className="z-10 cursor-pointer flex items-center justify-between px-1 py-2 gap-1 border-b-2 border-custom-white border-opacity-40 w-1/2"
            onSubmit={handleSearchSubmit}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="search...."
              name="search_bar"
              className="bg-transparent outline-none w-11/12 capitalize text-custom-white text-2xl"
            />
            <button type="submit">
              <BiSearch className="text-custom-green text-2xl" />
            </button>
          </form>
        </div>
      )}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-custom flex flex-col items-center justify-center max-lg:w-full"
        >
          <button
            className="absolute top-10 right-8 text-custom-white text-5xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            <BiX />
          </button>
          <div className="flex w-full flex-col items-center gap-8">
            {navLinks.map((nav) => (
              <NavLink
                to={nav.href}
                key={nav.label}
                onClick={() => setMobileMenuOpen(false)}
                className="text-custom-white text-2xl hover:text-custom-green_dark"
              >
                {nav.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
