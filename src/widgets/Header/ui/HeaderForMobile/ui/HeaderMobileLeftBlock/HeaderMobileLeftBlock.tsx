import {FC, useState} from "react";
import BurgerSVG from "assets/icons/burger.svg?react";
import cls from "./HeaderMobileLeftBlock.module.scss";

export const HeaderMobileLeftBlock: FC = () => {
    const [isVisibleFlyBlock, setIsVisibleFlyBlock] = useState(false)

    return (
        <div className={cls['header-left-block-container']}>
            <BurgerSVG onClick={() => setIsVisibleFlyBlock(prevState => !prevState)}/>
            {
                isVisibleFlyBlock &&
                <div className={cls['mobile-fly-block-container']}>
                    <div>О программе</div>
                    <div>Вопрос - ответ</div>
                    <div>Техподдержка</div>
                </div>
            }
        </div>
    )
}