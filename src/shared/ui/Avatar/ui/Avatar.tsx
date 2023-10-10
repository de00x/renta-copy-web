import React from 'react';
import Profile from 'shared/assets/profile1.svg?react';
import { RatingUser } from 'shared/ui/RatingUser';
import { Themes, SIZE } from 'shared/interfaces/base';
import { classNames } from 'shared';
import cls from './Avatar.module.scss';

interface AvatarProps {
    rating: number,
    classNameAvatar: string
    ratingBlock: string
    newStart?: string
    newText?: string
    size?: SIZE
    theme?: Themes;
    img?: string
}

export const Avatar = (props: AvatarProps) => {
    const {
        rating, classNameAvatar, ratingBlock, newStart, newText, size, theme = Themes.THIRD, img,
    } = props;

    return (
        <div className={cls.Avatar}>
            {img
                ? <img src={img} className={classNameAvatar} />
                : (
                    <div className={classNames(cls.img, {}, [classNameAvatar])}>
                        <Profile />
                    </div>
                )}
            <div className={classNames(cls.rating, {}, [ratingBlock])}>
                <RatingUser theme={theme} size={size} text={rating} newStart={newStart} newText={newText} />
            </div>
        </div>
    );
};
