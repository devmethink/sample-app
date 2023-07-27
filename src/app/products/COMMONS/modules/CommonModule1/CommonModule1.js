import React , {useContext} from "react";
import Module from "../../../../components/Module";
import { AppContext } from "../../../../context/AppContext";

export default function CommmonModule1() {
  const [state] = useContext(AppContext);
  return (
    <Module
      name={"CommmonModule1"}
      content={`CommmonModule1 - ${state.name}`}
    ></Module>
  );
}
