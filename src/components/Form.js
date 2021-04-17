import PropTypes from 'prop-types';
import Select from './Select';
import { CARD_MIN_EXPIRATION_YEAR } from './../constants';

const Form = ({
  cardNumber,
  onChangeCardNumber,
  onChangeCvv,
  onFocusCvv,
  onChangeName,
  onSubmit,
  onChangeExpirationMonth,
  onChangeExpirationYear,
}) => {
  return (
    <form
      className="w-full bg-white p-6 space-y-3 rounded-bl-xl rounded-br-xl"
      onSubmit={onSubmit}
    >
      <div>
        <label
          htmlFor="card-number"
          className="form-label capitalize select-none"
        >
          card number
        </label>
        <input
          type="text"
          name="card-number"
          id="card-number"
          autoComplete="off"
          value={cardNumber}
          className="form-input"
          onChange={onChangeCardNumber}
        />
      </div>
      <div>
        <label htmlFor="name" className="form-label capitalize select-none">
          card holder
        </label>
        <input
          type="text"
          name="name"
          id="name"
          maxLength="26"
          autoComplete="off"
          className="form-input"
          onChange={onChangeName}
        />
      </div>
      <div className="flex space-x-4 items-end">
        <div className="flex-1">
          <label
            htmlFor="expiration-date"
            className="form-label capitalize select-none"
          >
            expiration date
          </label>
          <Select
            name="expiration-month"
            defaultValue={1}
            length={12}
            onChange={onChangeExpirationMonth}
          />
        </div>
        <div className="flex-1">
          <Select
            name="expiration-year"
            defaultValue={CARD_MIN_EXPIRATION_YEAR}
            length={10}
            onChange={onChangeExpirationYear}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="cvv" className="form-label uppercase select-none">
            cvv
          </label>
          <input
            type="text"
            name="cvv"
            id="cvv"
            autoComplete="off"
            onChange={onChangeCvv}
            onFocus={onFocusCvv}
            onBlur={onFocusCvv}
            maxLength="3"
            className="form-input"
          />
        </div>
      </div>
      <button type="submit" className="btn">
        save card details
      </button>
    </form>
  );
};

Form.propTypes = {
  cardNumber: PropTypes.string,
  onChangeCardNumber: PropTypes.func,
  onChangeExpirationMonth: PropTypes.func,
  onChangeExpirationYear: PropTypes.func,
  onChangeCvv: PropTypes.func,
  onFocusCvv: PropTypes.func,
  onChangeName: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Form;
