import { useReducer } from "react";
import { RatesModel } from "../model";
import Svg from "./svg";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";

const RatesBox = () => {
  const { data, error } = useFetch<RatesModel>(
    `http://localhost:3001/rates/eth`
  );

  //Force re-render to retrieve rates values
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const onRefresh = () => forceUpdate();

  if (error) {
    return (
      <div className="flex align-baseline">
        <p>Cannot retrieve rates. Try again later</p>
        <div className="w-full" onClick={onRefresh}>
          <Svg icon="refresh" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex align-baseline">
      <p className="mr-2 p-2 rounded-md bg-indigo-500">ETH</p>
      <p className="p-2 ">{`USD ${!data ? <Loading /> : data["USD"]}`}</p>
      <p className="p-2 ">{`EUR ${!data ? <Loading /> : data["EUR"]}`}</p>
      <div className="w-full" onClick={onRefresh}>
        <Svg icon="refresh" />
      </div>
    </div>
  );
};

export default RatesBox;
