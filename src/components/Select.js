import PropTypes from 'prop-types';

const leadingZero = (number, digits) =>
  Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;

const Select = ({ name, onChange, length, defaultValue, isLeading }) => {
  return (
    <select
      name={name}
      id={name}
      className="form-input"
      autoComplete="off"
      onChange={onChange}
    >
      <option hidden />
      {[...Array(length).keys()].map((item, key) => (
        <option
          key={key}
          value={
            isLeading ? leadingZero(defaultValue + key, 2) : defaultValue + key
          }
        >
          {isLeading ? leadingZero(defaultValue + key, 2) : defaultValue + key}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  onChange: PropTypes.func,
  isLeading: PropTypes.bool,
};

export default Select;
