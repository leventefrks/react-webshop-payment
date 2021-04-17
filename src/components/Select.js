import PropTypes from 'prop-types';

const Select = ({ name, onChange, length, defaultValue }) => {
  return (
    <select
      name={name}
      id={name}
      className="form-input"
      autoComplete="off"
      onChange={onChange}
    >
      <option value="" defaultValue="Year" disabled hidden />
      {[...Array(length).keys()].map((item, key) => (
        <option key={key} value={defaultValue + key}>
          {defaultValue + key}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  onChange: PropTypes.func,
};

export default Select;
