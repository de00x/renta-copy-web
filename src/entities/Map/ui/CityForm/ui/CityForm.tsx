import React, {useContext, useEffect, useState} from 'react';
import {Input} from 'shared/ui/Input';
import SearchIcon from 'assets/icons/search.svg?react';
import {Button, SizeButton} from 'shared/ui/Button';
import Arrow from 'assets/icons/arrow.svg?react';
import axios from 'axios';
import cls from './CityForm.module.scss';

export interface ICityForm {
    onToggleTab: () => void
}

const CityForm = (props: ICityForm) => {
    const {onToggleTab} = props;
    const [widthWindow, setWidthWindow] = useState(0);
    const [city, setCity] = useState('');
    const [submit, setSubmit] = useState(false);

    const selectCity = (city: string) => {
        setCity(city);
    };

    useEffect(() => {
        const onResize = () => {
            setWidthWindow(window.innerWidth);
        };

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    const search = async () => {
        if (!city) {
            return setSubmit(true);
        }
        const url = `https://nominatim.openstreetmap.org/search?q=${city}&format=json`;
        try {
            const response = await axios.get(url);
            const {lat, lon} = response.data[0];
        } catch (error) {
            console.log(error);
        }
        onToggleTab();
    };

    return (
        <>
            {widthWindow > 426
                ? null
                : (
                    <Arrow
                        className={'cls.icon'}
                        onClick={onToggleTab}
                    />
                )}
            <div
                className={cls.form}
            >
                <h2 className={cls.header}>Выберите регион или город</h2>
                <div className={cls.validation}>
                    <Input suffix={<SearchIcon/>} value={city} onChange={(e) => setCity(e.target.value)}
                           className={cls.searchInput} placeholder=""/>
                    {submit && !city && <div className={cls.text}>Пожалуйста, введите населенный пункт</div>}
                </div>
                <div className={cls.cityWrapper}>
                    <div className={cls.left}>
                        <Button
                            key="Москва"
                            className={cls.cityBtn}
                            sizeButton={SizeButton.BIG}
                            onClick={() => selectCity('Москва')}
                        >
                            Москва
                        </Button>
                        <Button
                            key="Московская область"
                            className={cls.cityBtn}
                            sizeButton={SizeButton.BIG}
                            onClick={() => selectCity('Московская область')}
                        >
                            Московская область
                        </Button>
                    </div>
                    <div className={cls.right}>
                        <Button
                            key="Санкт - Петербург"
                            className={cls.cityBtn}
                            sizeButton={SizeButton.BIG}
                            onClick={() => selectCity('Санкт - Петербург')}
                        >
                            Санкт - Петербург
                        </Button>
                        <Button
                            key="Екатеринбург"
                            className={cls.cityBtn}
                            sizeButton={SizeButton.BIG}
                            onClick={() => selectCity('Екатеринбург')}
                        >
                            Екатеринбург
                        </Button>
                    </div>
                </div>
                <Button
                    className={cls.cityChooseBtn}
                    sizeButton={SizeButton.MIDDLE}
                    onClick={search}
                >
                    Выбрать
                </Button>
            </div>
        </>
    );
};

export default CityForm;
