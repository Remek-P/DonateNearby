import React from "react";

export default function NoOfBags({formDataSessionStorage}) {

  const bagsArray = [];

  formDataSessionStorage.forEach((el) => bagsArray.push(+el.bagNumber));

  const noOfBags = bagsArray.reduce((total, item) => {
    return total + item
  }, 10);

  const displayNoOfBags = () => {
    if (noOfBags <= 10000) {
      return noOfBags;
    } else if (noOfBags < 1000000) {
      return `${Math.floor(noOfBags / 1000)}k+`
    } else if (noOfBags < 1000000000) {
      return `${Math.floor(noOfBags / 1000000)}M+`
    } else {
      return `${Math.floor(noOfBags / 1000000000)}mld+`
    }
  };

  return (
      <>
        {displayNoOfBags()}
      </>
  )
}