import PropTypes from 'prop-types';
import { SiContactlesspayment } from 'react-icons/si';
import {
  CARD_PLACEHOLDER_CVV,
  CARD_PLACEHOLDER_NAME,
  CREDIT_CARD_TYPES,
  CREDIT_CARD_TYPE_VISA,
} from './../constants';

const CreditCard = ({
  cardType,
  isCardFlipped,
  cardHolderName,
  cardPlaceholder,
  expirationDate,
  cvv,
}) => {
  const getCardType = CREDIT_CARD_TYPES.get(cardType);

  return (
    <div className="card-container w-96 h-56 -mt-28 relative text-white duration-300 transform hover:scale-110">
      <div
        className={`card absolute w-full h-56 transition duration-700 ease-out
          ${isCardFlipped ? 'is-flipped' : ''} `}
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
              <p className="credit-card-label uppercase">cvv</p>
              <p className="credit-card-input">
                {cvv ? cvv : CARD_PLACEHOLDER_CVV}
              </p>
            </div>
          </div>
          <SiContactlesspayment className="absolute top-4 right-4 w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

CreditCard.propTypes = {
  isCardFlipped: PropTypes.bool,
  cardType: PropTypes.string,
  cardHolderName: PropTypes.string,
  cardPlaceholder: PropTypes.string,
  expirationDate: PropTypes.string,
  cvv: PropTypes.string,
};

export default CreditCard;
