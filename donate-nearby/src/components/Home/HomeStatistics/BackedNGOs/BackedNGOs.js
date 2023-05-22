import React from "react";
import DisplayNoOf from "../../../DisplayNoOf/DisplayNoOf";

export default function BackedNGOs({formDataSessionStorage}) {

  const NGOsArray = [];

  formDataSessionStorage.forEach((el) => NGOsArray.push(el.NGO));

  const singledNGOArray = NGOsArray.map((el) => el.split(" ")).flat();

  const noOfNGOs = singledNGOArray.length || 5;

  return (
      <DisplayNoOf noOf={noOfNGOs} />
  )
}