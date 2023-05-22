import React from "react";

export default function BackedNGOs({formDataSessionStorage}) {

  const NGOsArray = [];

  formDataSessionStorage.forEach((el) => NGOsArray.push(+el.NGO));

  const noOfNGOs = NGOsArray.length + 1;

  const displayNoOfNGOs = () => {
    if (noOfNGOs <= 10000) {
      return noOfNGOs;
    } else if (noOfNGOs < 1000000) {
      return `${Math.floor(noOfNGOs / 1000)}k+`
    } else if (noOfNGOs < 1000000000) {
      return `${Math.floor(noOfNGOs / 1000000)}M+`
    } else {
      return `${Math.floor(noOfNGOs / 1000000000)}mld+`
    }
  };

  return (
      <>
        {displayNoOfNGOs()}
      </>
  )
}