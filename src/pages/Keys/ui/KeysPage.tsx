import {FC, useEffect, useState} from 'react';
import {Input, InputPass} from 'shared/ui/Input';
import {Button, SizeButton} from 'shared/ui/Button';
import {Form} from 'antd';
import {classNames} from 'shared';
import {useNavigate} from 'react-router-dom';
import OpenedEye from 'assets/icons/openedEye.svg?react';
import ClosedEye from 'assets/icons/closedEye.svg?react';
import cls from './KeysPage.module.scss';
import {ERROR_MESSAGES} from "shared/constants/messages";

const KeysPage: FC = () => {

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedSciener, setIsLoggedSciener] = useState(false);

    return (
        <>
            {!isLoggedSciener ? (
                <div className={classNames(cls.scienerWrapper, {}, [])}>
                    <Form
                        name="loginSciener"
                        labelCol={{span: 8}}
                        wrapperCol={{span: 16}}
                        initialValues={{remember: true}}
                        autoComplete="off"
                    >
                        <h1 className={cls.scienerLoginHeader}>Привязать аккаунт Sciener</h1>
                        <Form.Item
                            name="login"
                            rules={[{required: true, message: ERROR_MESSAGES.REQUIRED_FIELD}]}
                        >
                            <Input onChange={(e) => {
                            }} className={cls.input} placeholder="Логин"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{required: true, message: ERROR_MESSAGES.REQUIRED_FIELD}]}
                        >
                            <InputPass
                                className={`${cls.input} ${cls.inputLast}`}
                                iconRender={(visible: boolean) => (visible ? <OpenedEye/> : <ClosedEye/>)}
                                type="password"
                                placeholder="Пароль"
                                onChange={(e) => {
                                }}
                            />
                        </Form.Item>
                        {errorMessage && <div className={cls.error}>{errorMessage}</div>}
                        <Form.Item wrapperCol={{offset: 8, span: 16}}>
                            <Button className={cls.btn} sizeButton={SizeButton.BIG} type="primary" htmlType="submit">
                                Далее
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            ) : (<div>АККАУНТ ПРИВЯЗАН</div>)}
        </>
    );
};

export default KeysPage;
