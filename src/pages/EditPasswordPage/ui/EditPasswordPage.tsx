import React from 'react';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button';
import { Form } from 'antd';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { Themes } from 'shared/interfaces/base';
import { useNavigate } from 'react-router-dom';
import cls from './EditPasswordPage.module.scss';

const EditPasswordPage = () => {
    const navigate = useNavigate();

    const onFinish = (values: unknown) => {
        console.log('Success:', values); // TODO поменять на запрос
    };

    const onCancel = () => {
        navigate('/edit');
    };

    return (
        <div className={cls.EditPasswordPage}>
            <Text className={cls.header} theme={Themes.PRIMARY}>Смена пароля</Text>
            <Form
                name="login"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                autoComplete="off"
                onFinish={onFinish}
            >
                <Form.Item
                    name="oldPassword"
                    rules={[{ required: true, message: 'Пожалуйста, введите старый пароль' }]}
                >
                    <Input className={cls.EditPasswordInput} placeholder="Введите старый пароль" type="password" />
                </Form.Item>
                <Form.Item
                    name="newPassword"
                    rules={[{ required: true, message: 'Пожалуйста, введите новый пароль' }]}
                >
                    <Input className={cls.EditPasswordInput} placeholder="Введите новый пароль" type="password" />
                </Form.Item>
                <Form.Item
                    name="newRepeatPassword"
                    rules={[{ required: true, message: 'Пожалуйста, повторите новый пароль' }]}
                >
                    <Input className={cls.EditPasswordInputLast} placeholder="Повторите новый пароль" type="password" />
                </Form.Item>
                <Form.Item className={cls.save} wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        theme={ThemeButton.BASIC}
                        className={cls.submit}
                        sizeButton={SizeButton.BIG}
                        type="primary"
                        htmlType="submit"
                    >
                        Сохранить
                    </Button>
                </Form.Item>
                <Form.Item className={cls.cancel} wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        className={cls.submit}
                        theme={ThemeButton.CLEAR}
                        sizeButton={SizeButton.BIG}
                        type="primary"
                        onClick={onCancel}
                    >
                        Отмена
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default EditPasswordPage;
