import React from "react";
import axios from "axios";
import { FaCog, FaDirections } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleRedirectAdd = () => {
    navigate("/add");
  };

  const handleRedirectSetting = () => {
    navigate("/setting");
  };
  const handleLogout = () => {
    axios.get("/logout");
    navigate("/");
  };

  return (
    <>
      <ul style={{ display: "flex", gap: "10px" }}>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
        <li>This is a header</li>
      </ul>
    </>
  );
}
