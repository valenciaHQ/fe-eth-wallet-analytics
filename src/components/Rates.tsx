import { useEffect, useState } from "react";
import { RatesModel } from "../model";
import Svg from "./svg";

const RatesBox = () => {
  const [ratesData, setRatesData] = useState<RatesModel>({
    USD: 0,
    EUR: 0,
  });

  useEffect(() => {
    fetch("http://localhost:3001/rates/eth", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => setRatesData(result));
  }, []);

  const onRefresh = () => {
    fetch("http://localhost:3001/rates/eth", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => setRatesData(result));
  };

  return (
    <div className="flex align-baseline">
      <p className="mr-2 p-2 rounded-md bg-indigo-500">ETH</p>
      <p className="p-2 ">{`USD ${ratesData["USD"]}`}</p>
      <p className="p-2 ">{`EUR ${ratesData["EUR"]}`}</p>
      <div className="w-full" onClick={onRefresh}>
        <Svg icon="refresh" />
      </div>
    </div>
  );
};

export default RatesBox;
