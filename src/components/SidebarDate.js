import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

export const SidebarDate = [
  {
    title: "Counter",
    path: "/counter",
    icon: <HiIcons.HiCursorClick />,
  },
  {
    title: "Unit Converter",
    path: "#",
    icon: <MdIcons.MdChangeCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Minutes To Hours",
        path: "/unit-converter",
        icon: <MdIcons.MdChangeCircle />,
      },
      {
        title: "Km To Miles",
        path: "/unit-converter",
        icon: <MdIcons.MdChangeCircle />,
      },
    ],
  },
  {
    title: "To Do List",
    path: "/to-do-list",
    icon: <IoIcons.IoIosListBox />,
  },
  {
    title: "Coin Tracker",
    path: "/coin-tracker",
    icon: <FaIcons.FaBitcoin />,
  },
  {
    title: "Movie",
    path: "/Movie",
    icon: <FaIcons.FaBitcoin />,
  },
];
