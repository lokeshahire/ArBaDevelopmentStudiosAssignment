import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import styles from "./page.module.css";

const Profile = () => {
  const [showTcPopup, setShowTcPopup] = useState(false);

  const handleTcPopupAccept = () => {
    setShowTcPopup(false);
    // TODO: save user's acceptance of T&C to backend
  };

  const handleTcPopupCancel = () => {
    setShowTcPopup(true);
  };
  const [showTermsDialog, setShowTermsDialog] = useState(true);

  useEffect(() => {
    const acceptedTerms = localStorage.getItem("acceptedTermsProfile");
    if (acceptedTerms) {
      setShowTermsDialog(false);
    }
  }, []);

  return (
    <Box>
      <Heading style={{ marginTop: "50px", paddingTop: "100px" }}>
        Profile Page
      </Heading>
      <Image
        style={{ width: "200px" }}
        src="https://i.pinimg.com/originals/a9/2b/81/a92b81ded0ab0f3a46aa55eca9d65c41.png"
        alt="User Image"
      />
      <p>Username: mor_2314</p>
      <p>Email: mor_2314@gmail.com</p>
      <Button
        className={styles.dialogBoxBtn}
        onClick={() => setShowTcPopup(true)}
      >
        See T&amp;C
      </Button>

      {showTcPopup && (
        <Box className={styles.dialogBox} style={{ marginTop: "-300px" }}>
          <Heading>Terms &amp; Conditions</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Sapiente, vitae
            provident! Doloribus tempora error illum quisquam accusantium
            blanditiis cumque ipsum doloremque ipsam consequuntur. Quis beatae
            assumenda expedita libero magnam atque.
          </p>
          <Button className={styles.dialogBoxBtn} onClick={handleTcPopupAccept}>
            Accept
          </Button>
          <Button className={styles.dialogBoxBtn} onClick={handleTcPopupCancel}>
            Cancel
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Profile;
