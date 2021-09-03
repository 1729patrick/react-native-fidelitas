import { StatusBar } from 'react-native';

type Type = 'info' | 'warn' | 'error' | 'success';

export type AlertType = {
  alertWithType: (type: Type, title: string, message?: string) => void;
};

export class Alert {
  static ref: AlertType;

  static setRef(ref: AlertType) {
    this.ref = ref;
  }

  static onClose() {
    StatusBar.setBarStyle('dark-content');
  }

  static success(title: string, message?: string) {
    this.ref.alertWithType('success', title, message);
    StatusBar.setBarStyle('light-content');
  }

  static error(title: string, message?: string) {
    this.ref.alertWithType('error', title, message);
    StatusBar.setBarStyle('light-content');
  }

  static info(title: string, message?: string) {
    this.ref.alertWithType('info', title, message);
    StatusBar.setBarStyle('light-content');
  }
}
