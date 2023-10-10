import {useEffect} from "react";
import {AUTH_MESSAGES} from 'shared/constants'
import {VerifyEmailPageLayout} from "widgets/Layouts";
import {PAGE_TITLES} from "shared/constants/pageTitles";
import {useLocation, useNavigate} from "react-router-dom";
import {showNotification} from "shared/helpers/notification";
import {VerifyEmailMain} from "pages/VerifyEmailPage/ui/VerifyEmailMain/VerifyEmailMain";
import {onVerifyEmail} from "pages/VerifyEmailPage/model/services/verify-email-page.services";

const VerifyEmailPage = () => {
    const {UNEXPECTED_ERROR_MESSAGE, ERROR_MESSAGE, SUCCESS_VERIFY_MESSAGE} = AUTH_MESSAGES

    const navigate = useNavigate()
    const location = useLocation();

    const successVerify = () => {
        showNotification({
            duration: 5,
            type: 'success',
            message: SUCCESS_VERIFY_MESSAGE,
            notificationKey: 'success-verify-email'
        })
        navigate('/login')
    }

    const errorVerify = () => {
        showNotification({
            duration: 5,
            type: 'error',
            description: UNEXPECTED_ERROR_MESSAGE,
            message: ERROR_MESSAGE,
            notificationKey: 'error-verify-email'
        });
        navigate('/login')
    };

    useEffect(() => {
        document.title = PAGE_TITLES.EMAIL_CONFIRMATION

        onVerifyEmail(location)
            .then(successVerify)
            .catch(errorVerify)
    }, [])

    return (
        <VerifyEmailPageLayout>
            <VerifyEmailMain/>
        </VerifyEmailPageLayout>

    )
};

export default VerifyEmailPage;
