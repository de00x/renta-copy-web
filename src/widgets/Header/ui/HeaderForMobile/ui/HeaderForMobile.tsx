import {FC} from "react";
import cls from './HeaderForMobile.module.scss'
import {HeaderMobileLeftBlock} from "./HeaderMobileLeftBlock";
import {HeaderMobileMiddleBlock} from "./HeaderMobileMiddleBlock";

export const HeaderForMobile: FC = () => {
    return (
        <div className={cls['header-container-for-mobile']}>
            <HeaderMobileLeftBlock/>
            <HeaderMobileMiddleBlock/>
        </div>
    )
}