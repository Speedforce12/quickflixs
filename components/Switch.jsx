import { useState } from "react";

const Switch = ({ options, title1, title2, handleSelected }) => {
  const [selected, setSelected] = useState(options[0]);

  const handleFirstOption = () => {
    setSelected(options[0]);
    handleSelected(options[0]);
  };

  const handleSecondOption = () => {
    setSelected(options[1]);
    handleSelected(options[1]);
  };


  return (
    <div className='bg-white rounded-full shadow-md px-1 py-0.5 flex '>
      <button
        className={`inline-block rounded-full py-1 px-4 text-sm lg:text-base ${
          selected === options[0]
            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white duration-300 transition ease-in"
            : "text-gray-500 hover:text-gray-700 duration-300 transition ease-in"
        }`}
        onClick={handleFirstOption}>
        {title1}
      </button>
      <button
        className={`inline-block rounded-full py-1 px-4 text-sm lg:text-base ${
          selected === options[1]
            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white duration-300 transition ease-in"
            : "text-gray-500 hover:text-gray-700 duration-300 transition ease-in"
        }`}
        onClick={handleSecondOption}>
        {title2}
      </button>
    </div>
  );
};

export default Switch;
