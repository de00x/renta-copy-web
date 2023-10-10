import React, { FC } from 'react';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button';
import { Form } from 'antd';
import { Input } from 'shared/ui/Input';
import cls from './RecoveryPhone.module.scss';

interface ILogin {
    onToggleTab: (params: string) => void
}

const Confirm: FC<ILogin> = ({ onToggleTab }) => {
    const onFinish = () => {
        onToggleTab('7');
    };
    return (
        <Form
            name="RecoveryPhone"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <h1 className={cls.header}>Забыли пароль</h1>
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Пожалуйста, введите номер телефона' }]}
            >
                <Input type="number" placeholder="Мобильный телефон" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button sizeButton={SizeButton.BIG} type="primary" htmlType="submit">
                    Далее
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Confirm;
