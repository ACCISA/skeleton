import React from 'react';
import { FaCog } from 'react-icons/fa';
import { IoIosAddCircle } from "react-icons/io";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  
  const navigate = useNavigate();
  
  const handleRedirectAdd = () => {
    navigate("/add")
  }

  const handleRedirectSetting = () => {
    navigate("/setting")
  }

  return (
    <>
      This is a header
    </>
  );
}

