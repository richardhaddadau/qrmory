import { useState } from "react";
import ShortLogo from "./ShortLogo";
import { FaPowerOff } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { UserButton } from "@clerk/clerk-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { HiUserCircle } from "react-icons/hi";
import { PiUserCircleFill } from "react-icons/pi";

const DashNavBar = ({ props, handleSettings }) => {
  // States
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className="relative py-4 px-4 md:px-8 top-0 flex flex-row items-center justify-between min-h-16 w-full z-50 bg-qrmory-purple-800">
        <section className="flex flex-row items-center col-span-3">
          <a href="/">
            <ShortLogo className="w-10" />
          </a>
        </section>

        <section className="flex flex-row items-center justify-end col-span-3">
          {/* TODO: Action Logout */}

          <PiUserCircleFill
            size={42}
            className="fill-white"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                handleSettings();
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              Logout
            </MenuItem>
          </Menu>

          <UserButton />
        </section>
      </nav>
    </>
  );
};

export default DashNavBar;
