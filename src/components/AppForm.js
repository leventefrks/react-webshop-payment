import { useState } from 'react';
import { card } from 'creditcards';
import {
  CREDIT_CARD_TYPES,
  CARD_PLACEHOLDER_EXPIRATION_MONTH,
  CARD_PLACEHOLDER_EXPIRATION_YEAR,
  CARD_PLACEHOLDER_NAME,
  CARD_PLACEHOLDER_NUMBER,
  CARD_PLACEHOLDER_CVV,
  CREDIT_CARD_TYPE_VISA,
} from './../constants';
import CreditCard from './CreditCard';

const AppForm = () => {
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
      <CreditCard
        getCardType={getCardType}
        isCardFlipped={isCardFlipped}
        cardHolderName={cardHolderName}
        cardPlaceholder={cardPlaceholder}
        expirationDate={expirationDate}
        cvv={cvv}
      />
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
            <label
              htmlFor="expiration-date-year"
              className="form-label uppercase"
            >
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

export default AppForm;
