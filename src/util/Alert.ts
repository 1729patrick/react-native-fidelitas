import { StatusBar, StatusBarStyle } from 'react-native';

type Type = 'info' | 'warn' | 'error' | 'success';

export type AlertType = {
  alertWithType: (type: Type, title: string, message?: string) => void;
};

type BarType = 'dark' | 'light';

export class Alert {
  static ref: AlertType;
  static barStyle: BarType = 'dark';

  static setRef(ref: AlertType) {
    this.ref = ref;
  }

  static onClose(barStyle: BarType) {
    const statusBarStyle = (
      barStyle ? `${barStyle}-content` : 'dark-content'
    ) as StatusBarStyle;

    StatusBar.setBarStyle(statusBarStyle);
  }

  static success(title: string, message?: string, barStyle: BarType = 'dark') {
    this.ref.alertWithType('success', title, message);
    StatusBar.setBarStyle('light-content');

    this.barStyle = barStyle;
  }

  static error(title: string, message?: string, barStyle: BarType = 'dark') {
    this.ref.alertWithType('error', title, message);
    StatusBar.setBarStyle('light-content');

    this.barStyle = barStyle;
  }

  static info(title: string, message?: string, barStyle: BarType = 'dark') {
    this.ref.alertWithType('info', title, message);
    StatusBar.setBarStyle('light-content');

    this.barStyle = barStyle;
  }
}
