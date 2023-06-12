import { useState } from "react";
import Button from "./components/Button";
import InputWithIcon from "./components/InputWithIcon";
import Address from "./components/Address";
import Rates from "./components/Rates";

function App() {
  const [addresses, setAddresses] = useState<string[]>([
    "0x579324A4DE639f9672bB2A11e0dE9e851C268dCe",
  ]);
  const [showAddressInput, setShowAddressInput] = useState(false);

  const handleAddAddress = (value: string) => {
    if (!value) {
      setShowAddressInput(false);
      return;
    }
    setAddresses([...addresses, value]);
    setShowAddressInput(false);
  };

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
              {addresses.map((address) => (
                <Address key={address} address={address} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default App;
