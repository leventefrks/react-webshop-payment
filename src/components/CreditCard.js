import { useState } from 'react';
import { card } from 'creditcards';

const CreditCard = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [placeholder, setPlaceholder] = useState('XXXX XXXX XXXX XXXX');

  const onChangeName = e => setName(e.target.value);

  const onChangeCardNumber = e => {
    const creditCard = card.parse(e.target.value);
    setCardNumber(card.format(creditCard));
    setPlaceholder(() => setCardMask(creditCard));
  };

  const setCardMask = creditCard => {
    const mask = 'XXXXXXXXXXXXXXXX';
    const currentMask = [...mask]
      .map((maskItem, index) =>
        !creditCard[index] ? (maskItem = 'X') : (maskItem = creditCard[index])
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

  return (
    <div className="w-full bg-white rounded-xl shadow-xl">
      <div className="w-96 h-56 -mt-28 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
        <img
          className="relative object-cover w-full h-full rounded-xl"
          src="https://i.imgur.com/Zi6v09P.png"
          alt="credit-card-background"
        />
        <div className="w-full px-8 absolute top-8">
          <div className="flex justify-between">
            <div className="">
              <p className="font-light">Name</p>
              <p className="font-medium tracking-widest uppercase">{name}</p>
            </div>
            <img
              className="w-14 h-14"
              src="https://i.imgur.com/bbPHJVe.png"
              alt="credit-card-logo"
            />
          </div>
          <div className="pt-1">
            <p className="font-light">Card Number</p>
            <p className="font-medium tracking-more-wider font-mono">
              {placeholder}
            </p>
          </div>
          <div className="pt-6 pr-6">
            <div className="flex justify-between">
              <div className="">
                <p className="font-light text-xs">Valid</p>
                <p className="font-medium tracking-wider text-sm">11/15</p>
              </div>
              <div className="">
                <p className="font-light text-xs text-xs">Expiry</p>
                <p className="font-medium tracking-wider text-sm">03/25</p>
              </div>

              <div className="">
                <p className="font-light text-xs">CVV</p>
                <p className="font-bold tracking-more-wider text-sm"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form
        className="w-full bg-white p-8 space-y-6 rounded-bl-xl rounded-br-xl"
        onSubmit={onSubmit}
      >
        <div>
          <label
            htmlFor="name"
            className="text-sm text-gray-600 dark:text-gray-400 capitalize"
          >
            card holder name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            maxLength="30"
            autoComplete="off"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
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
            maxLength="16"
            autoComplete="off"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            onChange={onChangeCardNumber}
          />
        </div>
        <button
          type="submit"
          className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreditCard;
