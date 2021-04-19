import PropTypes from 'prop-types';
import { SiContactlesspayment } from 'react-icons/si';
import { CARD_PLACEHOLDER_CVV, CARD_PLACEHOLDER_NAME } from '../constants';
import CardLogo from './CardLogo';

const Card = ({
  cardType,
  isCardFlipped,
  cardHolderName,
  cardPlaceholder,
  expirationDate,
  cvv,
}) => {
  return (
    <div className="card-container w-80 md:w-96 h-56 -mt-28 relative text-white duration-300 transform :hover:scale-105 md:hover:scale-110">
      <div
        className={`card absolute w-full h-56 transition duration-700 ease-out
          ${isCardFlipped && 'is-flipped'} `}
      >
        <div className="absolute front w-full h-56 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-700 shadow-2xl">
          <div className="w-full h-full flex flex-col justify-between p-6">
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
                Expiry
              </label>
              <div name="expiry" id="expiry" className="credit-card-input">
                {expirationDate}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute back w-full h-56 items-end flex rounded-xl shadow-md bg-gradient-to-r from-pink-500 to-indigo-700">
          <div className="absolute top-14 w-full bg-gray-700 h-8"></div>
          <div className="w-full p-8">
            <div>
              <label className="credit-card-label uppercase">cvv</label>
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
  expirationDate: PropTypes.string,
  cvv: PropTypes.number,
};

export default Card;
