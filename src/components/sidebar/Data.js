import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";

export const Data = [
  {
    title: "Counter",
    path: "#",
    icon: <HiIcons.HiCursorClick />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Counter",
        path: "/counter",
        icon: <GiIcons.GiClick />,
      },
      {
        title: "Cart Counter",
        path: "/cart-counter",
        icon: <FaIcons.FaShoppingCart />,
      },
    ],
  },
  {
    title: "Search",
    path: "/search",
    icon: <FaIcons.FaSearch />,
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
    path: "/movie",
    icon: <FaIcons.FaBitcoin />,
  },
];
