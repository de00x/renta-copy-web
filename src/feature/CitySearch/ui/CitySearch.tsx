import React, { FC, useEffect, useState } from 'react';
import { Input } from 'shared/ui/Input';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button';
import { Form } from 'antd';
import SearchIcon from 'assets/icons/search.svg?react';
import cls from './CitySearch.module.scss';

interface ICitySearch {
    onToggleTab: (params: string) => void
}

const CitySearch: FC<ICitySearch> = ({ onToggleTab }) => {
    const onFinish = (values: number) => {
        onToggleTab('#');
    };
    return (
        <Form
            className={cls.form}
            name="CitySearch"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <h2 className={cls.header}>Выберите регион или город</h2>
            <Input suffix={<SearchIcon />} className={cls.searchInput} placeholder="" />
            <div className={cls.citiesWrapper}>
                <Button className={cls.citieBtn} sizeButton={SizeButton.BIG} type="primary" htmlType="button">
                    Москва
                </Button>
                <Button className={cls.citieBtn} sizeButton={SizeButton.BIG} type="primary" htmlType="button">
                    Московская область
                </Button>
                <Button className={cls.citieBtn} sizeButton={SizeButton.BIG} type="primary" htmlType="button">
                    Санкт - Петербург
                </Button>
                <Button className={cls.citieBtn} sizeButton={SizeButton.BIG} type="primary" htmlType="button">
                    Екатеринбург
                </Button>
            </div>
            <Button className={cls.cityChooseBtn} sizeButton={SizeButton.BIG} type="primary" htmlType="submit">
                Выбрать
            </Button>
        </Form>
    );
};

export default CitySearch;
