// placeholder values
export const CARD_PLACEHOLDER_NAME = 'JOHN DOE';
export const CARD_PLACEHOLDER_EXPIRATION_MONTH = new Date().getMonth();
export const CARD_PLACEHOLDER_EXPIRATION_YEAR = new Date().getFullYear();
export const CARD_PLACEHOLDER_NUMBER = '**** **** **** ****';
export const CARD_PLACEHOLDER_CVV = 123;

// credit card types
export const CREDIT_CARD_TYPES = new Map();
CREDIT_CARD_TYPES.set('American Express', 'american-express');
CREDIT_CARD_TYPES.set('Mastercard', 'mastercard');
CREDIT_CARD_TYPES.set('Visa', 'visa');
CREDIT_CARD_TYPES.set('Maestro', 'maestro');
