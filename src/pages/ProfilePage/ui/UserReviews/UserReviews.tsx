import {classNames} from "shared";
import {FC, useState} from "react";
import {Text} from 'shared/ui/Text';
import cls from './UserReviews.module.scss'
import StarSVG from 'assets/icons/star.svg?react'
import ArrowSVG from 'assets/icons/arrow2.svg?react'
import {reviewsMock, numberOfStarsMock} from "pages/ProfilePage/model/constants/profile-page.constants";

export const UserReviews: FC = () => {
    const [isOpenReviewsBlock, setIsOpenReviewsBlock] = useState(false)

    const USER_REVIEWS_BTN_STYLES = classNames(
        cls['user-reviews-btn'],
        {
            [cls['user-reviews-btn-active']]: isOpenReviewsBlock
        })

    return (
        <div className={cls['user-reviews-wrapper']}>
            <div className={cls['user-reviews-btn-to-open-container']}>
                <Text>Отзывы</Text>
                <Text>4.3</Text>
                <StarSVG
                    className={cls['user-reviews-star-svg']}
                />
                <ArrowSVG
                    className={USER_REVIEWS_BTN_STYLES}
                    onClick={() => setIsOpenReviewsBlock(prevState => !prevState)}
                />
            </div>
            {
                isOpenReviewsBlock &&
                <div className={cls['user-reviews-container']}>
                    {reviewsMock.map((review, i) => (
                        <div className={cls['user-review']} key={i}>
                            <Text className={cls['user-review-name']}>
                                {review.name}
                            </Text>
                            <div className={cls['user-review-text-container']}>
                                <div>
                                    {numberOfStarsMock.map((star) => (
                                        <StarSVG
                                            key={star}
                                            className={classNames(
                                                cls['user-review-stars'],
                                                {
                                                    [cls[`user-review-stars-active-${review.stars}`]]: review.stars !== 0
                                                })}
                                        />
                                    ))}
                                </div>
                                <Text
                                    className={cls['user-review-text']}
                                >
                                    {review.text}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}