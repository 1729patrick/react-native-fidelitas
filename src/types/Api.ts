import { TranslationKeyType } from '~/i18n';

export type ResponseError = {
  data: {
    error: string;
    message: TranslationKeyType;
    statusCode: number;
  };
};
