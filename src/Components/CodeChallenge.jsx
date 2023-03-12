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
const CodingChallenge = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert input string to array
    const inputArray = input
      .split(",")
      .filter((num) => num !== "")
      .map((num) => parseInt(num));

    // Find smallest positive integer not in array
    const smallestPositiveInt = findSmallestPositiveInt(inputArray);

    setResult(smallestPositiveInt);
  };

  const findSmallestPositiveInt = (arr) => {
    // Sort array in ascending order
    arr.sort((a, b) => a - b);

    // Find smallest positive integer not in array
    let smallestPositiveInt = 1;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > smallestPositiveInt) {
        return smallestPositiveInt;
      } else if (arr[i] === smallestPositiveInt) {
        smallestPositiveInt++;
      }
    }

    return smallestPositiveInt;
  };

  return (
    <div>
      <h1 style={{ marginTop: "50px", paddingTop: "100px" }}>
        Coding Challenge
      </h1>
      <Box
        style={{
          border: "3px dashed red",
          height: "300px",
          width: "600px",
          margin: "auto",
          padding: "50px",
        }}
      >
        Write a function:
        <br />
        function solution(A);
        <br />
        that, given an array A of N integers, returns the smallest positive
        integer (greater than 0) that does not occur in A.
        <br />
        For example, given A = [1,3,6,4,1,2], the function should return 5.
        <br />
        Given A = [1, 2, 3] , the function should return 4.
        <br />
        Given A = [-1, -3] , the function should return 1.
        <br />
        Write an Effiecient Algorith for following assumptions
        <br />N is Integer within the range [1,100000]
        <br />
        each element of Array A is an Integer within the range [-100000,100000]
      </Box>
      <form onSubmit={handleSubmit}>
        <label>
          <b> Input:</b>

          <br />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Input Enter the values with commas"
          />
        </label>
        <br />
        <Button
          className={styles.allProdBtn}
          style={{ marginTop: "50px" }}
          type="submit"
        >
          Print Result
        </Button>
      </form>
      {result && (
        <div>
          <p>Output: {result}</p>
        </div>
      )}
      <br />
      <br />
      <br />
      <div>
        <b>Note</b>
        <br />
        <br />
        <div style={{ width: "400px", marginLeft: "200px" }}>
          You need to read the data from above input and convert that values
          into array eg: 1,3,6,4,1,2 will be [1,3,6,4,1,2].
          <br />
          <br />
          Use above converted array as a input to your solution
          <br />
          <br />
          Display the output result in above output section once you called the
          solution function and get the result.
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default CodingChallenge;
