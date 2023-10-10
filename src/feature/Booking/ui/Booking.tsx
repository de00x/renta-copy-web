import React from 'react';
import {useSelector} from 'react-redux';
import {Button, ThemeButton} from 'shared/ui/Button';
import {Carousel} from 'shared/ui/Carousel';
import {Text} from 'shared/ui/Text';
import {Themes} from 'shared/interfaces/base';
import {getTextByNumberOfRooms, getTextByStatus} from 'shared';
import {useNavigate} from 'react-router-dom';
import cls from './Booking.module.scss';

const Booking = () => {

    const navigate = useNavigate();
    const role = localStorage.getItem('status') || 'rented';

    const toBookOwner = (id: number) => {
    };

    const toBookRented = (id: number) => {
    };

    return (
        <div className={cls.Flats}>
            <div className={cls.nav}/>
            <div className={cls.flats}>
                {[].map((item: any) => (
                    <div key={item.id} className={cls.flat}>
                        <div className={cls.left}>
                            <div className={cls.carousel}>
                                <Carousel isAdmin rating={item.score}>
                                    {item.photos.map((i: any) => (
                                        <img key={i.id} src={i.bytes} alt="placeholder" className={cls.carousel}/>
                                    ))}
                                </Carousel>
                            </div>
                            <div className={cls.description}>
                                <div className={cls.top}>
                                    <div className={cls.information}>
                                        <div className={cls.headerInformation}>
                                            <Text
                                                theme={Themes.PRIMARY}
                                                className={cls.rooms}
                                            >
                                                {getTextByNumberOfRooms(item.numberOfRooms)}
                                            </Text>
                                        </div>
                                        <Text
                                            theme={Themes.PRIMARY}
                                            className={cls.address}
                                        >
                                            г.
                                            {item.address.city}
                                            {' '}
                                            ул.
                                            {item.address.street}
                                            {' '}
                                            д.
                                            {item.address.numFlat}
                                        </Text>
                                    </div>
                                    <Text theme={Themes.PRIMARY} className={cls.price}>
                                        {item.price}
                                        {' '}
                                        руб.
                                    </Text>
                                </div>
                                <div className={cls.middle}>
                                    <div className={cls.status}>
                                        <Text theme={Themes.PRIMARY} className={cls.text}>
                                            Статус:
                                            {' '}
                                            {getTextByStatus(item.status)}
                                        </Text>
                                    </div>
                                    <div className={cls.time}>
                                        <div className={cls.boxTime}>
                                            <Text theme={Themes.PRIMARY} className={cls.timeText}>{item.start}</Text>
                                        </div>
                                        <div>
                                            <Text theme={Themes.PRIMARY} className={cls.timeMiddle}>-</Text>
                                        </div>
                                        <div className={cls.boxTime}>
                                            <Text theme={Themes.PRIMARY} className={cls.timeText}>{item.end}</Text>
                                        </div>
                                    </div>
                                </div>
                                <div className={cls.bottom}>
                                    {role === 'rented'
                                        ? (
                                            <>
                                                <Button
                                                    theme={ThemeButton.CLEAR}
                                                    className={cls.button}
                                                    onClick={() => toBookRented(item.id)}
                                                >
                                                    Условия брони
                                                </Button>
                                                <Button
                                                    theme={ThemeButton.BASIC}
                                                    className={cls.button}
                                                >
                                                    Отменить бронь
                                                </Button>
                                            </>
                                        )
                                        : (
                                            <>
                                                <Button
                                                    theme={ThemeButton.CLEAR}
                                                    className={cls.button}
                                                    onClick={() => toBookOwner(item.id)}
                                                >
                                                    Условия брони
                                                </Button>
                                                <Button
                                                    theme={ThemeButton.BASIC}
                                                    className={cls.button}
                                                >
                                                    Подтвердить
                                                </Button>
                                            </>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Booking;
