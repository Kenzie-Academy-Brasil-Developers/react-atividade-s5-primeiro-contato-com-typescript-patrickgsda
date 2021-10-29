import React from "react";
import Crd from "@material-ui/core/Card";

interface CardProps {
  name: string;
  hobby: string;
  age: string;
}

export const Card = ({ name, hobby, age }: CardProps) => {
  return (
    <Crd variant="outlined" sx={{ padding: "15px" }}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Hobby: {hobby}</p>
    </Crd>
  );
};
