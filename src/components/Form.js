import PropTypes from 'prop-types';

const Form = ({
  cardNumber,
  onChangeCardNumber,
  onChangeCvv,
  onFocusCvv,
  onChangeName,
  onSubmit,
}) => {
  return (
    <form
      className="w-full bg-white p-6 space-y-3 rounded-bl-xl rounded-br-xl"
      onSubmit={onSubmit}
    >
      <div>
        <label htmlFor="card-number" className="form-label capitalize">
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
        <label htmlFor="name" className="form-label capitalize">
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
            htmlFor="expiration-date-month"
            className="form-label capitalize"
          >
            expiration date
          </label>
          <input
            type="text"
            name="expiration-date-month"
            id="expiration-date-month"
            autoComplete="off"
            className="form-input"
          />
        </div>
        <div className="flex-1">
          <input
            type="text"
            name="expiration-date-month"
            id="expiration-date-month"
            autoComplete="off"
            className="form-input"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="cvv" className="form-label uppercase">
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
  onChangeCvv: PropTypes.func,
  onFocusCvv: PropTypes.func,
  onChangeName: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Form;
