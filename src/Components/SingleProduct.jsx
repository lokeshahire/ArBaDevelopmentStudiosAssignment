// export default SingleProduct;

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
import React from "react";

function SingleProduct({ id, name, price, addToCart, desc }) {
  //   const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart({ id, name, price, desc });
  };
  //   console.log("addtocrt", addToCart);
  return (
    <Box
      className={styles.singleDiv}
      style={{
        width: "300px",
        marginBottom: "30px",
      }}
    >
      <Image
        style={{ width: "200px" }}
        src="https://img.freepik.com/premium-vector/cartoon-boy-graphic-designer-illustration_611998-47.jpg"
        alt=""
      />
      <h3>Title : {name}</h3>
      <p>Price : ${price.toFixed(2)}</p>
      <p>Description : {desc}</p>

      {/* <button onClick={() => addToCart({ id, name, price })}>
        Add to Cart
      </button> */}
      <Button className={styles.singleDivBtn} onClick={handleAddToCart}>
        Add to cart
      </Button>
    </Box>
  );
}

export default SingleProduct;
