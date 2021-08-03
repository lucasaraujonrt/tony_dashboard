import { message } from 'antd';
import { I18n } from 'react-redux-i18n';

const GENERIC_ERROR: string = 'APPLICATION.ERRORS.GENERIC';

export const success = (key: string) => message.success(I18n.t(key ? key.toUpperCase() : GENERIC_ERROR));

export const warn = (key: string) => message.warn(I18n.t(key ? key.toUpperCase() : GENERIC_ERROR));

export const error = (key: string) => message.error(I18n.t(key ? key.toUpperCase() : GENERIC_ERROR));
