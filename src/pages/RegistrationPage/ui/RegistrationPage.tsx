import moment from 'moment';
import {Text} from "shared/ui/Text";
import {Form, DatePicker} from 'antd';
import {Button} from 'shared/ui/Button';
import {AppLink} from "shared/ui/AppLink";
import {useNavigate} from "react-router-dom";
import {FC, useEffect, useState} from 'react';
import {AUTH_MESSAGES} from "shared/constants";
import cls from './RegistrationPage.module.scss';
import {Input, InputPass} from 'shared/ui/Input';
import OpenedEye from 'assets/icons/openedEye.svg?react';
import ClosedEye from 'assets/icons/closedEye.svg?react';
import {CheckboxInput} from "feature/CheckboxGroup";
import {RegistrationPageLayout} from "widgets/Layouts";
import {PAGE_TITLES} from "shared/constants/pageTitles";
import {IFormValuesData} from '../model/types/registration-form-data.types'
import {showNotification, destroyNotifications} from "shared/helpers/notification";
import {onRegistration} from "pages/RegistrationPage/model/services/authService/authService";
import defaultAuthFormStyles from '../../../app/styles/default-auth-forms-styles.module.scss'
import {allowOnlyDigitsInput, allowAlphanumericInput} from "shared/lib/inputValidationRegex/inputValidationRegex";
import {inputPlaceholders} from "pages/RegistrationPage/model/constants/registration-input-placeholders.constants";
import {
    EMAIL_RULES,
    PASSWORD_RULES,
    REQUIRED_RULE
} from "pages/RegistrationPage/model/constants/registration-rules-for-inputs.constants";


const {
    ERROR_MESSAGE,
    UNEXPECTED_ERROR_MESSAGE,
    EMAIL_CONFIRMATION_MESSAGE,
    REGISTRATION_SUCCESS_MESSAGE
} = AUTH_MESSAGES

const {
    emailPlaceholder,
    passwordPlaceholder,
    lastNamePlaceholder,
    firstNamePlaceholder,
    middleNamePlaceholder,
    phoneNumberPlaceholder,
    dateOfBirthPlaceholder,
} = inputPlaceholders

const defaultFormBtnStyles = defaultAuthFormStyles['default-auth-form-btn']
const defaultFormInputStyles = defaultAuthFormStyles['default-auth-form-input']
const defaultFormTitleTextStyles = defaultAuthFormStyles['default-auth-form-title']
const defaultFormItemStyles = defaultAuthFormStyles['default-auth-form-item-container']
const defaultFormContainerStyles = defaultAuthFormStyles['default-auth-form-container']
const defaultFormBtnContainerStyles = defaultAuthFormStyles['default-auth-form-btn-container']

const RegistrationPage: FC = () => {
    const [btnSubmitDisabled, setBtnSubmitDisabled] = useState(true)

    const [form] = Form.useForm();
    const navigate = useNavigate()

    useEffect(() => {
        document.title = PAGE_TITLES.REGISTRATION
    }, [])

    const maxDate = moment().subtract(14, 'years').endOf('day');
    const defaultDate = moment(maxDate);

    const successRegistration = () => {
        showNotification({
            duration: 0,
            type: 'success',
            message: REGISTRATION_SUCCESS_MESSAGE,
            description: EMAIL_CONFIRMATION_MESSAGE,
            onClose: () => {
                navigate('/login');
                destroyNotifications();
            },
            notificationKey: 'success-registration'
        })
        navigate('/login')
    }

    const errorRegistration = (message: string) => {
        showNotification({
            duration: 5,
            type: 'error',
            description: message || UNEXPECTED_ERROR_MESSAGE,
            message: ERROR_MESSAGE,
            notificationKey: 'error-registration'
        })
    }

    const onFinish = (value: IFormValuesData) => {
        onRegistration(value)
            .then(() => successRegistration())
            .catch((err) => errorRegistration(err.response?.data?.message))
    };

    return (
        <RegistrationPageLayout>
            <Form
                form={form}
                autoComplete="off"
                onFinish={onFinish}
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                name="registration-form"
                initialValues={{remember: true}}
                className={defaultFormContainerStyles}
            >
                <h1 className={defaultFormTitleTextStyles}>Регистрация</h1>
                <Form.Item
                    name="email"
                    rules={EMAIL_RULES}
                    className={defaultFormItemStyles}
                >
                    <Input
                        type="email"
                        placeholder={emailPlaceholder}
                        className={defaultFormInputStyles}
                    />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    className={defaultFormItemStyles}
                >
                    <Input
                        type="text"
                        placeholder={lastNamePlaceholder}
                        className={defaultFormInputStyles}
                        onKeyPress={allowAlphanumericInput}
                    />
                </Form.Item>
                <Form.Item
                    name="firstName"
                    rules={REQUIRED_RULE}
                    className={defaultFormItemStyles}
                >
                    <Input
                        type="text"
                        placeholder={firstNamePlaceholder}
                        className={defaultFormInputStyles}
                        onKeyPress={allowAlphanumericInput}
                    />
                </Form.Item>
                <Form.Item
                    name="middleName"
                    className={defaultFormItemStyles}
                >
                    <Input
                        type="text"
                        className={defaultFormInputStyles}
                        placeholder={middleNamePlaceholder}
                        onKeyPress={allowAlphanumericInput}
                    />
                </Form.Item>
                <Form.Item
                    name="birthday"
                    className={defaultFormItemStyles}
                >
                    <DatePicker
                        showTime={false}
                        showToday={false}
                        allowClear={false}
                        format="DD.MM.YYYY"
                        defaultPickerValue={defaultDate}
                        placeholder={dateOfBirthPlaceholder}
                        className={`${cls['input']} ${cls['date-picker']}`}
                        disabledDate={(current) => current && current > maxDate}
                    />
                </Form.Item>
                <Form.Item
                    name="phone"
                    rules={REQUIRED_RULE}
                    className={defaultFormItemStyles}
                >
                    <Input
                        type="text"
                        onKeyPress={allowOnlyDigitsInput}
                        className={defaultFormInputStyles}
                        placeholder={phoneNumberPlaceholder}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={PASSWORD_RULES}
                >
                    <InputPass
                        type="password"
                        placeholder={passwordPlaceholder}
                        className={defaultFormInputStyles}
                        iconRender={(visible) => (visible ? <OpenedEye/> : <ClosedEye/>)}
                    />
                </Form.Item>
                <div className={cls['accept-user-agreement-container']}>
                    <CheckboxInput
                        name={'acceptUserAgreementText'}
                        onClick={() => setBtnSubmitDisabled(!btnSubmitDisabled)}
                    />
                    <Text
                        className={cls['accept-user-agreement-text']}
                    >
                        Я принимаю условия
                        <span
                        >
                   пользовательского соглашения
                        </span>
                    </Text>
                </div>
                <Form.Item
                    className={defaultFormBtnContainerStyles}
                >
                    <Button
                        htmlType="submit"
                        className={defaultFormBtnStyles}
                        disabled={btnSubmitDisabled}
                    >
                        Зарегистрироваться
                    </Button>
                </Form.Item>
                <AppLink
                    to={'/login'}
                    className={cls['account-exists-text']}
                >
                    У вас уже есть аккаунт?
                </AppLink>
            </Form>
        </RegistrationPageLayout>
    );
};

export default RegistrationPage;
