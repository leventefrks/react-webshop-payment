import PropTypes from 'prop-types';
import { SiContactlesspayment } from 'react-icons/si';
import {
  CARD_PLACEHOLDER_CVV,
  CARD_PLACEHOLDER_NAME,
  CARD_PLACEHOLDER_EXPIRATION_YEAR,
  CARD_PLACEHOLDER_EXPIRATION_MONTH,
} from '../constants';
import CardLogo from './CardLogo';

const Card = ({
  cardType,
  isCardFlipped,
  cardHolderName,
  cardPlaceholder,
  expirationMonth,
  expirationYear,
  cvv,
  cvc,
  isCvvValid,
}) => {
  return (
    <div className="w-80 md:w-96 h-56 -mt-6 mb-5 md:mb-0 md:-mt-28 relative text-white duration-300 transform hover:scale-105 md:hover:scale-110 hover:rotate-y-3 perspective backface-visibility-hidden">
      <div
        className={`absolute w-full h-56 transform-style-preserve transition duration-700 ease-out
          ${isCardFlipped && 'rotate-y-180'} `}
      >
        <div className="absolute w-full h-56 rounded-xl backface-visibility-hidden bg-gradient-to-r from-indigo-600 to-pink-500 shadow-2xl">
          <div className="w-full h-full flex flex-col justify-between p-3 md:p-6">
            <CardLogo type={cardType} />
            <div className="flex justify-between">
              <div>
                <label htmlFor="name" className="credit-card-label">
                  Name
                </label>
                <div name="name" id="name" className="credit-card-input">
                  {cardHolderName || CARD_PLACEHOLDER_NAME}
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="card-number" className="credit-card-label">
                Card Number
              </label>
              <div
                name="card-number"
                id="card-number"
                className="credit-card-input"
              >
                {cardPlaceholder}
              </div>
            </div>
            <div className="self-end">
              <label htmlFor="expiry" className="credit-card-label">
                Valid Thru
              </label>
              <div name="expiry" id="expiry" className="credit-card-input">{`${
                expirationMonth
                  ? expirationMonth
                  : CARD_PLACEHOLDER_EXPIRATION_MONTH
              }/${
                expirationYear
                  ? String(expirationYear).slice(2, 4)
                  : CARD_PLACEHOLDER_EXPIRATION_YEAR
              }`}</div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-56 items-end flex rounded-xl shadow-md backface-visibility-hidden rotate-y-180  bg-gradient-to-r from-pink-500 to-indigo-700">
          <div className="absolute top-14 w-full bg-gray-700 h-8"></div>
          <div className="w-full p-8">
            <div>
              <label className="flex credit-card-label uppercase">
                {cvv && cvv.length === 3 && !isCvvValid ? 'invalid cvv' : 'cvv'}
              </label>
              <div className="credit-card-input">
                {cvv || CARD_PLACEHOLDER_CVV}
              </div>
            </div>
          </div>
          <SiContactlesspayment className="absolute top-2 right-2 w-12 h-12" />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  isCardFlipped: PropTypes.bool,
  cardType: PropTypes.string,
  cardHolderName: PropTypes.string,
  cardPlaceholder: PropTypes.string,
  cvv: PropTypes.string,
  cvc: PropTypes.string,
  isCvvValid: PropTypes.bool,
};

export default Card;
