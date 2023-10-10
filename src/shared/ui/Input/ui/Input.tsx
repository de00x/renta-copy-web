import React, {FC, memo, ReactNode} from 'react';
import {Input as AntInput, InputProps as AntInputProps} from 'antd';
import {classNames} from 'shared';
import cls from './Input.module.scss';

interface InputProps extends AntInputProps {
    className?: string;
    placeholder?: string;
    value?: string | number;
}

interface PasswordInputProps extends InputProps {
    iconRender?: (visible: boolean) => React.ReactNode;
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        defaultValue,
        value,
        className,
        placeholder,
        ...otherProps
    } = props;

    return (
        <AntInput
            defaultValue={defaultValue}
            value={value}
            placeholder={placeholder}
            className={classNames(cls.Input, {}, [
                className,
            ])}
            {...otherProps}
        />
    );
});

export const InputPass: FC<PasswordInputProps> = (props) => {
    const {
        defaultValue,
        value,
        className,
        placeholder,
        ...otherProps
    } = props;

    return (
        <AntInput.Password
            defaultValue={defaultValue}
            value={value}
            placeholder={placeholder}
            className={classNames(cls.Input, {}, [
                className,
            ])}
            {...otherProps}
        />
    );
};

export const InputSms: FC<InputProps> = memo((props) => {
    const {
        defaultValue,
        value,
        className,
        placeholder,
        type,
        ...otherProps
    } = props;

    return (
        <AntInput
            defaultValue={defaultValue}
            type="number"
            value={value}
            placeholder={placeholder}
            className={`${cls.Input} ${cls.InputSms}`}
            {...otherProps}
        />
    );
});
