import {Form} from "antd";
import {Button} from "shared/ui/Button";
import {AppLink} from "shared/ui/AppLink";
import cls from './LoginPage.module.scss';
import {AUTH_MESSAGES} from 'shared/constants'
import {LoginPageLayout} from "widgets/Layouts";
import {Input, InputPass} from "shared/ui/Input";
import OpenedEye from "assets/icons/openedEye.svg?react";
import ClosedEye from "assets/icons/closedEye.svg?react";
import {showNotification} from "shared/helpers/notification";
import {ILoginFormValues} from '../model/types/login-page.types'
import {onLogin} from "pages/LoginPage/model/services/authService/authService";
import defaultAuthFormStyles from "app/styles/default-auth-forms-styles.module.scss";
import {
    EMAIL_RULES,
    PASSWORD_RULES
} from "pages/RegistrationPage/model/constants/registration-rules-for-inputs.constants";
import {AxiosResponse} from "axios";
import {useDecodeIdUserJWT} from "shared/hooks";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {PAGE_TITLES} from "shared/constants/pageTitles";
import {AUTH_INPUT_PLACEHOLDERS} from "../model/constants/login-page.constants";

const defaultFormBtnStyles = defaultAuthFormStyles['default-auth-form-btn']
const defaultFormInputStyles = defaultAuthFormStyles['default-auth-form-input']
const defaultFormTitleTextStyles = defaultAuthFormStyles['default-auth-form-title']
const defaultFormItemStyles = defaultAuthFormStyles['default-auth-form-item-container']
const defaultFormContainerStyles = defaultAuthFormStyles['default-auth-form-container']
const defaultFormBtnContainerStyles = defaultAuthFormStyles['default-auth-form-btn-container']

const {
    ERROR_MESSAGE,
    SUCCESS_AUTH_MESSAGE,
    UNEXPECTED_ERROR_MESSAGE
} = AUTH_MESSAGES

const {
    EMAIL_PLACEHOLDER,
    PASSWORD_PLACEHOLDER
} = AUTH_INPUT_PLACEHOLDERS


const LoginPage = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()

    useEffect(() => {
        document.title = PAGE_TITLES.LOGIN
    }, [])

    const successAuth = (res: AxiosResponse) => {
        const currentAccessToken = res.data.access_token
        const currentRefreshToken = res.data.refresh_token
        const currentIdUser = useDecodeIdUserJWT(currentRefreshToken)

        showNotification({
            duration: 5,
            type: 'success',
            message: SUCCESS_AUTH_MESSAGE,
            notificationKey: 'success-auth'
        })

        localStorage.setItem('id_user', currentIdUser)
        localStorage.setItem('access_token', currentAccessToken)
        localStorage.setItem('refresh_token', currentRefreshToken)
        navigate('/')
    }

    const errorAuth = (message: string) => {
        showNotification({
            duration: 5,
            type: 'error',
            description: message || UNEXPECTED_ERROR_MESSAGE,
            message: ERROR_MESSAGE,
            notificationKey: 'error-auth'
        });
    };

    const onFinish = (value: ILoginFormValues) => {
        onLogin(value)
            .then((res) => successAuth(res))
            .catch((err) => errorAuth(err.response?.data?.message));
    };

    return (
        <LoginPageLayout>
            <Form
                form={form}
                name="login-form"
                autoComplete="off"
                onFinish={onFinish}
                className={defaultFormContainerStyles}
            >
                <h1 className={defaultFormTitleTextStyles}>Вход</h1>
                <Form.Item
                    name="email"
                    rules={EMAIL_RULES}
                    className={defaultFormItemStyles}
                >
                    <Input
                        type="email"
                        placeholder={EMAIL_PLACEHOLDER}
                        className={defaultFormInputStyles}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={PASSWORD_RULES}
                >
                    <InputPass
                        type="password"
                        placeholder={PASSWORD_PLACEHOLDER}
                        className={defaultFormInputStyles}
                        iconRender={(visible) => (visible ? <OpenedEye/> : <ClosedEye/>)}
                    />
                </Form.Item>
                <Form.Item
                    className={defaultFormBtnContainerStyles}
                >
                    <Button
                        htmlType="submit"
                        className={defaultFormBtnStyles}
                    >
                        Войти
                    </Button>
                </Form.Item>
                <AppLink
                    to={'/not-exist-page'}
                    className={cls['footer-forgot-pass-link-text']}
                >
                    <span>Забыли пароль?</span>
                </AppLink>
                <AppLink
                    to={'/registration'}
                    className={cls['footer-register-link-text']}
                >
                    <span>Регистрация</span>
                </AppLink>
            </Form>
        </LoginPageLayout>
    );
};

export default LoginPage