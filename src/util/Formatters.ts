import { mask } from 'react-native-mask-text';
import { AddressType } from '~/api/useAddresses';

export const formatAddress = (address?: AddressType) => {
  if (!address) {
    return '';
  }

  return [
    address.line1,
    address.line2,
    address.postalCode,
    address.city,
    address.country,
  ]
    .filter(v => v)
    .join(', ');
};

export const formatPhone = (phone: string | number) => {
  return mask(phone, '+999 99999999999');
};
