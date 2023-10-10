import {FC} from "react";
import {Loader} from "shared/ui/Loader";
import cls from './VerifyEmailMain.module.scss'

export const VerifyEmailMain: FC = () => {
    return (
        <div className={cls['verify-email-main']}>
            <Loader size={'large'}/>
        </div>
    )
}