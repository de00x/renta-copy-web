import React from 'react';
import { Text } from 'shared/ui/Text';
import { Themes } from 'shared/interfaces/base';
import { classNames, getTextByNumberOfRooms } from 'shared';
import cls from './FlatInfo.module.scss';

interface FlatInfoProps {
    name: string;
    city: string;
    street: string;
    house: string
    className?: string
}

export const FlatInfo = (props: FlatInfoProps) => {
    const {
        street, city, house, className, name,
    } = props;
    return (
        <div className={classNames(cls.headerInformation, {}, [className])}>
            <Text
                theme={Themes.PRIMARY}
                className={cls.rooms}
            >
                {name}
            </Text>
            <Text
                theme={Themes.PRIMARY}
                className={cls.address}
            >
                г.
                {city}
                {' '}
                ул.
                {street}
                {' '}
                д.
                {house}
            </Text>
        </div>
    );
};
