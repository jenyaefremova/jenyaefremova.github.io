import React, { useState } from 'react';

interface DropdownProps {
    options: string[];
    className?: string;
    onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, className, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const dropDownClasses = ['w-60 flex flex-col items-start', className];

  return (
    <div className={dropDownClasses.join(' ')}>
      <button className="border px-4 py-2 w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || 'Sort by'}
      </button>
      {isOpen && (
        <ul className="flex flex-col w-full border shadow bg-white">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)} className='px-4 py-2 cursor-pointer'>
              <span className={option === selectedOption ? 'font-bold' : ''}>{option}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
