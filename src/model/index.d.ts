export interface Transaction {
  timeStamp: number;
}

export interface SVGProps {
  icon: "copy" | "info" | "refresh" | "favourite" | "pocket";
}

export interface RatesModel {
  USD: number;
  EUR: number;
}

export interface AddressType {
  address: string;
  isFav: boolean;
}
