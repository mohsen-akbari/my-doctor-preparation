import React from "react";

export default async function BriefComponent({ content }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(<>{content}</>);
    }, 5000);
  });
}
