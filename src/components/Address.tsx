import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import Svg from "./svg";
import Loading from "./Loading";
import { Transaction } from "../model";

const Address = ({ address }: { address: string }) => {
  const [isOld, setIsOld] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/account/transactions/${address}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        try {
          //As first transaction object response is first address transaction
          const transactions: Transaction[] = result;
          if (transactions) {
            const lastTrx = transactions[0];
            // According to the documentation for Date, dates are defined in milliseconds instead of seconds, so you'll need to multiply your timestamp by 1000.
            const lastTrxDate = new Date(Number(lastTrx.timeStamp * 1000));
            const oneYearAgoDate = new Date(
              new Date().setFullYear(new Date().getFullYear() - 1)
            );

            //if oneYearAgoDate is bigger than wallet timestamp, the wallet is older than 1 year old.
            const isOld = oneYearAgoDate.getTime() > lastTrxDate.getTime();
            setIsOld(isOld);
            setLoading(false);
          }
        } catch (error) {
          console.error(error);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [address]);

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
            {loading ? <Loading /> : isOld ? <Svg icon="info" /> : null}
          </div>
        </td>
        <td onClick={handleCopyToClipboard}>
          <Svg icon="copy" />
        </td>
      </tr>
      <Tooltip id="old-tooltip" data-tooltip-delay-hide={1000} />
      <Tooltip id="copy-tooltip" data-tooltip-delay-hide={1000} />
    </>
  );
};

export default React.memo(Address);
