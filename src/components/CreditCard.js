import { useState } from 'react';
import { card } from 'creditcards';

const CreditCard = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const onChangeName = e => {
    const currentName = e.target.value;
    setName(e.target.value);
  };

  const onChangeCardNumber = e => {
    const parsedNumber = card.parse(e.target.value);
    const formattedNumber = card.format(parsedNumber, ['  ']);
    setCardNumber(formattedNumber);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <div className="w-full bg-white rounded-md shadow-md">
      <div className="flex flex-col w-96 h-48 -mt-24 mx-auto px-6 py-4 rounded-md bg-blue-600 shadow-2xl space-y-6 text-white">
        <div className="text-3xl self-center">{cardNumber}</div>
        <div className="text-sm">{name}</div>
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
            onChange={onChangeName}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
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
            onChange={onChangeCardNumber}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
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
