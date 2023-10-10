import {memo, useState,} from 'react';
import {Text} from 'shared/ui/Text';
import {Themes} from 'shared/interfaces/base';
import {Input} from 'shared/ui/Input';
import {Button, SizeButton, ThemeButton} from 'shared/ui/Button';
import {useNavigate} from 'react-router-dom';
import cls from './AddFlatPage.module.scss';
import {Form} from "antd";
import {ITypeAccordion, IFormValue} from "pages/AddFlatPage/models/types/addFlatSchema";
import {ERROR_MESSAGES} from "shared/constants/messages";
import {SelectAccordion} from "feature/SelectAccordion";
import {CheckboxInput} from "feature/CheckboxGroup/ui/CheckboxInput";

const propertyTypeAccordion: ITypeAccordion[] = [
    {name: 'Квартира', value: 1},
    {name: 'Дом', value: 2},
    {name: 'Комната', value: 3},
    {name: 'Что-то еще', value: 4},
];

const rentalTypeAccordion: ITypeAccordion[] = [
    {name: 'Посуточно', value: 1},
    {name: 'На длительный срок', value: 2},
    {name: 'Что-то еще', value: 3},
];

const houseTypeAccordion: ITypeAccordion[] = [
    {name: 'Новостройка', value: 1},
    {name: 'Вторичка', value: 2},
    {name: 'Однушка в москва сити', value: 3},
];

const lockBindingTypeAccordion: ITypeAccordion[] = [
    {name: 'Ключ', value: 1},
    {name: 'Амбарный замок', value: 2},
    {name: 'Что-то еще', value: 3},
];

const localizedMockData = {
    propertyType: {
        placeholder: 'Тип объекта недвижимости',
        propertyTypeAccordion,
    },
    rentalType: {
        placeholder: 'Тип аренды',
        rentalTypeAccordion
    },
    houseType: {
        placeholder: 'Тип дома',
        houseTypeAccordion
    },
    lockBindingType: {
        placeholder: 'Тип замка',
        lockBindingTypeAccordion
    },
    apartmentFeatures: {
        isBathroomCombined: 'С/у совмещенный',
        hasFurniture: 'Наличие мебели',
        hasBalcony: 'Наличие балкона',
        hasAppliances: 'Наличие бытовой техники',
        hasInternetAndCable: 'Интернет/Кабельное ТВ',
    },
    placeholders: {
        adTitle: "Название объявления",
        city: "Город",
        street: "Улица",
        house: "Дом",
        apartment: "Квартира",
        quantity: "Введите количество",
        price: "Цена"
    }
}

const AddFlatPage = memo(() => {
        const navigate = useNavigate();

        const cancel = () => {
            navigate(`/profile/${localStorage.getItem('idUser')}`);
        };

        const onFinish = async (formValue: IFormValue) => {
            // Обработка запроса, когда будет готов сервер.
        };

        return (
            <Form
                name={"create-new-flat"}
                className={cls['add-flat-form']}
                onFinish={(value: IFormValue) => onFinish(value)}
            >
                <Text
                    theme={Themes.PRIMARY}
                    className={cls.header}
                >
                    Создание объявления
                </Text>
                <Form.Item
                    name="new-flat-name"
                    rules={[{required: true, message: ERROR_MESSAGES.REQUIRED_FIELD}]}
                    className={cls.validation}
                >
                    <Input
                        placeholder={"Название объявления"}
                        className={cls.input}
                    />
                </Form.Item>
                <Form.Item
                    name="city"
                    rules={[{required: true, message: ERROR_MESSAGES.REQUIRED_FIELD}]}
                    className={cls.validation}
                >
                    <Input
                        placeholder={localizedMockData.placeholders.city}
                        className={cls.input}
                        id="suggest"
                    />
                </Form.Item>
                <Form.Item
                    name="street"
                    rules={[{required: true, message: ERROR_MESSAGES.REQUIRED_FIELD}]}
                    className={cls.validation}
                >
                    <Input
                        placeholder={localizedMockData.placeholders.street}
                        className={cls.input}
                    />
                </Form.Item>
                <div
                    className={cls.address}
                >
                    <Form.Item
                        name="house"
                        rules={[{required: true, message: ERROR_MESSAGES.REQUIRED_FIELD}]}
                        className={cls.valAddress}
                    >
                        <Input
                            placeholder={localizedMockData.placeholders.house}
                            className={cls.input}
                        />
                    </Form.Item>
                    <Form.Item
                        name="flat"
                        rules={[{required: true, message: ERROR_MESSAGES.REQUIRED_FIELD}]}
                        className={cls.valAddress}
                    >
                        <Input
                            placeholder={localizedMockData.placeholders.apartment}
                            className={cls.input}
                            type="number"
                        />
                    </Form.Item>
                </div>
                <SelectAccordion
                    name={'property-type'}
                    list={localizedMockData.propertyType.propertyTypeAccordion}
                    placeholder={localizedMockData.propertyType.placeholder}
                />
                <SelectAccordion
                    name={'rental-type'}
                    list={localizedMockData.rentalType.rentalTypeAccordion}
                    placeholder={localizedMockData.rentalType.placeholder}
                />
                <SelectAccordion
                    name={'house-type'}
                    list={localizedMockData.houseType.houseTypeAccordion}
                    placeholder={localizedMockData.houseType.placeholder}
                />
                <div className={cls.additionalInformation}>
                    <div className={cls.box}>
                        <Text className={cls['lock-binding-title-medium']}>
                            Количество комнат
                        </Text>
                        <Form.Item
                            name="room-count"
                            rules={[{required: true, message: ERROR_MESSAGES.REQUIRED_FIELD}]}
                            className={cls.count}
                        >
                            <Input
                                placeholder={localizedMockData.placeholders.quantity}
                                className={cls.input}
                                type="number"
                            />
                        </Form.Item>
                    </div>
                    <div className={cls.box}>
                        <Text className={cls['lock-binding-title-medium']}>
                            Этаж
                        </Text>
                        <Form.Item
                            name="floor-number"
                            rules={[{required: true, message: ERROR_MESSAGES.REQUIRED_FIELD}]}
                            className={cls.count}
                        >
                            <Input
                                placeholder={localizedMockData.placeholders.quantity}
                                className={cls.input}
                                type="number"
                            />
                        </Form.Item>
                    </div>
                    <div className={cls.isInformation}>
                        <div className={cls.box}>
                            <Text className={cls['lock-binding-title-light']}>
                                {localizedMockData.apartmentFeatures.isBathroomCombined}
                            </Text>
                            <CheckboxInput name="is-toilet-combined"/>
                        </div>
                        <div className={cls.box}>
                            <Text className={cls['lock-binding-title-light']}>
                                {localizedMockData.apartmentFeatures.hasFurniture}
                            </Text>
                            <CheckboxInput name="has-furniture"/>
                        </div>
                        <div className={cls.box}>
                            <Text className={cls['lock-binding-title-light']}>
                                {localizedMockData.apartmentFeatures.hasBalcony}
                            </Text>
                            <CheckboxInput name="has-balcony"/>
                        </div>
                        <div className={cls.box}>
                            <Text className={cls['lock-binding-title-light']}>
                                {localizedMockData.apartmentFeatures.hasAppliances}
                            </Text>
                            <CheckboxInput name="has-appliances"/>
                        </div>
                        <div className={cls.box}>
                            <Text className={cls['lock-binding-title-light']}>
                                {localizedMockData.apartmentFeatures.hasInternetAndCable}
                            </Text>
                            <CheckboxInput name="has-internet-and-cable"/>
                        </div>
                    </div>
                    <div className={`${cls.box} ${cls['last-box']}`}>
                        <Text className={cls['lock-binding-title-bold']}>
                            Привязать замок
                        </Text>
                        <div className={cls['lock-binding-type-wrapper']}>
                            <SelectAccordion
                                name={'lock-binding-type'}
                                list={localizedMockData.lockBindingType.lockBindingTypeAccordion}
                                placeholder={localizedMockData.lockBindingType.placeholder}
                            />
                        </div>
                    </div>
                    <div className={`${cls.box} ${cls['last-box']}`}>
                        <Text
                            className={cls['lock-binding-title-bold']}
                        >
                            Цена за сутки
                        </Text>
                        <Form.Item
                            name="daily-price"
                            rules={[{required: true, message: ERROR_MESSAGES.REQUIRED_FIELD}]}
                            className={cls.price}
                        >
                            <Input
                                type="number"
                                placeholder={localizedMockData.placeholders.price}
                                className={cls['price-input']}
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className={cls.box}>
                    <Form.Item
                        name="description"
                        className={cls.textarea}
                    >
                <textarea
                    placeholder={'Описание объявления'}
                />
                    </Form.Item>
                </div>
                <div className={cls.buttons}>
                    <Button
                        theme={ThemeButton.BASIC}
                        sizeButton={SizeButton.MIDDLE}
                        className={cls.public}
                        htmlType={'submit'}
                    >
                        Опубликовать
                    </Button>
                    <Button
                        theme={ThemeButton.CLEAR}
                        className={cls.cancel}
                        onClick={cancel}
                    >
                        Отмена
                    </Button>
                </div>
            </Form>
        );
    }
);

export default AddFlatPage;
