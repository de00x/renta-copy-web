import {ERROR_MESSAGES} from "shared/constants/messages";

interface IEmailRule {
    type: 'email';
    message: string;
}

interface IRequiredRule {
    required: true;
    message: string;
}

type Rule = IEmailRule | IRequiredRule;

export const EMAIL_RULES: Rule[] = [{
    type: 'email',
    message: ERROR_MESSAGES.WRONG_EMAIL
},
    {
        required: true,
        message: ERROR_MESSAGES.REQUIRED_FIELD
    }];

export const REQUIRED_RULE = [
    {
        required: true,
        message: ERROR_MESSAGES.REQUIRED_FIELD,
    },
];

export const PASSWORD_RULES = [
    ...REQUIRED_RULE,
    {
        min: 8,
        message: 'Пароль должен содержать не менее 8 символов',
    },
    {
        pattern: /^(?=.*[0-9]).+$/,
        message: 'Пароль должен содержать хотя бы 1 цифру',
    },
    {
        pattern: /^(?=.*[a-zA-Z]).+$/,
        message: 'Пароль должен содержать хотя бы 1 букву',
    },
];
