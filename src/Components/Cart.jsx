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
} from "@chakra-ui/react";
import styles from "./page.module.css";

function Cart() {
  let items = JSON.parse(localStorage.getItem("cartItems"));

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <Box>
      <Heading style={{ marginTop: "50px", paddingTop: "100px" }}>Cart</Heading>
      <Heading>Total Price: ${totalPrice.toFixed(2)}</Heading>

      <Box className={styles.homeDiv} style={{ marginTop: "50px" }}>
        {items.map((item) => (
          <Box
            className={styles.singleDiv}
            style={{ marginLeft: "30px" }}
            key={item.id}
          >
            <span>Title: {item.name}</span>
            <p>Price : {item.price}</p>
            <Image
              style={{ width: "200px" }}
              src="https://img.freepik.com/premium-vector/cartoon-boy-graphic-designer-illustration_611998-47.jpg"
              alt=""
            />
            {/* <button onClick={() => handleRemoveItem(item.id)}>Remove</button> */}
          </Box>
        ))}
      </Box>
      <Button className={styles.allProdBtn} style={{ marginTop: "50px" }}>
        CheckOut
      </Button>
    </Box>
  );
}

export default Cart;
