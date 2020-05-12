import React from "react";
import { slightlySlowCalculation } from "./calculations";

function Header(props) {
  slightlySlowCalculation();
  return <div>Hello World</div>;
}

export default Header;
