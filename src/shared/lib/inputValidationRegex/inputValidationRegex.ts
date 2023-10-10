import {KeyboardEvent} from 'react'

export const allowAlphanumericInput = (event: KeyboardEvent<HTMLInputElement>) => {
    // Регулярное выражение, разрешающее ввод букв русского и латинского алфавита
    const regex = /^[a-zA-Zа-яА-Я]+$/;
    const {key} = event;
    if (!regex.test(key)) {
        event.preventDefault();
    }
};

export const allowOnlyDigitsInput = (event: KeyboardEvent<HTMLInputElement>) => {
    // Регулярное выражение, разрешающее только ввод цифр (0-9)
    const regex = /^[0-9]+$/;
    const {key} = event;
    if (!regex.test(key)) {
        event.preventDefault();
    }
};
