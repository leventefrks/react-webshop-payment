import PropTypes from 'prop-types';
import { useState } from 'react';

const CustomSelect = ({
  name,
  onChange,
  length,
  defaultValue,
  value,
  isLeading,
}) => {
  const leadingZero = value => value.toString().padStart(2, '0');
  const [isOpen, setVisibility] = useState(false);

  return (
    <button
      className={`relative flex items-center form-input h-11 ${
        isOpen && 'dropdown:block'
      }`}
      role="navigation"
      aria-haspopup="true"
      onClick={() => setVisibility(!isOpen)}
    >
      {value}
      <svg
        className="w-5 h-5 absolute right-2 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
      <ul
        className="absolute hidden left-0 w-full bg-white rounded-md shadow-xl py-2 space-y-2"
        aria-label="submenu"
      >
        {[...Array(length).keys()].map((item, key) => (
          <li
            className="hover:bg-gray-100 py-1"
            key={key}
            onClick={onChange}
            value={
              isLeading ? leadingZero(defaultValue + key) : defaultValue + key
            }
          >
            {isLeading ? leadingZero(defaultValue + key) : defaultValue + key}
          </li>
        ))}
      </ul>
    </button>
  );
};

CustomSelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  isLeading: PropTypes.bool,
};

export default CustomSelect;
