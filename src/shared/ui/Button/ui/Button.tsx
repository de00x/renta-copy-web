import React, { FC, ReactNode } from 'react';
import { classNames } from 'shared';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    BASIC = 'basic',
    LINK = 'link',
    DETAIL = 'detail',
}

export enum SizeButton {
    BIG = 'big',
    MIDDLE = 'middle',
    SMALL = 'small'
}

interface ButtonProps {
    className?: string;
    theme?: ThemeButton;
    sizeButton?: SizeButton;
    disabled?: boolean;
    htmlType?: string
    type?: string
    children?: ReactNode
    onClick?: (e?: any) => void
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.BASIC,
        sizeButton,
        onClick,
        type,
        disabled,
        htmlType,
    } = props;

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={classNames(
                cls.Button,
                { [cls.disabled]: disabled },
                [className, cls[theme], cls[sizeButton]],
            )}
        >
            {children}
        </button>
    );
};
