import React, { ReactNode } from 'react';
import { Text } from 'shared/ui/Text';
import { Themes } from 'shared/interfaces/base';
import cls from './TextTime.module.scss';

interface TextTimeProps {
    children: ReactNode;
}

const TextTime = (props: TextTimeProps) => {
    const { children } = props;

    return (
        <div className={cls.block}>
            <Text theme={Themes.PRIMARY}>{children}</Text>
        </div>
    );
};

export default TextTime;
