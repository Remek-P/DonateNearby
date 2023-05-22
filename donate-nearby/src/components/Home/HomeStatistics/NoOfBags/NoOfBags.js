import React from "react";
import DisplayNoOf from "../../../DisplayNoOf/DisplayNoOf";

export default function NoOfBags({formDataSessionStorage}) {

  let bagsArray = [];

  formDataSessionStorage.forEach((el) => bagsArray.push(+el.bagNumber));

  const noOfBags = bagsArray.reduce?.((total, item) => total + item, 0) || 10;

  return (
      <DisplayNoOf noOf={noOfBags} />
  )
}