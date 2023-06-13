import { AddressType } from "../model";
import Svg from "./svg";
import { toast } from "react-toastify";

const Favourite = ({ address, isFav }: AddressType) => {
  const saveToFavourites = () => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/wallets/create/${address}`, {
      method: "POST",
    });
    toast.success("Address saved");
  };

  return isFav ? (
    <Svg icon="pocket" />
  ) : (
    <div onClick={saveToFavourites}>
      <Svg icon="favourite" />
    </div>
  );
};

export default Favourite;
