import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Button} from 'shared/ui/Button';
import {Text} from 'shared/ui/Text';
import {Themes} from 'shared/interfaces/base';
import {classNames} from 'shared';
import {Checkbox, ThemeCheckbox} from 'shared/ui/Checkbox';
import {useNavigate} from 'react-router-dom';
import {ID_LOCALSTORAGE_KEY, ROLE_USER_LOCALSTORAGE_KEY} from 'shared/constants/localstorage';
import {RatingUser} from 'shared/ui/RatingUser';
import {Status} from 'feature/Status';
import {SelectTypes} from 'shared/ui/SelectTypes';
import cls from './Deals.module.scss';


const accordionExample = [
    {id: 'id1', name: 'example1'},
    {id: 'id2', name: 'example2'},
    {id: 'id3', name: 'example3'}
]

const Deals = () => {
    const [idFlat, setIdFlat] = useState(null);
    const [control, setControl] = useState('');
    const navigate = useNavigate();
    const [widthWindow, setWidthWindow] = useState(0);
    console.log(widthWindow);
    console.log(widthWindow < 1251);

    const processInstanceIds = ['id1', 'id2', 'id3', 'id4', 'id5']; // Для примера пока не развернута комунда

    const fetchDealData = async () => {
        for (const processInstanceId of processInstanceIds) {
        }
    };

    useEffect(() => {
        const onResize = () => {
            setWidthWindow(window.innerWidth);
        };
        setWidthWindow(window.innerWidth);
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    useEffect(() => {
        fetchDealData();
        // dispatch(getClientFlats());
    }, []);

    useEffect(() => {
        // if (countSelectFlats === 0) {
        //     dispatch(flatsActions.setIsActiveSelect());
        // }
    }, []);

    const onCloseCityModal = useCallback(() => {
        // setIsConfirmationModal(false);
    }, []);

    const setToggelFlat = (id: string, select: boolean) => {
        // if (select === true) {
        //     dispatch(dealsActions.setDisabledFlat(id));
        //     return;
        // }
        // dispatch(dealsActions.setActiveFlat(id));
    };

    const deleteFlat = (id: string) => {
        setIdFlat(id);
        setControl('flat');
    };

    const navigateToAddFlat = () => {
        navigate('/addFlat');
    };

    const toEditFlat = (idFlat: string) => {
        navigate(`/editFlat/${idFlat}`);
    };

    const changeStatusFavorite = (idUser: string, idFlat: string, status: boolean, e: any) => {
        e.stopPropagation();
        if (!status) {
        } else {
        }
    };

    const [isOpenSelectType, setIsOpenSelectType] = useState(false);

    const onToggle = () => {
        setIsOpenSelectType((prevState) => !prevState);
    };

    const openListBookingStatus = (value: string) => {
        console.log(value);
    };

    const currentUserRoleFromLS = localStorage.getItem(ROLE_USER_LOCALSTORAGE_KEY)

    return (
        <div>
            <div className={cls.titleHeader}>
                <Text className={cls.title}>
                    {currentUserRoleFromLS === "rented" ? "Квартиры" : "Мои объявления"}
                </Text>
            </div>
            <div className={cls.Flats}>
                <div
                    className={classNames(cls.nav, {[cls['add-apartment-btn-off']]: currentUserRoleFromLS === 'rented'})}>
                    {currentUserRoleFromLS === 'owner' &&
                    <>
                        <div className={cls['add-an-apartment-spacer']}/>
                        <Button
                            className={cls['add-an-apartment-btn']}
                            onClick={navigateToAddFlat}
                        >
                            Добавить квартиру
                        </Button>
                    </>
                    }
                    <div className={cls.box}>
                        <Text className={cls.header}>Выбрать все</Text>
                        <Checkbox
                            theme={ThemeCheckbox.LIGHT}
                        />
                    </div>
                </div>
                <div className={cls.flats}>
                    {[].map((item: any) => (
                        <div key={item.id} className={cls.flat}>
                            <div className={cls.left}>
                                <div className={cls.photo}>
                                    {item.photos
                                        ? (
                                            <img
                                                key={item.id}
                                                src={item.photos}
                                                alt="placeholder"
                                                className={cls.carousel}
                                            />
                                        )
                                        : <div className={cls.carousel2}/>}
                                    <div className={cls.heart}>
                                        <RatingUser theme={Themes.SECOND} text={item.score}/>
                                        {localStorage.getItem(ID_LOCALSTORAGE_KEY) &&
                                        <Status activeStatus={item.isInClientFavorite}
                                                onClick={(e: any) => changeStatusFavorite(localStorage.getItem(ID_LOCALSTORAGE_KEY), item.id, item.isInClientFavorite, e)}/>}
                                    </div>
                                </div>
                                <div className={cls.description}>
                                    <div className={cls.top}>
                                        <div className={cls.information}>
                                            <div className={cls.headerInformation}>
                                                <Text
                                                    theme={Themes.PRIMARY}
                                                    className={cls.rooms}
                                                >
                                                    {item.name}
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
                                                {item.address.house}
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
                                            <Text theme={Themes.PRIMARY} className={cls.text}>Статус: свободная</Text>
                                        </div>
                                        <div className={cls.time}>
                                            <div className={cls.dates}>
                                                <div className={cls.boxTime}>
                                                    <Text theme={Themes.PRIMARY}
                                                          className={cls.timeText}>01.01.2023</Text>
                                                </div>
                                                <div>
                                                    <Text theme={Themes.PRIMARY} className={cls.timeMiddle}>-</Text>
                                                </div>
                                                <div className={cls.boxTime}>
                                                    <Text theme={Themes.PRIMARY}
                                                          className={cls.timeText}>01.01.2023</Text>
                                                </div>
                                            </div>
                                            <div className={cls.checkBox}>
                                                {widthWindow < 1251 && <Text>Удалить сделку</Text>}
                                                <Checkbox
                                                    theme={ThemeCheckbox.LIGHT}
                                                    onClick={() => setToggelFlat(item.id, item.select)}
                                                    checked={item.select}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cls.bottom}>
                                        {currentUserRoleFromLS === 'owner' &&
                                        <>
                                            <Button className={cls['delete-apartment-btn']}>Удалить</Button>
                                            <Button className={cls['edit-apartment-btn']}>Редактировать</Button>
                                        </>
                                        }
                                        {currentUserRoleFromLS === 'rented' &&
                                        <>
                                            <Button className={cls['delete-apartment-btn']}>Условия брони</Button>
                                            <Button className={cls['edit-apartment-btn']}>Отменить бронь</Button>
                                        </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Deals;
