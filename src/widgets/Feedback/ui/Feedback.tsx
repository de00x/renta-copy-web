import React from 'react';
import { Text } from 'shared/ui/Text';
import { Themes } from 'shared/interfaces/base';
import Rating from 'assets/icons/rating.svg?react';
import RatingWhite from 'assets/icons/ratingWhite.svg?react';
import cls from './Feedback.module.scss';

interface IFeedback {
    name: string;
    surname: string;
    review: string
    score: number
}

const handlerCountStars = (score: number) => {
    const list = [];

    for (let i = 0; i < 5; i++) {
        if (i >= score) {
            list.push(<RatingWhite key={i} className={cls.noActive} />);
        }
        if (i < score) {
            list.push(<Rating key={i} className={cls.active} />);
        }
    }
    return list;
};

export const Feedback = (props: IFeedback) => {
    const {
        name,
        surname,
        score,
        review,
    } = props;
    return (
        <div className={cls.Feedback}>
            <Text className={cls.author}>
                {name}
                {' '}
                {surname}
            </Text>
            <div className={cls.comment}>
                <div className={cls.stars}>
                    {handlerCountStars(score)}
                </div>
                <Text theme={Themes.PRIMARY} className={cls.text}>{review}</Text>
            </div>
        </div>
    );
};
