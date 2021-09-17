import { format } from 'date-fns';
import { WorkHours } from '~/contexts/Restaurant';

export function getDay() {
  return format(new Date(), 'EEEE').toLocaleLowerCase() as keyof WorkHours;
}
