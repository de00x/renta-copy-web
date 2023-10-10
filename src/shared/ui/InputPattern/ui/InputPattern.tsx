import React, {
    ChangeEvent, FC, memo, ReactNode,
} from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import { classNames } from 'shared';
import { PatternFormat } from 'react-number-format';
import cls from './InputPattern.module.scss';

interface InputProps {
    className?: string;
    value?: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    format: string
    mask: string
}

export const InputPattern: FC<InputProps> = memo((props) => {
    const {
        value,
        className,
        onChange,
        format,
        mask,
    } = props;

    return (
        <PatternFormat
            className={cls.PatternFormat}
            value={value}
            format={format}
            allowEmptyFormatting
            mask={mask}
            onChange={(e) => onChange(e)}
        />
    );
});
