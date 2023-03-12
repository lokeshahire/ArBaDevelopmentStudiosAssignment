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

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");

  const handleSignup = async () => {
    const payload = {
      username,
      email,
      fullname,
      password,
    };
    if (
      payload.username == "" ||
      payload.email == "" ||
      payload.password == "" ||
      payload.fullname == ""
    ) {
      alert(" Not successful");
    } else {
      alert("Signup successful");
      console.log(payload);

      window.location.href = "/";
    }
  };

  return (
    <Box
      className={styles.mainDiv}
      style={{ height: "400px", marginTop: "50px" }}
    >
      <Heading>Signup</Heading>
      <FormControl onSubmit={(e) => e.preventDefault()}>
        <FormLabel htmlFor="username">Username:</FormLabel>
        <Box style={{ marginTop: "-20px", marginBottom: "20px" }}>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>

        <FormLabel htmlFor="fullname">Full Name:</FormLabel>

        <Box style={{ marginTop: "-20px", marginBottom: "20px" }}>
          <Input
            type="text"
            id="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </Box>
        <FormLabel htmlFor="email">Email:</FormLabel>

        <Box style={{ marginTop: "-20px", marginBottom: "20px" }}>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <FormLabel htmlFor="password">Password:</FormLabel>

        <Box style={{ marginTop: "-20px", marginBottom: "20px" }}>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <FormLabel htmlFor="cpassword">Confirm Password:</FormLabel>

        <Box style={{ marginTop: "-20px", marginBottom: "20px" }}>
          <Input
            type="password"
            id="cpassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        <Button
          style={{ cursor: "pointer" }}
          className={styles.submitbtn}
          type="submit"
          onClick={handleSignup}
        >
          Register
        </Button>
        <p
          onClick={() => {
            window.location.href = "/";
          }}
          style={{ cursor: "pointer" }}
        >
          Already have an account ? <b>Sign In</b>
        </p>
      </FormControl>
    </Box>
  );
};

export default Signup;
