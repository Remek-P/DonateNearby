import React from "react";
import DisplayNoOf from "../../../DisplayNoOf/DisplayNoOf";

export default function NoOfBags({ formDataSessionStorage, setActiveAttrHover }) {

  let bagsArray = [];

  formDataSessionStorage.forEach((el) => bagsArray.push(+el.bagNumber));

  const defaultValue = () => {
    setActiveAttrHover("attrHover");
    return 10;
  };

  const exactValue = () => {
    setActiveAttrHover(false);
    return bagsArray.reduce?.((total, item) => total + item, 0);
  };

  const noOfBags = exactValue() || defaultValue();

  return (
      <DisplayNoOf noOf={noOfBags} />
  )
}