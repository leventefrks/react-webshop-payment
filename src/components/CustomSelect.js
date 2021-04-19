import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

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
      <FaChevronDown className="absolute w-3 h-3 right-2 fill-current" />
      <ul
        className="absolute hidden top-0 left-0 w-full bg-white rounded-md shadow-xl py-1 px-2 space-y-1 border"
        aria-label="submenu"
      >
        {[...Array(length).keys()].map((item, key) => (
          <li
            className="hover:bg-gray-100 rounded"
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
  value: PropTypes.number,
  onChange: PropTypes.func,
  isLeading: PropTypes.bool,
};

export default CustomSelect;
