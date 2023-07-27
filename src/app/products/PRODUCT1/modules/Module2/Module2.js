import React, { useContext, useEffect } from "react";
import Module from "./../../../../components/Module";
import { AppContext } from "../../../../context/AppContext";
import { formatNumber } from "../../../../../helpers/HelperFunctions";
import Api from "../../../../../data/api";

export default function Module2() {
  const [state,dispatch] = useContext(AppContext);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getData() {
    Api.getData(`https://restcountries.com/v3.1/currency/cop    `)
      .then((data) => {
        dispatch({
          type: "REGION",
          payload: data[0].region,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <Module
      name={"Module One - Module2"}
      content={<h2>Total: {formatNumber(state.number)}<br/>{state.region}</h2>}
    ></Module>
  );
}
