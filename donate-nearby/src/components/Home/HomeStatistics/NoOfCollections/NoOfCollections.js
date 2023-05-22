import React from "react";
import DisplayNoOf from "../../../DisplayNoOf/DisplayNoOf";

export default function NoOfCollections({formDataSessionStorage}) {

  const noOfCollections = formDataSessionStorage.length || 2;

  return (
      <DisplayNoOf noOf={noOfCollections} />
  )
}