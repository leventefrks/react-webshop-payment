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
} from '../constants';
import CreditCard from './CreditCard';
import Form from './Form';

const FormContainer = () => {
  const [cardHolderName, setName] = useState(CARD_PLACEHOLDER_NAME);
  const [cardNumber, setCardNumber] = useState('');
  const [cardPlaceholder, setPlaceholder] = useState(CARD_PLACEHOLDER_NUMBER);
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [isCardFlipped, setCardFlipped] = useState(false);
  const [cardType, setCardType] = useState('');

  const onChangeCardNumber = e => {
    const creditCard = card.parse(e.target.value);

    setCardNumber(() => card.format(creditCard));
    setPlaceholder(() => setCardMask(creditCard));
    setCardType(() => card.type(creditCard));
  };

  const onChangeName = e => setName(e.target.value);

  const onChangeCvv = e => setCvv(e.target.value);

  const onFocusCvv = () => setCardFlipped(!isCardFlipped);

  const onChangeExpirationMonth = e => setExpirationMonth(e.target.value);

  const onChangeExpirationYear = e => setExpirationYear(e.target.value);

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

  const expirationDate = `${expirationMonth}/${expirationYear}`;

  return (
    <div className="w-full flex flex-col items-center rounded-xl bg-white shadow-xl">
      <CreditCard
        getCardType={getCardType}
        isCardFlipped={isCardFlipped}
        cardHolderName={cardHolderName}
        cardPlaceholder={cardPlaceholder}
        expirationDate={expirationDate}
        cvv={cvv}
      />
      <Form
        cardNumber={cardNumber}
        onChangeCardNumber={onChangeCardNumber}
        onChangeCvv={onChangeCvv}
        onFocusCvv={onFocusCvv}
        onChangeName={onChangeName}
        onChangeExpirationMonth={onChangeExpirationMonth}
        onChangeExpirationYear={onChangeExpirationYear}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default FormContainer;
