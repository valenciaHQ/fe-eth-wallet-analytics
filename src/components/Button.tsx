import React from "react";

interface IButtonProps {
  label: string;
  onClickEvent: () => void;
}

const Button = ({ label, onClickEvent }: IButtonProps): JSX.Element => (
  <a
    href="#_"
    className="w-48 ml-auto mr-0 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500"
    onClick={onClickEvent}
  >
    <svg
      className="w-5 h-5 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      ></path>
    </svg>
    <span className="relative">Add Address</span>
  </a>
);

export default React.memo(Button);
