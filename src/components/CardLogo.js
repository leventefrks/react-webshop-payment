import PropTypes from 'prop-types';
import { CREDIT_CARD_TYPES, CREDIT_CARD_TYPE_VISA } from './../constants';

const CardLogo = ({ type }) => {
  const getCardType = CREDIT_CARD_TYPES.get(type || CREDIT_CARD_TYPE_VISA);

  return (
    <img
      src={require(`./../assets/${getCardType}.svg`).default}
      alt={getCardType}
      className="absolute top-4 right-4 w-10 h-10"
    />
  );
};

CardLogo.propTypes = {
  type: PropTypes.string,
};

export default CardLogo;
