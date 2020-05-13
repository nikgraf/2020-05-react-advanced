import React from "react";
import { Resource } from "../utils/wrapPromise";

const WaitForMe: React.FC<{ resource: Resource<string> }> = (props) => {
  const result = props.resource.read();
  return <div>{result}</div>;
};

export default WaitForMe;
