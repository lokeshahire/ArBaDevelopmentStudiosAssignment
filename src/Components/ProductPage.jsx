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
import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

function ProductPage() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [cartCount, setCartCount] = useState(1);

  useEffect(() => {
    // Fetch products from API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    alert("Added to cart");
  };
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  return (
    <Box>
      <Heading style={{ marginTop: "50px", paddingTop: "100px" }}>
        Products
      </Heading>
      <Box className={styles.homeDiv}>
        {products.map((product) => (
          <SingleProduct
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.price}
            desc={product.description}
            addToCart={handleAddToCart}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ProductPage;
