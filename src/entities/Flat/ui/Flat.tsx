import React from 'react';
import {Carousel} from 'shared/ui/Carousel';
import {Text} from 'shared/ui/Text';
import {Themes} from 'shared/interfaces/base';
import {classNames} from 'shared';
import {RatingUser} from 'shared/ui/RatingUser';
import {ID_LOCALSTORAGE_KEY} from 'shared/constants/localstorage';
import {Status} from 'feature/Status';
import {Loader} from 'shared/ui/Loader';
import Profile from 'shared/assets/profile1.svg?react';
import Logo from 'assets/icons/logo.svg?react';
import {useNavigate} from 'react-router-dom';
import {Button, ThemeButton} from '../../../shared/ui/Button';
import cls from './Flat.module.scss';

interface IFlat {
    idFlat: string
    price: number
    city: string
    house: string
    street: string
    name?: string
    onClick?: (id: string) => void
    isAdmin?: boolean
    status: boolean
    changeStatusFavorite: (idUser: string, idFlat: string, status: boolean, e: React.MouseEvent<HTMLButtonElement>) => void
    idUser?: string
    score: number
    photo: string
    isLoadingPhotos: boolean
    isInUserFavorite: boolean
}

export const Flat = (props: IFlat) => {
    const {
        idFlat, price, city,
        house,
        street,
        name,
        onClick,
        isAdmin,
        status,
        changeStatusFavorite,
        idUser,
        score,
        photo,
        isLoadingPhotos,
        isInUserFavorite,
    } = props;

    const navigate = useNavigate();

    const openFlatPage = (flatId: string, e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onClick(flatId);
    };

    const goToBooking = (flatId: string, e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        navigate(`/cart/${idFlat}`, {state: 'booking'});
    };

    const goToRented = (flatId: string, e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        navigate(`/cart/${idFlat}`, {state: 'rented'});
    };

    return (
        <div className={cls.Flat} onClick={(e) => openFlatPage(idFlat, e)}>
            <div>
                {isLoadingPhotos
                    ? <div className={cls.loader}><Loader/></div>
                    : (
                        <div className={cls.photo}>
                            {photo
                                ? <img key={idFlat} src={photo} alt="carousel" className={cls.carousel}/>
                                : (
                                    <div className={cls.carouselSecondary}>
                                        <Logo
                                            className={cls.logo}
                                        />
                                    </div>
                                )}
                            <div className={cls.heart}>
                                <RatingUser theme={Themes.SECOND} text={score}/>
                                {localStorage.getItem(ID_LOCALSTORAGE_KEY)
                                && (
                                    <Status
                                        activeStatus={isInUserFavorite}
                                        onClick={
                                            (e: React.MouseEvent<HTMLButtonElement>) => changeStatusFavorite(
                                                localStorage.getItem(ID_LOCALSTORAGE_KEY),
                                                idFlat,
                                                isInUserFavorite,
                                                e,
                                            )
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    )}
            </div>
            <div className={cls.description}>
                <Text theme={Themes.PRIMARY} className={cls.header}>
                    {name}
                </Text>
                <Text theme={Themes.PRIMARY} className={cls.text}>
                    г.
                    {' '}
                    {city}
                    {' '}
                    ул.
                    {' '}
                    {street}
                    {' '}
                    д.
                    {' '}
                    {house}
                </Text>
                <Text theme={Themes.PRIMARY} className={cls.price}>
                    {price}
                    {' '}
                    руб
                </Text>
                <div className={cls.buttons}>
                    <Button
                        onClick={(e) => goToBooking(idFlat, e)}
                        className={cls.collapseBtn1}
                        theme={ThemeButton.CLEAR}
                    >
                        Бронь
                    </Button>
                </div>
            </div>
        </div>
    );
};
