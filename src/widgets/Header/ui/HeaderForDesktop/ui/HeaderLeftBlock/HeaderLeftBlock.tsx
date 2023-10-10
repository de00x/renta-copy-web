import {FC} from "react";
import {Text} from "shared/ui/Text";
import {Loader} from "shared/ui/Loader";
import {AppLink} from "shared/ui/AppLink";
import cls from './HeaderLeftBlock.module.scss'
import MarkerSVG from "assets/icons/marker.svg?react";
import RentaLogoSVG from "assets/icons/renta-logo-white.svg?react";
import {useGeolocation} from "widgets/Header/model/hooks/useGeolocation";

export const HeaderLeftBlock: FC = () => {
    const {currentGeoLocation} = useGeolocation()

    return (
        <div className={cls['header-left-block-container']}>
            <AppLink to={'/renta'}>
                <RentaLogoSVG/>
            </AppLink>
            <div className={cls['header-text']}>
                <MarkerSVG/>
                {/*{currentGeoLocation ?? <Loader/>}*/}
                <Text>Пенза</Text>
            </div>
        </div>
    )
}