import React from "react";
import { Box, Flex, Image, Text, Avatar } from "@chakra-ui/react";
import AvatarImage from "../assets/avatar.png";
import MainstackLogo from "../assets/mainstack_logo.svg";
import ThreeDotsImage from "../assets/3_dots.svg";
import {
  menu1,
  menu2,
  menu3,
  mobileMenu,
  sidebarItemTextStyles,
  sidebarItemStyles,
  mobileSideBarItemStyes,
  mobileSideBarItemTextStyles,
} from "../utils/dashboardLayoutUtils"; //sidebar items (with image & text)
import { NavLink, Outlet } from "react-router-dom";
import "./dashboard.scss";

const SidebarItem = ({
  icon,
  label,
  to,
}: {
  icon: React.ReactNode;
  label: string;
  to: string;
}) => {
  return (
    <NavLink
      to={to}
      style={sidebarItemStyles}
      className={({ isActive }) => (isActive ? "activeMenu" : undefined)}
    >
      {icon}
      <Text {...sidebarItemTextStyles} className="activeNavText">
        {label}
      </Text>
    </NavLink>
  );
};

const Sidebar = () => {
  const menuHeaderStyle = {
    color: "#4D5760",
    fontSize: "12px",
    lineHeight: "16px",
    marginLeft: "60px",
    letterSpacing: "0.04em",
    marginBottom: "20px",
    marginTop: "32px",
  };
  return (
    <Flex width="100%" height="100%" direction="column" justify="space-between">
      <Box pt="32px">
        <Image ml="54px" alt="logo" src={MainstackLogo} mb="53px" />
        {menu1.map((menuItem, index) => (
          <SidebarItem
            icon={menuItem.icon}
            label={menuItem.name}
            to={menuItem.to}
            key={index}
          />
        ))}
        <Text {...menuHeaderStyle} textTransform="uppercase" textAlign="left">
          Payments
        </Text>
        {menu2.map((menuItem, index) => (
          <SidebarItem
            icon={menuItem.icon}
            label={menuItem.name}
            to={menuItem.to}
            key={index}
          />
        ))}
        <Text {...menuHeaderStyle} textTransform="uppercase" textAlign="left">
          Business Tools
        </Text>
        {menu3.map((menuItem, index) => (
          <SidebarItem
            icon={menuItem.icon}
            label={menuItem.name}
            to={menuItem.to}
            key={index}
          />
        ))}
      </Box>

      <Flex ml="60px" justify="space-between" mb="60px" align="center">
        <Flex align="center">
          <Avatar src={AvatarImage} boxSize="32px" />
          <Text ml="12px !important">Blessing Daniels</Text>
        </Flex>
        <Image src={ThreeDotsImage} alt="menu" mr="16px" />
      </Flex>
    </Flex>
  );
};

const Dashboard = () => {
  return (
    <Flex
      width={"100%"}
      minHeight="100vh"
      direction={{ base: "column", lg: "row" }}
    >
      <Box
        width="20%"
        borderRight="1px solid #E5E8F0"
        position="sticky"
        left="0"
        top="0"
        height="100vh"
        display={{ base: "none", lg: "inline" }}
      >
        <Sidebar />
      </Box>
      <Box width={{ base: "100%", lg: "80%" }} boxSizing="border-box">
        <Outlet />
      </Box>
      <Flex
        position="fixed"
        bottom="0"
        display={{ base: "inline-flex", lg: "none" }}
        width="100%"
        px="20px"
        py="12px"
        borderTop="1px solid #E5E8F0"
        zIndex={1}
        bg="#fff"
      >
        {mobileMenu.map((menu, index) => (
          <NavLink
            to={menu.to}
            style={mobileSideBarItemStyes}
            className={({ isActive }) =>
              isActive ? "activeMobileMenu" : undefined
            }
            key={index}
          >
            <Flex direction="column" align="center">
              {menu.icon}
              <Text {...mobileSideBarItemTextStyles} className="activeNavText">
                {menu.name}
              </Text>
            </Flex>
          </NavLink>
        ))}
      </Flex>
    </Flex>
  );
};

export default Dashboard;
