import React, {ReactNode} from 'react';
import {classNames} from 'shared';
import {Themes} from 'shared/interfaces/base';
import cls from './Text.module.scss';

interface TextProps {
    className?: string;
    theme?: Themes;
    isError?: boolean;
    children: ReactNode;
    onClick?: () => void
}

const Text = (props: TextProps) => {
    const {
        className,
        theme,
        children,
        onClick,
    } = props;
    return (
        <p className={classNames(cls.text, {}, [className, cls[theme]])} onClick={onClick}>
            {children}
        </p>
    );
};
export default Text;
