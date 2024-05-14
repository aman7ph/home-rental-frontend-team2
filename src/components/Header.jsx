import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';

import logo from "../assets/logo.svg";
const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header className="mb-12 border-b py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="keray" className="w-30 h-5" />
        </Link>

        <div className="flex items-center gap-6">
        <Link className="hover:text-violet-900" to="/dashboard">
            <DashboardIcon />
            Dashboard
          </Link>
          <Link className="hidden hover:text-violet-900 sm:block" to="">
            About
          </Link>
          {currentPath !== "/login" && (
            <Link className="hover:text-violet-900" to="/login">
              Login
            </Link>
          )}
          {currentPath !== "/signup" && (
            <Link
              className="rounded-lg bg-violet-700 px-4 py-3 text-white transition hover:bg-violet-800"
              to="/signup"
            >
              Sign up
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
