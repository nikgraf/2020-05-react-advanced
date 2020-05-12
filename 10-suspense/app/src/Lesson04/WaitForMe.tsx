import React from "react";

/**
 * Goal: We want to resource to be part of React's flow (state) so we can change the parameters
 *
 * NOTE: This might change!
 * 1. We create a new component accepting a resource as prop and read from it.
 * 2. We store the resource in the state of the parent Component and the resource is passed down
 * 3. We create a button that creates a new Resource
 * 4. While creating a new resource we could pass in a new parameter e.g. a new endpoint to fetch from (NOT IMPLEMENTED in this example)
 */

const WaitForMe: React.FC<{ resource: any }> = (props) => {
  const result = props.resource.read();
  return <div>{result}</div>;
};

export default WaitForMe;
