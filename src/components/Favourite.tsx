import { AddressType } from "../model";
import Svg from "./svg";
import { toast } from "react-toastify";

const Favourite = ({ address, isFav }: AddressType) => {
  const saveToFavourites = () => {
    fetch(`http://localhost:3001/wallets/create/${address}`, {
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
