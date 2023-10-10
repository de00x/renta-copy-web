import {FC} from "react";
import {Text} from "shared/ui/Text";
import LogoSVG from "assets/icons/rentaLogo.svg?react";
import cls from './HeaderMobileMiddleBlock.module.scss'

export const HeaderMobileMiddleBlock: FC = () => {
    return (
        <div className={cls['header-middle-block-container']}>
            <LogoSVG/>
            <Text className={cls['header-title-text-mobile']}>Flat Renta</Text>
        </div>
    )
}