import { useState } from 'react';
import { card } from 'creditcards';
import { SiContactlesspayment } from 'react-icons/si';

const CreditCard = () => {
  const [cardHolderName, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardPlaceholder, setPlaceholder] = useState('**** **** **** ****');
  const [expirationMonth, setExpirationMonth] = useState('02');
  const [expirationYear, setExpirationYear] = useState('22');
  const [cvv, setCvv] = useState('123');
  const [isCardFlipped, setCardFlipped] = useState(false);

  const onChangeName = e => setName(e.target.value);

  const onChangeCvv = e => setCvv(e.target.value);

  const onFocusCvv = () => setCardFlipped(() => !isCardFlipped);

  const onChangeCardNumber = e => {
    const creditCard = card.parse(e.target.value);
    setCardNumber(() => card.format(creditCard));
    setPlaceholder(() => setCardMask(creditCard));
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

  const expirationDate = `${expirationMonth}/${expirationYear}`;

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
              <div className="flex justify-between">
                <div>
                  <p className="font-light text-xs">Name</p>
                  <p className="mt-1 font-medium tracking-widest uppercase font-mono text-sm text-gray-700">
                    {cardHolderName ? cardHolderName : 'JOHN DOE'}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-light text-xs">Card Number</p>
                <p className="mt-1 font-medium tracking-widest font-mono text-md text-gray-700">
                  {cardPlaceholder}
                </p>
              </div>
              <div>
                <div className="w-full flex justify-between space-x-4">
                  <div className="flex-1">
                    <p className="font-light text-xs">Valid Thru</p>
                    <p className="font-medium tracking-wider text-sm font-mono text-gray-700"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute back w-full h-56 items-end flex rounded-xl shadow-md bg-gradient-to-r from-pink-500 to-indigo-700">
            <div className="absolute top-10 w-full bg-gray-700 h-8"></div>
            <div className="w-full flex justify-between mx-6 mb-6 ">
              <div className="flex-1">
                <p className="font-light text-xs">Expiry</p>
                <p className="font-medium tracking-wider text-sm font-mono text-gray-700">
                  {expirationDate}
                </p>
              </div>
              <div className="flex-1">
                <p className="font-light text-xs">CVV</p>
                <p className="font-bold tracking-more-wider text-sm font-mono text-gray-700">
                  {cvv ? cvv : '123'}
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
          <label
            htmlFor="name"
            className="text-sm text-gray-600 dark:text-gray-400 capitalize"
          >
            card holder
          </label>
          <input
            type="text"
            name="name"
            id="name"
            maxLength="22"
            autoComplete="off"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            onChange={onChangeName}
          />
        </div>
        <div>
          <label
            htmlFor="card-number"
            className="text-sm text-gray-600 dark:text-gray-400 capitalize"
          >
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
            <label
              htmlFor="expiration-date-month"
              className="text-sm text-gray-600 dark:text-gray-400 capitalize"
            >
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
            <label
              htmlFor="expiration-date"
              className="text-xs text-gray-600 dark:text-gray-400 capitalize"
            ></label>
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
              className="text-xs text-gray-600 dark:text-gray-400 uppercase"
            >
              cvv
            </label>
            <input
              type="text"
              name="expiration-date-year"
              id="expiration-date-year"
              autoComplete="off"
              onChange={onChangeCvv}
              onFocus={onFocusCvv}
              onBlur={onFocusCvv}
              maxLength="3"
              className="w-full mt-1 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 capitalize"
        >
          save card details
        </button>
      </form>
    </div>
  );
};

export default CreditCard;
