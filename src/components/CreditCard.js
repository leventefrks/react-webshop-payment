import { useState } from 'react';
import { card } from 'creditcards';
import { SiContactlesspayment } from 'react-icons/si';
import {
  CREDIT_CARD_TYPES,
  CARD_PLACEHOLDER_EXPIRATION_MONTH,
  CARD_PLACEHOLDER_EXPIRATION_YEAR,
  CARD_PLACEHOLDER_NAME,
  CARD_PLACEHOLDER_NUMBER,
  CARD_PLACEHOLDER_CVV,
  CREDIT_CARD_TYPE_VISA,
} from './../constants';
import mastercard from './../assets/mastercard.svg';

const CreditCard = () => {
  const [cardHolderName, setName] = useState(CARD_PLACEHOLDER_NAME);
  const [cardNumber, setCardNumber] = useState('');
  const [cardPlaceholder, setPlaceholder] = useState(CARD_PLACEHOLDER_NUMBER);
  const [expirationMonth, setExpirationMonth] = useState(
    CARD_PLACEHOLDER_EXPIRATION_MONTH
  );
  const [expirationYear, setExpirationYear] = useState(
    CARD_PLACEHOLDER_EXPIRATION_YEAR
  );
  const [cvv, setCvv] = useState(CARD_PLACEHOLDER_CVV);
  const [isCardFlipped, setCardFlipped] = useState(false);
  const [cardType, setCardType] = useState('');

  const onChangeCardNumber = e => {
    const creditCard = card.parse(e.target.value);
    setCardNumber(() => card.format(creditCard));
    setPlaceholder(() => setCardMask(creditCard));
    setCardType(() => card.type(creditCard));
  };

  const setCardMask = creditCard => {
    const mask = '****************';
    const currentMask = [...mask]
      .map((maskItem, index) =>
        !creditCard[index] ? (maskItem = '*') : (maskItem = creditCard[index])
      )
      .join('');
    return createChunks(currentMask);
  };

  const createChunks = str => {
    const chunks = str.match(/.{1,4}/g);
    const totalChunks = chunks.reduce((acc, item) => {
      return acc.concat(`${item} `);
    }, '');
    return totalChunks.slice(0, totalChunks.length - 1);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  const getCardType =
    CREDIT_CARD_TYPES.get(cardType) || CREDIT_CARD_TYPE_VISA.toLowerCase();

  const expirationDate = `${CARD_PLACEHOLDER_EXPIRATION_MONTH}/${CARD_PLACEHOLDER_EXPIRATION_YEAR}`;

  return (
    <div className="w-full rounded-xl bg-white shadow-xl">
      <div className="card-container w-96 h-56 -mt-28 mx-auto relative text-white duration-300 transform hover:scale-110">
        <div
          className={
            'card absolute w-full h-56 transition duration-700 ease-out ' +
            (isCardFlipped ? 'is-flipped' : '')
          }
        >
          <div className="absolute front w-full h-56 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-700 shadow-2xl">
            <div className="w-full h-full flex flex-col justify-between p-6">
              <img
                src={require(`./../assets/${getCardType}.svg`).default}
                alt={getCardType}
                className="absolute top-4 right-4 w-8 h-8"
              />
              <div className="flex justify-between">
                <div>
                  <span className="credit-card-label">Name</span>
                  <p className="credit-card-input">
                    {cardHolderName ? cardHolderName : CARD_PLACEHOLDER_NAME}
                  </p>
                </div>
              </div>
              <div>
                <p className="credit-card-label">Card Number</p>
                <p className="credit-card-input">{cardPlaceholder}</p>
              </div>
            </div>
          </div>
          <div className="absolute back w-full h-56 items-end flex rounded-xl shadow-md bg-gradient-to-r from-pink-500 to-indigo-700">
            <div className="absolute top-10 w-full bg-gray-700 h-8"></div>
            <div className="w-full flex justify-between mx-6 mb-6 ">
              <div className="flex-1">
                <p className="credit-card-label">Expiry</p>
                <p className="credit-card-input">{expirationDate}</p>
              </div>
              <div className="flex-1">
                <p className="credit-card-label">CVV</p>
                <p className="credit-card-input">
                  {cvv ? cvv : CARD_PLACEHOLDER_CVV}
                </p>
              </div>
            </div>
            <SiContactlesspayment className="absolute top-4 right-4 w-10 h-10" />
          </div>
        </div>
      </div>
      <form
        className="w-full bg-white p-6 space-y-3 rounded-bl-xl rounded-br-xl"
        onSubmit={onSubmit}
      >
        <div>
          <label htmlFor="name" className="form-label">
            card holder
          </label>
          <input
            type="text"
            name="name"
            id="name"
            maxLength="26"
            autoComplete="off"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="card-number" className="form-label">
            card number
          </label>
          <input
            type="text"
            name="card-number"
            id="card-number"
            autoComplete="off"
            value={cardNumber}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            onChange={onChangeCardNumber}
          />
        </div>
        <div className="flex space-x-4 items-end">
          <div className="flex-1">
            <label htmlFor="expiration-date-month" className="form-label">
              expiration date
            </label>
            <input
              type="text"
              name="expiration-date-month"
              id="expiration-date-month"
              autoComplete="off"
              className="w-full mt-1 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="expiration-date" className="form-label"></label>
            <input
              type="text"
              name="expiration-date-month"
              id="expiration-date-month"
              autoComplete="off"
              className="w-full mt-1 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="expiration-date-year" className="form-label">
              cvv
            </label>
            <input
              type="text"
              name="expiration-date-year"
              id="expiration-date-year"
              autoComplete="off"
              onChange={e => setCvv(e.target.value)}
              onFocus={() => setCardFlipped(!isCardFlipped)}
              onBlur={() => setCardFlipped(!isCardFlipped)}
              maxLength="3"
              className="w-full mt-1 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
        </div>
        <button type="submit" className="btn">
          save card details
        </button>
      </form>
    </div>
  );
};

export default CreditCard;
