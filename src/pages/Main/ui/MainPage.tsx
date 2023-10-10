import cls from './MainPage.module.scss';
import {useNavigate} from 'react-router-dom';
import MainLogo from 'assets/icons/mainLogo.svg?react';
import React, {useEffect, useState} from 'react';
import {PAGE_TITLES} from "shared/constants/pageTitles";
import {Button, SizeButton, ThemeButton} from 'shared/ui/Button';

const MainPage = () => {
    const [toggle, setToggle] = useState(false);
    const [isTogglePopup, setIsTogglePopup] = useState(false);

    useEffect(() => {
        document.title = PAGE_TITLES.MAIN
    }, [])

    const onToggle = () => {
        setToggle(!toggle);
    };
    const navigate = useNavigate();

    const nav = () => {
        navigate('/map', {state: '3'});
    };


    const setOpenMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (isTogglePopup) {
            setIsTogglePopup(false);
        }
    };

    return (
        <div className={cls.container} onClick={(e) => setOpenMenu(e)}>
            <div className={cls.center}>
                <MainLogo/>
                <h1 className={cls.name}>Flat Renta</h1>
                <h2 className={cls.subscribe}>Бесконтактная аренда жилья</h2>
                <Button className={cls.mainButton} theme={ThemeButton.BASIC} sizeButton={SizeButton.SMALL}
                        onClick={nav}>
                    Снять квартиру
                </Button>
            </div>
        </div>
    );
};

export default MainPage;
