import React, { useMemo } from "react";
import { Tooltip } from "react-tooltip";
import Svg from "./svg";
import Loading from "./Loading";
import { AddressType, Transaction } from "../model";
import { useFetch } from "../hooks/useFetch";
import Favourite from "./Favourite";
import { toast } from "react-toastify";

const Address = ({ address, isFav }: AddressType) => {
  const { data: lastTrx, error: lastTrxError } = useFetch<Transaction>(
    `http://localhost:3001/account/transactions/${address}`
  );
  const { data: balance, error: balanceError } = useFetch<number>(
    `http://localhost:3001/account/balance/${address}`
  );

  if (lastTrxError) {
    toast.error(
      `An error ocurred fetching last trx information for ${address}`
    );
  }
  const isOld = useMemo(() => {
    if (lastTrx) {
      // According to the documentation for Date, dates are defined in milliseconds instead of seconds, so you'll need to multiply your timestamp by 1000.
      const lastTrxDate = new Date(Number(lastTrx.timeStamp * 1000));
      const oneYearAgoDate = new Date(
        new Date().setFullYear(new Date().getFullYear() - 1)
      );

      //if oneYearAgoDate is bigger than wallet timestamp, the wallet is older than 1 year old.
      const isOld = oneYearAgoDate.getTime() > lastTrxDate.getTime();
      return isOld;
    }
  }, [lastTrx]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(address).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };

  return (
    <>
      <tr>
        <td>
          <div className="flex">
            <p className="break-all">{address}</p>
            {isOld ? <Svg icon="info" /> : null}
          </div>
        </td>
        <td>
          {!balance && balanceError ? (
            <p className="text-red-700">X</p>
          ) : !balance ? (
            <Loading />
          ) : (
            <p> {`${balance} eth`}</p>
          )}
        </td>
        <td className="flex">
          <div onClick={handleCopyToClipboard}>
            <Svg icon="copy" />
          </div>
          <Favourite address={address} isFav={isFav} />
        </td>
      </tr>
      <Tooltip id="old-tooltip" data-tooltip-delay-hide={1000} />
      <Tooltip id="copy-tooltip" data-tooltip-delay-hide={1000} />
    </>
  );
};

export default React.memo(Address);
