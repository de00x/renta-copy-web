import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Button, ThemeButton} from 'shared/ui/Button';
import {Carousel} from 'shared/ui/Carousel';
import {Text} from 'shared/ui/Text';
import {Themes} from 'shared/interfaces/base';
import {classNames, getTextByNumberOfRooms} from 'shared';
import {Checkbox, ThemeCheckbox} from 'shared/ui/Checkbox';
import {useNavigate} from 'react-router-dom';
import OfferRentModal from '../ui/OfferRentModal/OfferRentModal';
import cls from './OfferRent.module.scss';

export const OfferRent = () => {
    const [isOfferRentModal, setIsOfferRentModal] = useState(false);
    const [control, setControl] = useState('');
    const navigate = useNavigate();

    const onCloseOfferModal = useCallback(() => {
        setIsOfferRentModal(false);
    }, []);

    const rejectOffer = () => {
        setControl('rejectOffers');
        setIsOfferRentModal(true);
    };

    const addBlackList = () => {
        setControl('blackList');
        setIsOfferRentModal(true);
    };

    const setIsActiveAllFlats = () => {

    };

    const setToggelFlat = (id: number, select: boolean) => {
        if (select === true) {
            return;
        }
    };

    return (
        <div className={cls.Flats}>
            <div className={classNames(cls.nav, {[cls.navAndButtons]: true}, [])}>
                <div className={cls.buttons}>
                    <Button
                        theme={ThemeButton.BASIC}
                        className={cls.buttonСountSelect}
                        onClick={rejectOffer}
                    >
                        Отказать
                    </Button>
                    <Button
                        theme={ThemeButton.CLEAR}
                        className={cls.buttonСountSelect}
                        onClick={addBlackList}
                    >
                        Добавить в ЧС
                    </Button>
                </div>
                <div className={classNames(cls.box, {[cls.boxAbsolute]: true}, [])}>
                    <Text className={cls.header}>Выбрать все</Text>
                    <Checkbox
                        theme={ThemeCheckbox.LIGHT}
                        onClick={setIsActiveAllFlats}
                        checked={true}
                    />
                </div>
            </div>
            <div className={cls.flats}>
                {[].map((item: any) => (
                    <div key={item.id} className={cls.flat}>
                        <div className={cls.left}>
                            <div className={cls.carousel}>
                                <Carousel isAdmin rating={item.score}>
                                    {item.photos.map((i: any) => (
                                        <img src={i.bytes} alt="placeholder" className={cls.carousel}/>
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
                                    {/* <div className={cls.status}> */}
                                    {/*    <UserModalSelector theme={Themes.PRIMARY} className={cls.text}>Статус: свободная</UserModalSelector> */}
                                    {/* </div> */}
                                    <div className={cls.time}>
                                        <div className={cls.boxTime}>
                                            <Text theme={Themes.PRIMARY} className={cls.timeText}>27.03.2023</Text>
                                        </div>
                                        <div>
                                            <Text theme={Themes.PRIMARY} className={cls.timeMiddle}>-</Text>
                                        </div>
                                        <div className={cls.boxTime}>
                                            <Text theme={Themes.PRIMARY} className={cls.timeText}>27.03.2023</Text>
                                        </div>
                                    </div>
                                        <div className={cls.checkBox}>
                                            <Checkbox
                                                theme={ThemeCheckbox.LIGHT}
                                                onClick={() => setToggelFlat(item.id, item.select)}
                                                checked={item.select}
                                            />
                                        </div>
                                </div>
                                <div className={cls.bottom}>
                                    <Button
                                        theme={ThemeButton.CLEAR}
                                        className={cls.button}
                                    >
                                        Подробнее
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isOfferRentModal && (
                <OfferRentModal control={control} isOpen={isOfferRentModal} onClose={onCloseOfferModal}/>
            )}
        </div>
    );
};
