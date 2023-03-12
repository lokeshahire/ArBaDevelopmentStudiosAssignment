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
  Input,
} from "@chakra-ui/react";
import styles from "./page.module.css";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      if (username == "" || password == "") {
        alert("Please enter your username and password");

        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Your browser is outdated!</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>;
      } else {
        window.location.href = "/home";
      }
    } else {
      console.error("Login failed");
    }
  };

  return (
    <Box style={{ marginTop: "50px" }} className={styles.mainDiv}>
      <Heading>Login</Heading>
      <FormControl onSubmit={(e) => e.preventDefault()}>
        <FormLabel htmlFor="username" style={{ marginLeft: "50px" }}>
          Username:
        </FormLabel>
        <Box style={{ marginTop: "-25px" }}>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ height: "30px" }}
          />
        </Box>
        <FormLabel
          htmlFor="password"
          style={{ marginLeft: "50px", marginTop: "50px" }}
        >
          Password:
        </FormLabel>
        <Box style={{ marginTop: "-25px" }}>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ height: "30px" }}
          />
        </Box>
        <Button
          variant="solid"
          colorScheme="blue"
          className={styles.submitbtn}
          type="submit"
          onClick={handleLogin}
        >
          Login
        </Button>
        <p
          onClick={() => {
            window.location.href = "/signup";
          }}
          style={{ cursor: "pointer" }}
        >
          Don't have an account ? <b>Sign Up</b>
        </p>
      </FormControl>
    </Box>
  );
};

export default Login;
