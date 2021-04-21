import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Select = ({ name, onChange, length, defaultValue, value, isLeading }) => {
  const leadingZero = value => value.toString().padStart(2, '0');
  const [isOpen, setVisibility] = useState(false);

  return (
    <button
      className={`relative flex items-center h-11 form-input ${
        isOpen ? 'dropdown:block' : ''
      }`}
      role="navigation"
      aria-haspopup="true"
      onClick={() => setVisibility(() => !isOpen)}
    >
      {value}
      <FaChevronDown className="absolute w-3 h-3 right-2 fill-current" />
      <ul
        className="absolute z-20 w-full hidden transform -top-1 right-0 translate-x-0 -translate-y-full bg-white rounded-md py-1 px-2 space-y-1 border"
        aria-label="submenu"
      >
        {[...Array(length).keys()].map((item, key) => (
          <li
            className="hover:bg-indigo-100 rounded"
            key={key}
            onClick={onChange}
          >
            {isLeading ? leadingZero(defaultValue + key) : defaultValue + key}
          </li>
        ))}
      </ul>
    </button>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  isLeading: PropTypes.bool,
};

export default Select;
