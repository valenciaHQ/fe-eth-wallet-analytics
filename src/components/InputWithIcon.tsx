import React, { useState } from "react";

interface IInputWithIconProps {
  handleIconPress: (value: string) => void;
}

const InputWithIcon = ({ handleIconPress }: IInputWithIconProps) => {
  const [inputValue, setInputValue] = useState("");
  const onIconPress = () => {
    handleIconPress(inputValue);
  };
  return (
    <div className="flex w-96 ml-auto mr-0 justify-between py-3 px-5">
      <input
        className="w-full border-2 rounded-sm p-1 text-sm"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <svg
        className="h-auto w-6 text-indigo-500 p-1 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => onIconPress()}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        />
      </svg>
    </div>
  );
};

export default React.memo(InputWithIcon);
