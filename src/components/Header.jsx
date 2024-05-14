import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Menu } from "@headlessui/react";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";
const Header = () => {
  const { userData } = useSelector((state) => state.auth);
  const location = useLocation();

  const [sendLogout, { isLoading, error }] = useSendLogoutMutation();
  const currentPath = location.pathname;

  const handleLogout = async () => {
    try {
      const response = await sendLogout();
      toast.success(response.data.message);
    } catch (error) {
      console.error("logging out error:", error);
      toast.error("logging out failed");
    }
  };
  return (
    <header className="mb-12 border-b py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="keray" className="w-30 h-5" />
        </Link>

        <div className="flex items-center gap-6">
          {Object.keys(userData).length !== 0 ? (
            <Menu as="div" className="relative">
              <Menu.Button>
                <img
                  className="h-7 w-7 cursor-pointer rounded-full object-cover"
                  src={userData.photo}
                  alt="profile"
                />
              </Menu.Button>

              <Menu.Items className=" absolute right-0 w-48 rounded-md border bg-white p-2 shadow-lg">
                <Menu.Item>
                  <Link className="block w-full px-3 py-1.5 text-center hover:text-violet-700">
                    Edit Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="block w-full text-nowrap px-3 py-1.5 text-center hover:text-violet-700">
                    Duplicate
                  </Link>
                </Menu.Item>
                <div className="my-1 h-px bg-white/5" />
                <Menu.Item>
                  <Link className=" block w-full text-nowrap px-3 py-1.5 text-center hover:text-violet-700">
                    Archive
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <button
                    onClick={handleLogout}
                    className="w-full px-3 py-1.5 text-red-500 hover:text-red-700"
                  >
                    {/* <TrashIcon className="size-4 fill-white/30" /> */}
                    Logout
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <>
              <Link
                className="hidden cursor-pointer hover:text-violet-900 sm:block"
                to=""
              >
                About
              </Link>
              {currentPath !== "/login" && (
                <Link
                  className="cursor-pointer hover:text-violet-900"
                  to="/login"
                >
                  Login
                </Link>
              )}
              {currentPath !== "/signup" && (
                <Link
                  className="cursor-pointer rounded-lg bg-violet-700 px-4 py-3 text-white transition hover:bg-violet-800"
                  to="/signup"
                >
                  Sign up
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
