import React, { FC } from 'react';
import Rating from 'assets/icons/rating.svg?react';
import { Text } from 'shared/ui/Text';
import { classNames } from 'shared';
import { SIZE, Themes } from 'shared/interfaces/base';
import cls from './RatingUser.module.scss';

interface RatingProps {
    theme?: Themes;
    size?: SIZE;
    text: number;
    newStart?: string;
    newText?: string
}

const RatingUser: FC<RatingProps> = (props) => {
    const {
        theme = Themes.PRIMARY, text, newStart, newText, size,
    } = props;
    return (

        <div className={classNames(
            cls.rating,
            {},
            [cls[theme]],
        )}
        >
            <Rating className={classNames(cls.start, {}, [newStart])} />
            <Text className={classNames(cls.text, {}, [cls[size]])} theme={theme}>{text}</Text>
        </div>
    );
};
export default RatingUser;
