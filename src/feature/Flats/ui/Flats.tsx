import {useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Button, ThemeButton} from 'shared/ui/Button';
import {Text} from 'shared/ui/Text';
import {Themes} from 'shared/interfaces/base';
import {Checkbox, ThemeCheckbox} from 'shared/ui/Checkbox';
import Eye from 'assets/icons/eye.svg?react';
import EyeOff from 'assets/icons/eyeOff.svg?react';
import {useNavigate} from 'react-router-dom';
import {ID_LOCALSTORAGE_KEY} from 'shared/constants/localstorage';
import {RatingUser} from 'shared/ui/RatingUser';
import {Status} from 'feature/Status';
import ConfirmationModal from '../ui/ConfirmationModal/ConfirmationModal';
import cls from './Flats.module.scss';

export const Flats = () => {
    const [isConfirmationModal, setIsConfirmationModal] = useState(false);
    const [idFlat, setIdFlat] = useState(null);
    const [control, setControl] = useState('');
    const navigate = useNavigate();

    const onCloseCityModal = useCallback(() => {
        setIsConfirmationModal(false);
    }, []);

    const deleteFlats = () => {
        setControl('flats');
        setIsConfirmationModal(true);
    };

    const setIsActiveAllFlats = () => {

    };

    const setToggelFlat = (id: string, select: boolean) => {
        if (select === true) {
            return;
        }
    };

    const hideFlat = (id: string) => {
    };

    const deleteFlat = (id: string) => {
        setIdFlat(id);
        setControl('flat');
        setIsConfirmationModal(true);
    };

    const addFlat = () => {
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

    return (
        <div className={cls.Flats}>
            <div className={cls.nav}>
                <Button
                    theme={ThemeButton.BASIC}
                    className={cls.buttonСountSelect}
                    onClick={deleteFlats}
                >
                    Удалить
                </Button>
                <Button
                    theme={ThemeButton.BASIC}
                    className={cls.buttonСountSelect}
                    onClick={() => addFlat()}
                >
                    Добавить квартиру
                </Button>
                <div className={cls.box}>
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
                            {/* <div className={classNames(cls.carousel, { [cls.carousel2]: !item?.photos }, [])}> */}
                            {/*    <img key={item.id} src={item.photos} alt="placeholder" className={cls.carousel} /> */}
                            {/*    <Carousel */}
                            {/*        idFlat={item.id} */}
                            {/*        idUser={localStorage.getItem(ID_LOCALSTORAGE_KEY)} */}
                            {/*        isAdmin={localStorage.getItem(ID_LOCALSTORAGE_KEY) ? true : false} */}
                            {/*        rating={item.score} */}
                            {/*        status={item.isInClientFavorite} */}
                            {/*        onChange={changeStatusFavorite} */}
                            {/*    > */}
                            {/*        <Image key={item.id} src={item.photos} /> */}
                            {/*        /!*<img key={item.id} src={item.photos} alt="placeholder" className={cls.carousel} />*!/ */}
                            {/*    </Carousel> */}
                            {/* </div> */}
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
                                            {!item.isHidden
                                                ? <Eye className={cls.svg} onClick={() => hideFlat(item.id)}/>
                                                : <EyeOff className={cls.svg} onClick={() => hideFlat(item.id)}/>}
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
                                    <div className={cls.checkBox}>
                                        <Text theme={Themes.PRIMARY} className={cls.label}>
                                            Удалить
                                            квартиру
                                        </Text>
                                        <Checkbox
                                            theme={ThemeCheckbox.LIGHT}
                                            onClick={() => setToggelFlat(item.id, item.select)}
                                            checked={item.select}
                                        />
                                    </div>
                                </div>
                                <div className={cls.bottom}>
                                    <Button theme={ThemeButton.CLEAR} className={cls.button}
                                            onClick={() => deleteFlat(item.id)}>Удалить</Button>
                                    <Button
                                        theme={ThemeButton.BASIC}
                                        className={cls.button}
                                        onClick={() => toEditFlat(item.id)}
                                    >
                                        Редактирование
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isConfirmationModal && (
                <ConfirmationModal control={control} isOpen={isConfirmationModal} onClose={onCloseCityModal}
                                   idFlat={idFlat}/>
            )}
        </div>
    );
};
