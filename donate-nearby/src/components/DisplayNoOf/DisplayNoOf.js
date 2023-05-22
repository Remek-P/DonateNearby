import React from "react";

export default function DisplayNoOf({noOf}) {
  if (noOf <= 10000) {
    return (noOf);
  } else if (noOf < 1000000) {
    return (`${Math.floor(noOf / 1000)}k+`)
  } else if (noOf < 1000000000) {
    return `${Math.floor(noOf / 1000000)}M+`
  } else {
    return `${Math.floor(noOf / 1000000000)}mld+`
  }
}