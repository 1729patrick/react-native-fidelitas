import { format } from 'date-fns/esm';
import { mask } from 'react-native-mask-text';
import { AddressType } from '~/api/useAddresses';
import { DATE_FORMAT } from './Constants';
import { PHONE_MASK, POSTAL_CODE_MASK } from './validations';

export const formatAddress = (address?: AddressType) => {
  if (!address) {
    return '';
  }

  return [
    address.line1,
    address.line2,
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

export const formatDate = (date?: string) => {
  if (!date) {
    return '';
  }

  return format(new Date(date), DATE_FORMAT);
};

export const formatTime = (time?: string) => {
  if (!time) {
    return '';
  }

  const [hours, minutes] = time.split(':');

  return `${hours}h:${minutes}m`;
};

export const formatHumanDate = (date?: string, time?: string) => {
  if (!date || !time) {
    return '';
  }
  const dateFormatted = new Date(date);

  const [hours, minutes, seconds] = time.split(':');
  dateFormatted.setHours(+hours, +minutes, +seconds);

  return format(dateFormatted, "dd 'de' LLL 'de' y 'às' HH'h':mm'm'");
};
