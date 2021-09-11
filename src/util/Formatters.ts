import { mask } from 'react-native-mask-text';
import { AddressType } from '~/api/useAddresses';
import { PHONE_MASK, POSTAL_CODE_MASK } from './validations';

export const formatAddress = (address?: AddressType) => {
  if (!address) {
    return '';
  }

  return [
    address.line1,
    address.line2,
    address.postalCode,
    formatPostalCode(address.postalCode),
    address.city,
    address.country,
  ]
    .filter(v => v)
    .join(', ');
};

export const formatPhone = (phone: string | number) => {
  if (!phone) {
    return '';
  }

  return mask(phone, PHONE_MASK);
};

export const formatPostalCode = (postalCode: string | number) => {
  if (!postalCode) {
    return '';
  }

  return mask(postalCode, POSTAL_CODE_MASK);
};
