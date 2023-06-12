import { useState } from "react";
import Button from "./components/Button";
import InputWithIcon from "./components/InputWithIcon";

function App() {
  const [addresses, setAddresses] = useState<string[]>([
    "asdasdasda",
    "asdasdweqwer",
    "0xasdawasadds",
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
      <section className="flex px-10 py-10 md:container md:mx-auto">
        <div className="flex flex-col w-full">
          {showAddressInput ? (
            <InputWithIcon handleIconPress={handleAddAddress} />
          ) : (
            <Button
              label="Add new Address"
              onClickEvent={() => setShowAddressInput(true)}
            />
          )}
          <table className="table-auto mt-10">
            {addresses.map((address) => (
              <tr>
                <td>
                  <div>{address}</div>
                </td>
                <td>1 año</td>
                <td>Copy</td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </main>
  );
}

export default App;
