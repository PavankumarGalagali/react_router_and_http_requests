import React from "react";
import { useHistory } from "react-router";

export default function Header(props) {
 
  const history = useHistory();

  console.log(history);
  return (
    <div>
      <h1>Header Component</h1>
      <button
        onClick={() => {
          history.push("/home");
        }}
      >
        Go To Home
      </button>
    </div>
  );
}
