import React, {useEffect, useState} from 'react';
import {Input} from 'shared/ui/Input';
import {InputNumber, Slider} from 'antd';
import {Button, SizeButton, ThemeButton} from 'shared/ui/Button';
import {Checkbox, ThemeCheckbox} from 'shared/ui/Checkbox';
import {Text} from 'shared/ui/Text';
import {Themes} from 'shared/interfaces/base';
import Arrow from 'assets/icons/arrow.svg?react';
import axios from 'axios';
import cls from './FilterForm.module.scss';

const list: { name: string, value: number }[] = [
    {name: 'Тип недвижимости1', value: 1},
    {name: 'Тип недвижимости2', value: 1},
    {name: 'Тип недвижимости3', value: 1},
    {name: 'Тип недвижимости4', value: 1},
    {name: 'Тип недвижимости5', value: 1},
];

export interface IFilterForm {
    onToggleTab: () => void
}

const FilterForm = (props: IFilterForm) => {
    const {onToggleTab} = props;
    const [disabled, setDisabled] = useState(false);
    const [widthWindow, setWidthWindow] = useState(0);

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

    return (
        <div className={cls.FilterForm}>
            {widthWindow > 426
                ? null
                : (
                    <Arrow
                        className={cls.icon}
                        onClick={onToggleTab}
                    />
                )}
            <Text theme={Themes.PRIMARY} className={cls.header1}>Фильтр</Text>
            <Input placeholder="Город" className={cls.input} value={'Пенза'}/>
            <div className={cls.box}>
                <h1 className={cls.header}>Количество комнат</h1>
                <div className={cls.count}>
                    <Button
                        theme={ThemeButton.CLEAR}
                        className={cls.button}
                    >
                        -
                    </Button>
                    <Button
                        theme={ThemeButton.CLEAR}
                        className={cls.button}
                    >
                        +
                    </Button>
                </div>
            </div>
            <div className={cls.box}>
                <h1 className={cls.header}>Этаж</h1>
                <div className={cls.count}>
                    <Button
                        theme={ThemeButton.CLEAR}
                        className={cls.button}
                    >
                        -
                    </Button>
                    <Button
                        theme={ThemeButton.CLEAR}
                        className={cls.button}
                    >
                        +
                    </Button>
                </div>
            </div>

            <div className={cls.box}>
                <h1 className={cls.header}>С/у совмещенный</h1>
                <Checkbox theme={ThemeCheckbox.LIGHT}/>
            </div>
            <div className={cls.box}>
                <h1 className={cls.header}>Наличие мебели</h1>
                <Checkbox theme={ThemeCheckbox.LIGHT}/>
            </div>
            <div className={cls.box}>
                <h1 className={cls.header}>Наличие балкона</h1>
                <Checkbox theme={ThemeCheckbox.LIGHT}/>
            </div>
            <div className={cls.box}>
                <h1 className={cls.header}>Наличие быт. техники</h1>
                <Checkbox theme={ThemeCheckbox.LIGHT}/>
            </div>
            <div className={cls.box}>
                <h1 className={cls.header}>Интернет/Кабельное ТВ</h1>
                <Checkbox theme={ThemeCheckbox.LIGHT}/>
            </div>
            <div className={cls.box}>
                <h1 className={cls.header}>Только с фото</h1>
                <Checkbox theme={ThemeCheckbox.LIGHT}/>
            </div>
            <div className={cls.box}>
                <h1 className={cls.header}>Показать только мои</h1>
                <Checkbox theme={ThemeCheckbox.LIGHT}/>
            </div>
            <div className={cls.boxRooms}>
                <h1 className={cls.header}>Цена</h1>
                <div className={cls.rooms}>
                    <InputNumber className={cls.InputNumber} placeholder="От"/>
                    <p className={cls.dash}>-</p>
                    <InputNumber className={cls.InputNumber} placeholder="До"/>
                </div>
            </div>
            <Slider
                range
                max={30000}
                defaultValue={[0, 30000]}
                disabled={disabled}
            />
            <div className={cls.bottom}>
                <Button
                    className={cls.submit}
                    sizeButton={SizeButton.MIDDLE}
                >
                    Найти
                </Button>
            </div>
        </div>
    );
};
export default FilterForm;
