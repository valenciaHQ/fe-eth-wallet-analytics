import { useMemo, useState } from "react";
import Button from "./components/Button";
import InputWithIcon from "./components/InputWithIcon";
import Address from "./components/Address";
import Rates from "./components/Rates";
import { ToastContainer } from "react-toastify";
import { useFetch } from "./hooks/useFetch";
import Loading from "./components/Loading";
import { AddressType } from "./model";

function App() {
  const { data: favouriteAddresses, error } = useFetch<AddressType[]>(
    `${process.env.REACT_APP_API_BASE_URL}/wallets`
  );

  const favourites = useMemo(
    () =>
      favouriteAddresses?.map((item) => ({
        address: item.address,
        isFav: true,
      })),
    [favouriteAddresses]
  );

  const [addresses, setAddresses] = useState<
    { address: string; isFav: boolean }[]
  >([]);
  const [showAddressInput, setShowAddressInput] = useState(false);

  const handleAddAddress = (value: string) => {
    if (!value) {
      setShowAddressInput(false);
      return;
    }
    const newAddress: AddressType = { address: value, isFav: false };
    const newAddreses = addresses ? [...addresses, newAddress] : [newAddress];
    setAddresses(newAddreses);
    setShowAddressInput(false);
  };

  if (!addresses && error) {
    return (
      <main>
        <section className="flex p-4 md:p-10 md:container md:mx-auto">
          <div className="flex flex-col w-full">
            <p>An error ocurred, try again later</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="flex p-4 md:p-10 md:container md:mx-auto">
        <div className="flex flex-col w-full">
          <Rates />
          {showAddressInput ? (
            <InputWithIcon handleIconPress={handleAddAddress} />
          ) : (
            <Button
              label="Add new Address"
              onClickEvent={() => setShowAddressInput(true)}
            />
          )}
          <table className="table-auto mt-10">
            <tbody>
              {!favourites ? (
                <Loading />
              ) : (
                [...favourites, ...addresses].map((item) => (
                  <Address
                    key={item.address}
                    address={item.address}
                    isFav={item.isFav}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
      <ToastContainer />
    </main>
  );
}

export default App;
