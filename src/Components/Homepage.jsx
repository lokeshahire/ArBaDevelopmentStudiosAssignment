import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SingleProduct from "./SingleProduct";
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

function Homepage() {
  const [showTermsDialog, setShowTermsDialog] = useState(true);
  const [showUserProfileMenu, setShowUserProfileMenu] = useState(false);
  //   const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(1);
  // const [cartItems, setCartItems] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);

  // Check if user has accepted terms
  useEffect(() => {
    const acceptedTerms = localStorage.getItem("acceptedTerms");
    if (acceptedTerms) {
      setShowTermsDialog(false);
    }
  }, []);

  // Handle accepting terms
  const handleAcceptTerms = () => {
    localStorage.setItem("acceptedTerms", true);
    setShowTermsDialog(false);
  };

  // Handle cancelling terms
  const handleCancelTerms = () => {
    window.location.href = "/home";
    setShowTermsDialog(true);
  };

  // Handle clicking on user profile
  const handleUserProfileClick = () => {
    setShowUserProfileMenu(!showUserProfileMenu);
  };

  // Handle clicking on logout
  const handleLogoutClick = () => {
    setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("acceptedTerms");

    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleCodingChallengeClick = () => {
    navigate("/codechallenge");
  };

  useEffect(() => {
    // Fetch products from API
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  //   const addToCart = (productId) => {
  //     // TODO: Implement adding product to cart logic
  //     setCartCount(cartCount + 1);
  //   };

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (itemIndex >= 0) {
      // product already exists in cart, update quantity
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += 1;
      setCartCount(cartCount + 1);

      setCartItems(newCartItems);
    } else {
      // product not in cart, add it
      const newCartItem = { id: product.id, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    alert("Product added to cart");
  };
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  return (
    <Box>
      {showTermsDialog && (
        <Box className={styles.dialogBox}>
          <Heading>Terms and Conditions</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Veniam, mollitia. Vero
            modi expedita impedit dignissimos accusamus ad deleniti itaque ut
            odit fuga unde eos quidem, magnam quisquam similique? At, eius.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            ratione nihil! Libero inventore tempora modi beatae, porro autem
            excepturi minus adipisci aperiam. Ab eligendi eos consectetur
            tenetur dicta, expedita atque!
          </p>
          <Button className={styles.dialogBoxBtn} onClick={handleAcceptTerms}>
            Accept
          </Button>
          <Button className={styles.dialogBoxBtn} onClick={handleCancelTerms}>
            Cancel
          </Button>
        </Box>
      )}

      {/* rest of the home page */}
      <Box>
        {/* Carousel section */}
        {/* <Box>Carousel section</Box> */}

        <Carousel
          showArrows={true}
          className={styles.carousel}
          autoPlay={true}
          centerSlidePercentage={100}
          infiniteLoop
          swipeable
          showStatus={true}
          emulateTouch
          thumbWidth={100}
          interval={2000}
          transitionTime={2000}
          useKeyboardArrows
          stopOnHover
          showThumbs={false}
        >
          <Box>
            <Image
              style={{ height: "600px" }}
              src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />

            <p className="legend">Color 1</p>
          </Box>
          <Box>
            <Image
              style={{ height: "600px" }}
              src="https://images.unsplash.com/photo-1574577457890-57d56460e04c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <p className="legend">Color 2</p>
          </Box>
          <Box>
            <Image
              style={{ height: "600px" }}
              src="https://images.unsplash.com/photo-1575191833171-ebb34c7929a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <p className="legend">Color 3</p>
          </Box>
          <Box>
            <Image
              style={{ height: "600px" }}
              src="https://images.unsplash.com/photo-1574920822642-4199a7b9445a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <p className="legend">Color 4</p>
          </Box>
          <Box>
            <Image
              style={{ height: "600px" }}
              src="https://images.unsplash.com/photo-1578811343940-37a35b34fe80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <h1 className="legend">Color 5</h1>
          </Box>
        </Carousel>

        {/* Products section */}
        <Heading>Products</Heading>
        <Box className={styles.homeDiv}>
          {/* {products.map((product) => (
            <Box key={product.id}>
              <img
                src="https://www.computerhope.com/jargon/r/random-dice.jpg"
                alt=""
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <Button onClick={() => addToCart(product)}>
                {cartItems.some((item) => item.id === product.id)
                  ? ` ${
                      cartItems.find((item) => item.id === product.id).quantity
                    } +`
                  : "Add to cart"}
              </Button>
            </Box>
          ))} */}
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

        {/* All Products Button */}
        <Button
          className={styles.allProdBtn}
          onClick={() => {
            /* Navigate to Products page */
            navigate("/product");
          }}
        >
          All Products
        </Button>
      </Box>
    </Box>
  );
}

export default Homepage;
