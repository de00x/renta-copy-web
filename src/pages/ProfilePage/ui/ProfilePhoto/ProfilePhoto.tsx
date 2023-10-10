import {classNames} from "shared";
import {FC, useState} from "react";
import {Text} from 'shared/ui/Text';
import cls from './ProfilePhoto.module.scss'
import RatingStarSVG from 'assets/icons/rating.svg?react';
import UserLogoSVG from 'assets/icons/user-account.svg?react';
import UploadFileSVG from 'assets/icons/uploadFile.svg?react';

export const ProfilePhoto: FC = () => {
    const [isAddBlurPhotoContainer, setIsAddBlurPhotoContainer] = useState(false)

    const PROFILE_PHOTO_CONTAINER_STYLES = classNames(
        cls['profile-photo-container'],
        {[cls['profile-photo-add-blur']]: isAddBlurPhotoContainer}
    )

    const UPLOAD_NEW_PROFILE_PHOTO_STYLES = classNames(
        cls['upload-new-profile-photo-mask'],
        {[cls['upload-new-profile-photo-mask-visible']]: isAddBlurPhotoContainer}
    )

    const onAddBlurPhotoContainer = () => {
        setIsAddBlurPhotoContainer(true)
    }

    const onOffBlurPhotoContainer = () => {
        setIsAddBlurPhotoContainer(false)
    }

    return (
        <div className={cls['profile-photo-wrapper']}>
            <div
                className={PROFILE_PHOTO_CONTAINER_STYLES}
                onMouseEnter={() => onAddBlurPhotoContainer()}
                onMouseLeave={() => onOffBlurPhotoContainer()}
            >
                <div className={cls['profile-photo-placeholder']}>
                    <UserLogoSVG/>
                </div>
                <div className={cls['rating-container']}>
                    <RatingStarSVG/>
                    <Text>4.3</Text>
                </div>
            </div>
            <div className={UPLOAD_NEW_PROFILE_PHOTO_STYLES}>
                <div
                    className={cls['upload-new-profile-photo']}
                    onMouseEnter={() => onAddBlurPhotoContainer()}
                >
                    <UploadFileSVG/>
                    <Text>Загрузить фото</Text>
                </div>
            </div>
        </div>
    )
}