import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Select = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions(selectedOptions.filter((o) => o !== option));
  };

  const handleRemoveAll = () => {
    setSelectedOptions([]);
  }

  return (
    <div className='relative'>
      <div
        className='w-full max-w-[500px] min-w-[250px] py-2 pl-3 pr-10 text-left border rounded-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        onClick={toggleDropdown}>
        {selectedOptions && selectedOptions.length === 0
          ? "Select an option"
          : selectedOptions.map((option) => (
              <span
                key={option}
                className='inline-flex items-center mb-2 px-2 py-0.5 mr-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full'>
                {option.name}
                <button
                  type='button'
                  className='flex-shrink-0 ml-1 focus:outline-none focus:text-blue-500'
                  onClick={() => handleRemoveOption(option)}>
                  <IoClose className='w-4 h-4' />
                </button>
              </span>
            ))}
        <div className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none divide-x-2'>
          <div className="">
            {selectedOptions.length > 0 && (
              <IoClose
                className='w-5 h-5 text-red-400'
                color='#eb4034'
                onClick={handleRemoveAll}
              />
            )}
          </div >
          <HiOutlineChevronDown className='w-5 h-5 text-gray-400' />
        </div>
      </div>
      {isOpen && (
        <div className='absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-md max-h-64 focus:outline-none'>
          <div className='flex flex-col'>
            {options &&
              options
                .filter((option) => option.toString().toLowerCase())
                .map((option) => (
                  <div
                    key={option.id}
                    className='px-3 py-2 hover:bg-blue-100 cursor-pointer'
                    onClick={() => handleOptionClick(option)}>
                    <span className='block text-gray-900'>{option.name}</span>
                  </div>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
