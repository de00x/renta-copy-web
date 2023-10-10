import React, { FC } from 'react';
import {
    Checkbox as AntCheckbox,
    CheckboxProps as AntCheckboxProps,
} from 'antd';
import './Checkbox.scss';
import { classNames } from 'shared';

export enum ThemeCheckbox {
    CLEAR = 'Checkbox--clear',
    LIGHT = 'Checkbox--light'
}

interface CheckboxProps extends AntCheckboxProps {
    className?: string;
    theme?: ThemeCheckbox;
    disabled?: boolean;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
    const {
        className, children, theme = ThemeCheckbox.LIGHT, disabled = false, ...otherProps
    } = props;

    return (
        <AntCheckbox
            className={classNames('Checkbox', { disabled }, [
                className, theme,
            ])}
            disabled={disabled}
            {...otherProps}
        />
    );
};
