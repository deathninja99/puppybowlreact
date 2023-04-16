import React from "react";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/`;

export function Singledog() {
  return (
    <div>
      <Singledog></Singledog>
    </div>
  );
}
export async function Singledogfetch(id) {
  try {
    const response = await fetch(`${APIURL}/${id}
    
}`);
    const SingleDog = await response.json();
    return Singledog;
  } catch (error) {
    console.error(error);
  }
}
