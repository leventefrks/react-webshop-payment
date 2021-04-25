import { useState } from 'react';
import { card, cvc } from 'creditcards';
import {
  CARD_PLACEHOLDER_NAME,
  CARD_PLACEHOLDER_NUMBER,
  CREDIT_CARD_TYPE_VISA,
} from '../constants';
import Card from './Card';
import Form from './Form';

const FormContainer = () => {
  const [cardHolderName, setName] = useState(CARD_PLACEHOLDER_NAME);
  const [cardNumber, setCardNumber] = useState('');
  const [cardPlaceholder, setPlaceholder] = useState(CARD_PLACEHOLDER_NUMBER);
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [cvvMask, setCvvMask] = useState('');
  const [isCardFlipped, setCardFlipped] = useState(false);
  const [cardType, setCardType] = useState(CREDIT_CARD_TYPE_VISA);
  const [isCvvValid, setCvvValidity] = useState(false);

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
    const totalChunks = chunks.reduce(
      (acc, item) => acc.concat(`${item} `),
      ''
    );
    return totalChunks.slice(0, totalChunks.length - 1);
  };

  const onChangeExpirationYear = value => setExpirationYear(value);

  const onChangeExpirationMonth = value => setExpirationMonth(value);

  const onSubmit = e => e.preventDefault();

  const onChangeCvv = str => {
    setCvvValidity(cvc.isValid(str));
    setCvv(str);
    const cvv = String(str);

    setCvvMask(
      cvv.length === 3 ? `**${cvv.slice(-1)}` : cvv.replace(/[0-9]/g, '*')
    );
  };

  return (
    <div className="w-full flex flex-col items-center rounded-xl bg-white shadow-xl">
      <Card
        cardType={cardType}
        isCardFlipped={isCardFlipped}
        cardHolderName={cardHolderName}
        cardPlaceholder={cardPlaceholder}
        expirationMonth={expirationMonth}
        expirationYear={expirationYear}
        cvv={cvvMask}
        isCvvValid={isCvvValid}
      />
      <Form
        cardNumber={cardNumber}
        onChangeCardNumber={onChangeCardNumber}
        onChangeCvv={e => onChangeCvv(e.target.value)}
        onFocusCvv={() => setCardFlipped(!isCardFlipped)}
        onChangeName={e => setName(e.target.value)}
        onChangeExpirationMonth={onChangeExpirationMonth}
        onChangeExpirationYear={onChangeExpirationYear}
        expirationYear={expirationYear}
        expirationMonth={expirationMonth}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default FormContainer;
