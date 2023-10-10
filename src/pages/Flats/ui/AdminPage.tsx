import React, { useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { classNames } from 'shared';
import { Input } from 'shared/ui/Input';
import { Flats } from 'feature/Flats';
import { Booking } from 'feature/Booking';
import { OfferRent } from 'feature/OfferRent';
import { Rented } from 'feature/Rented';
import cls from './AdminPage.module.scss';

const AdminPage = () => {
    const [menuId, setMenuId] = useState(1);
    const menu = localStorage.getItem('status') || 'rented';

    const onVisibleComponent = (id: number) => {
        setMenuId(id);
    };

    const getTabRented = () => {
        switch (menuId) {
        case 1:
            return <Flats />;
        case 2:
            return <Booking />;
        case 3:
            return <OfferRent />;
        case 4:
            return <Rented />;
        default:
            return <Input placeholder="1" />;
        }
    };

    const getTabOwner = () => {
        switch (menuId) {
        case 1:
            return <Booking />;
        case 2:
            return <OfferRent />;
        case 3:
            return <Rented />;
        case 4:
            return <Rented />;
        default:
            return <Input placeholder="1" />;
        }
    };

    return (
        <div>
            <Text className={cls.title}>Объекты недвижимости</Text>
            {menu === 'rented'
                ? (
                    <>
                        <div className={cls.tabs}>
                            <div className={cls.menu}>
                                <Button
                                    theme={ThemeButton.DETAIL}
                                    className={classNames(cls.btn, { [cls.btnActive]: menuId === 1 }, [])}
                                    onClick={() => onVisibleComponent(1)}
                                >
                                    Бронь
                                </Button>
                                <Button
                                    theme={ThemeButton.DETAIL}
                                    className={classNames(cls.btn, { [cls.btnActive]: menuId === 2 }, [])}
                                    onClick={() => onVisibleComponent(2)}
                                >
                                    Заявки на аренду
                                </Button>
                            </div>
                            <div className={cls.menu}>
                                <Button
                                    theme={ThemeButton.DETAIL}
                                    className={classNames(cls.btn, { [cls.btnActive]: menuId === 3 }, [])}
                                    onClick={() => onVisibleComponent(3)}
                                >
                                    Арендованные
                                </Button>
                                <Button
                                    theme={ThemeButton.DETAIL}
                                    className={classNames(cls.btn, { [cls.btnActive]: menuId === 4 }, [])}
                                    onClick={() => onVisibleComponent(4)}
                                >
                                    История аренды
                                </Button>
                            </div>
                        </div>
                        {getTabOwner()}
                    </>
                )
                : (
                    <>
                        <div className={cls.tabs}>
                            <div className={cls.menu}>
                                <Button
                                    theme={ThemeButton.DETAIL}
                                    className={classNames(cls.btn, { [cls.btnActive]: menuId === 1 }, [])}
                                    onClick={() => onVisibleComponent(1)}
                                >
                                    Все квартиры
                                </Button>
                                <Button
                                    theme={ThemeButton.DETAIL}
                                    className={classNames(cls.btn, { [cls.btnActive]: menuId === 2 }, [])}
                                    onClick={() => onVisibleComponent(2)}
                                >
                                    Бронь
                                </Button>
                            </div>
                            <div className={cls.menu}>
                                <Button
                                    theme={ThemeButton.DETAIL}
                                    className={classNames(cls.btn, { [cls.btnActive]: menuId === 3 }, [])}
                                    onClick={() => onVisibleComponent(3)}
                                >
                                    Заявки на аренду
                                </Button>
                                <Button
                                    theme={ThemeButton.DETAIL}
                                    className={classNames(cls.btn, { [cls.btnActive]: menuId === 4 }, [])}
                                    onClick={() => onVisibleComponent(4)}
                                >
                                    Арендованные
                                </Button>
                            </div>
                        </div>
                        {getTabRented()}
                    </>
                )}
        </div>

    );
};

export default AdminPage;
