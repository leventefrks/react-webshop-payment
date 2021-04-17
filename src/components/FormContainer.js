import { useState } from 'react';
import { card } from 'creditcards';
import {
  CARD_PLACEHOLDER_NAME,
  CARD_PLACEHOLDER_NUMBER,
  CARD_PLACEHOLDER_EXPIRATION_MONTH,
  CARD_PLACEHOLDER_EXPIRATION_YEAR,
  CARD_PLACEHOLDER_CVV,
  CREDIT_CARD_TYPE_VISA,
} from '../constants';
import Card from './Card';
import Form from './Form';

const FormContainer = () => {
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
  const [cardType, setCardType] = useState(CREDIT_CARD_TYPE_VISA);

  const onChangeCardNumber = e => {
    const creditCard = card.parse(e.target.value);

    setCardNumber(() => card.format(creditCard));
    setPlaceholder(() => setCardMask(creditCard));
    setCardType(() => card.type(creditCard));
  };

  const expirationDate = `${expirationMonth}/${expirationYear}`;

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

  return (
    <div className="w-full flex flex-col items-center rounded-xl bg-white shadow-xl">
      <Card
        cardType={cardType}
        isCardFlipped={isCardFlipped}
        cardHolderName={cardHolderName}
        cardPlaceholder={cardPlaceholder}
        expirationDate={expirationDate}
        cvv={cvv}
      />
      <Form
        cardNumber={cardNumber}
        onChangeCardNumber={onChangeCardNumber}
        onChangeCvv={e => setCvv(e.target.value)}
        onFocusCvv={() => setCardFlipped(!isCardFlipped)}
        onChangeName={e => setName(e.target.value)}
        onChangeExpirationMonth={e => setExpirationMonth(e.target.value)}
        onChangeExpirationYear={e => setExpirationYear(e.target.value)}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default FormContainer;
