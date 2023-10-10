import React, {useContext} from 'react';
import {Form} from 'antd';
import {Input} from 'shared/ui/Input';
import SearchIcon from 'assets/icons/search.svg?react';
import {Button, SizeButton} from 'shared/ui/Button';
import {Context} from 'app/App';
import cls from './FlatsListFormForMobile.module.scss';

const cityList: string[] = ['Москва', 'Московская область', 'Санкт - Петербург', 'Екатеринбург'];

export interface ICityForm {
    onToggleTab: (params: string) => void
}

const FlatsListFormForMobile = (props: ICityForm) => {
    const [form] = Form.useForm();
    const {onToggleTab} = props;
    const [context, setContext] = useContext(Context);

    const geocode = (city: string) => {
        context?.geocode(city).then((result: any) => {
        });
    };

    const onFinish = (values: { city: string }) => {
        form.setFieldsValue({city: ''});
        geocode(values.city);
    };

    const selectCity = (city: string) => {
        form.setFieldsValue({city});
    };

    return (
        <Form
            form={form}
            className={cls.form}
            name="CitySearch"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            autoComplete="off"
        >
            <h2 className={cls.header}>Выберите регион или город</h2>
            <Form.Item
                name="city"
                rules={[{required: true, message: 'Пожалуйста, введите населенный пункт'}]}
            >
                <Input suffix={<SearchIcon/>} className={cls.searchInput} placeholder=""/>
            </Form.Item>
            <div className={cls.cityWrapper}>
                {cityList.map((city) => (
                    <Button
                        key={city}
                        className={cls.cityBtn}
                        sizeButton={SizeButton.BIG}
                        type="primary"
                        htmlType="button"
                        onClick={() => selectCity(city)}
                    >
                        {city}
                    </Button>
                ))}
            </div>
            <Button
                className={cls.cityChooseBtn}
                sizeButton={SizeButton.MIDDLE}
                type="primary"
                htmlType="submit"
            >
                Выбрать
            </Button>
        </Form>
    );
};

export default FlatsListFormForMobile;
