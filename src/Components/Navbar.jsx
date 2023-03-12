import React, { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import styles from "./page.module.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showTermsDialog, setShowTermsDialog] = useState(true);
  const [showUserProfileMenu, setShowUserProfileMenu] = useState(false);
  const navigate = useNavigate();

  //   const handleLogoutClick = () => {
  //     // TODO: implement logout functionality
  //     // Navigate to login page
  //     setLoggedIn(false);
  //     localStorage.removeItem("token");
  //     navigate("/login");
  //   };

  // Handle clicking on user profile
  const handleUserProfileClick = () => {
    setShowUserProfileMenu(!showUserProfileMenu);
  };

  // Handle clicking on logout
  const handleLogoutClick = () => {
    // TODO: implement logout functionality
    // Navigate to login page
    setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("acceptedTerms");
    navigate("/");
  };

  // Handle clicking on profile
  const handleProfileClick = () => {
    // TODO: navigate to profile page
    navigate("/profile");
  };

  // Handle clicking on coding challenge
  const handleCodingChallengeClick = () => {
    // TODO: navigate to coding challenge page
    navigate("/codechallenge");
  };
  return (
    <Box
      className={styles.navbar}
      style={{
        display: "flex",
        position: "fixed",
        zIndex: "10",
        marginTop: "-50px",
      }}
    >
      <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
        LOGO
      </Link>
      <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
        Cart
      </Link>

      {/* <div onClick={handleLogoutClick}>Logout</div> */}
      {/* <header>
        Cart icon with count
        <div onClick={handleUserProfileClick}>User Profile</div>
        {showUserProfileMenu && (
          <div>
            <p onClick={handleLogoutClick}>Logout</p>
            <p onClick={handleProfileClick}>Profile</p>
            <p onClick={handleCodingChallengeClick}>Coding Challenge</p>
          </div>
        )}
      </header> */}
      <Flex
        alignItems={"center"}
        style={{ zIndex: "10", border: "transparent" }}
      >
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar
              style={{ width: "30px" }}
              size={"sm"}
              src={
                "https://i.pinimg.com/originals/a9/2b/81/a92b81ded0ab0f3a46aa55eca9d65c41.png"
              }
            />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleLogoutClick}>
              <p>Logout</p>
            </MenuItem>

            <MenuItem onClick={handleProfileClick}>
              <p>Profile</p>
            </MenuItem>
            <MenuItem onClick={handleCodingChallengeClick}>
              <p>Coding Challenge</p>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;
