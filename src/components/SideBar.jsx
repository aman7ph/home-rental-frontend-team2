import { useState } from "react";
import {
  MdDashboard,
  MdOutlineChatBubbleOutline,
  MdOutlineArrowCircleLeft,
  MdCalendarMonth,
  MdOutlineSearch,
  MdOutlineBarChart,
  MdFolderOpen,
  MdOutlineSettings,
} from "react-icons/md";
import { FiUsers } from "react-icons/fi";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  const MenuIcons = {
    MdDashboard: MdDashboard,
    MdOutlineChatBubbleOutline: MdOutlineChatBubbleOutline,
    FiUsers: FiUsers,
    MdCalendarMonth: MdCalendarMonth,
    MdOutlineSearch: MdOutlineSearch,
    MdOutlineBarChart: MdOutlineBarChart,
    MdFolderOpen: MdFolderOpen,
    MdOutlineSettings: MdOutlineSettings,
  };

  const Menus = [
    { title: "Dashboard", icon: "MdDashboard" },
    { title: "Inbox", icon: "MdOutlineChatBubbleOutline" },
    { title: "Accounts", icon: "FiUsers", gap: true },
    { title: "Schedule ", icon: "MdCalendarMonth" },
    { title: "Search", icon: "MdOutlineSearch" },
    { title: "Analytics", icon: "MdOutlineBarChart" },
    { title: "Files ", icon: "MdFolderOpen", gap: true },
    { title: "Setting", icon: "MdOutlineSettings" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } relative  bg-green-500  p-5 pt-8 duration-300`}
      >
        <MdOutlineArrowCircleLeft
          className={`w-27  absolute	-right-3 top-9 cursor-pointer rounded-full border-violet-700 bg-white
           text-2xl text-violet-500  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-x-4">
          <MdDashboard
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`origin-left text-xl font-medium text-white duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => {
            const IconComponent = MenuIcons[Menu.icon];
            return (
              <li
                key={index}
                className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-900 hover:bg-white ${
                  Menu.gap ? "mt-9" : "mt-2"
                } `}
              >
                <IconComponent />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};
export default SideBar;
