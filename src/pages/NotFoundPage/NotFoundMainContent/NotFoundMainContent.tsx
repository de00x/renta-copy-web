import {FC} from "react";
import {Text} from "shared/ui/Text";
import cls from './NotFoundMainContent.module.scss';
import HouseForMainTextSVG from "assets/icons/houseForNFPage.svg?react";
import BackgroundForMainTextSVG from "assets/icons/backgroundForNFPage.svg?react";

export const NotFoundMainContent: FC = () => {
    return (
        <div className={cls['not-found-main-container']}>
            <div className={cls['not-found-bgd-for-text']}>
                <BackgroundForMainTextSVG/>
                <Text>Страница не найдена</Text>
            </div>
            <HouseForMainTextSVG/>
        </div>
    )
}