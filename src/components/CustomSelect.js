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
      className={`relative form-input h-11 ${isOpen && 'dropdown:block'}`}
      role="navigation"
      aria-haspopup="true"
      onClick={() => setVisibility(!isOpen)}
    >
      {value}
      <ul
        className="absolute hidden left-0 w-full bg-white rounded-md shadow-md py-2 space-y-2"
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
