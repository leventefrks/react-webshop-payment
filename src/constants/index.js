// placeholder values
export const CARD_PLACEHOLDER_NAME = 'JOHN DOE';
export const CARD_PLACEHOLDER_EXPIRATION_MONTH = 'MM';
export const CARD_PLACEHOLDER_EXPIRATION_YEAR = 'YYYY';

export const CARD_PLACEHOLDER_NUMBER = '**** **** **** ****';
export const CARD_PLACEHOLDER_CVV = 123;

export const CARD_MIN_EXPIRATION_YEAR = new Date().getFullYear();
export const CARD_MIN_EXPIRATION_MONTH = 1;

// single credit card types
export const CREDIT_CARD_TYPE_AMERICAN_EXPRESS = 'American Express';
export const CREDIT_CARD_TYPE_VISA = 'Visa';
export const CREDIT_CARD_TYPE_MASTERCARD = 'Mastercard';
export const CREDIT_CARD_TYPE_MAESTRO = 'Maestro';
export const CREDIT_CARD_TYPE_DINERS_CLUB = 'Diners Club';
export const CREDIT_CARD_TYPE_JCB = 'JCB';

// credit card types for logos
export const CREDIT_CARD_TYPES = new Map();
CREDIT_CARD_TYPES.set(CREDIT_CARD_TYPE_AMERICAN_EXPRESS, 'american-express');
CREDIT_CARD_TYPES.set(CREDIT_CARD_TYPE_VISA, 'visa');
CREDIT_CARD_TYPES.set(CREDIT_CARD_TYPE_MASTERCARD, 'mastercard');
CREDIT_CARD_TYPES.set(CREDIT_CARD_TYPE_MAESTRO, 'maestro');
CREDIT_CARD_TYPES.set(CREDIT_CARD_TYPE_DINERS_CLUB, 'diners-club');
CREDIT_CARD_TYPES.set(CREDIT_CARD_TYPE_JCB, 'jcb');

export const CREDIT_CARD_MONTHS = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];
