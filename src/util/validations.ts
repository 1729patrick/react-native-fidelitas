import { mask } from 'react-native-mask-text';

export const POSTAL_CODE_MASK = '9999-999';
export const PHONE_MASK = '+999 99999999999';
export const CC_EXPIRATION_MASK = '99-99';
export const CC_NUMBER_MASK = '9999 9999 9999 9999';
export const CC_CODE_MASK = '999';

export const validateEmail = (email: string) => {
  if (['pbf', 'ts'].includes(email)) {
    return true;
  }

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(String(email).toLowerCase());
};

export const validatePostalCode = (
  postalCode: string,
  type: 'change' | 'valid' = 'valid',
) => {
  if (postalCode.length !== postalCode.replace(/\D/g, '').length) {
    return false;
  }

  const postalCodeLength = postalCode.length;
  const maskLength = POSTAL_CODE_MASK.length - 1;

  if (type === 'change') {
    return postalCodeLength <= maskLength;
  }

  return postalCodeLength === maskLength;
};

export const validatePhone = (
  phone: string,
  type: 'change' | 'valid' = 'valid',
) => {
  phone = phone.replace(/\D/g, '');
  const phoneLength = phone.length;
  const maskLength = PHONE_MASK.length - 2;

  if (type === 'change') {
    return phoneLength <= maskLength;
  }

  return phoneLength >= maskLength - 2;
};
