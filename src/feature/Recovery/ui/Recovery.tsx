import React, { FC } from 'react';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button';
import cls from './Recovery.module.scss';

interface ILogin {
    onToggleTab: (params: string) => void
}

const Recovery: FC<ILogin> = ({ onToggleTab }) => {
    const qwert = 0;
    return (
        <>
            <h1 className={cls.header}>Регистрация</h1>
            <Button className={cls.button} theme={ThemeButton.CLEAR} sizeButton={SizeButton.BIG} onClick={() => onToggleTab('5')}>Восстановить с помощью электронной почты</Button>
            <Button theme={ThemeButton.CLEAR} sizeButton={SizeButton.BIG} onClick={() => onToggleTab('6')}>Восстановить с помощью номера телефона</Button>
        </>
    );
};

export default Recovery;
