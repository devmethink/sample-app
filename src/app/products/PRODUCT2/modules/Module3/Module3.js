import React, { useContext } from "react";
import Module from "./../../../../components/Module";
import { AppContext } from "../../../../context/AppContext";
import Module1 from "../../../PRODUCT1/modules/Module1/Module1";
import { isNullOrWhiteSpace } from "../../../../../helpers/HelperFunctions";

export default function Module3() {
  const [state] = useContext(AppContext);

  return (
    <Module
      name={`SubModule3 - ${state.name}`}
      content={<div><h1>{state.name}</h1><p>Field name is empty: {isNullOrWhiteSpace(state.name) ? "true" : "false"}</p><Module1/></div>}
    ></Module>
  );
}
