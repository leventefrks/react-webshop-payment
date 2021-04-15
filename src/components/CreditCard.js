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

  const createChunks = string => {
    const chunks = string.match(/.{1,4}/g);
    return chunks.reduce((acc, val, index, arr) => {
      return acc.concat(`${val} `);
    }, '');
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <div className="w-full bg-white rounded-md shadow-xl">
      <div className="flex flex-col w-96 -mt-24 mx-auto px-6 py-4 rounded-xl bg-blue-600 shadow-2xl space-y-6 text-white relative">
        <div className="self-center p-4 font-mono text-xl">{placeholder}</div>
        <div>
          <label htmlFor="name" className="text-sm text-white capitalize">
            card holder
          </label>
          <div className="text-md uppercase font-bold tracking-wide">
            {name}
          </div>
        </div>
      </div>
      <form className="w-full bg-white p-8 space-y-6" onSubmit={onSubmit}>
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
