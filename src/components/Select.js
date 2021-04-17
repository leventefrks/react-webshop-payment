import PropTypes from 'prop-types';

const leadingZero = value => value.toString().padStart(2, '0');

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
            isLeading ? leadingZero(defaultValue + key) : defaultValue + key
          }
        >
          {isLeading ? leadingZero(defaultValue + key) : defaultValue + key}
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
