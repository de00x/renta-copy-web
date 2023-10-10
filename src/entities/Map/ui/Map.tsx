import {
    memo,
    useContext,
    useEffect,
    useState
} from 'react';
import {
    Clusterer,
    Map,
    Placemark,
    YMaps
} from '@pbe/react-yandex-maps';
import {Context} from 'app/App';
import cls from './Map.module.scss';
import {PAGE_TITLES} from "shared/constants/pageTitles";

const MapFlats = memo(() => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const {context, setContext} = useContext(Context);
    const [widthWindow, setWidthWindow] = useState(0);

    useEffect(() => {
        document.title = PAGE_TITLES.MAP;
    }, [])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
        });
    }, []);

    useEffect(() => {

        const onResize = () => {
            setWidthWindow(window.innerWidth);
        };
        setWidthWindow(window.innerWidth);
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    const mapOnChange = (event: any) => {

    };

    const openListFlats = (flatIdList: string[]) => {
        setIsCollapsed(false);
    };


    return (
        <div>
            <div className={cls.content}>
                <YMaps
                    query={{}}
                >
                    <Map
                        instanceRef={(ref) => {
                            if (ref) {
                                setContext(ref);
                            }
                        }}
                        width="100vw"
                        height="calc(100vh - 95px)"
                        onBoundsChange={(event: any) => mapOnChange(event)}
                    >
                        {[].map((item: any, index: any) => {
                            const idStr = `driver-${index}`;
                            if (item.flatIdList.length > 1) {
                                return (
                                    <Clusterer
                                        key={`${item.flatIdList}${index}`}
                                        onClick={() => {
                                            openListFlats(item.flatIdList);
                                        }}
                                        options={{
                                            preset: 'islands#invertedVioletClusterIcons',
                                            groupByCoordinates: false,
                                            clusterize: true,
                                            clusterDisableClickZoom: true,
                                        }}
                                    >
                                        {item.flatIdList.map((coordinates: any, index: any) => (
                                            <Placemark key={`${coordinates}${index}`}
                                                       geometry={[item.latitude, item.longitude]}/>
                                        ))}
                                    </Clusterer>
                                );
                            }
                            return (
                                <Placemark
                                    key={`${item.address}${index}`}
                                    onClick={() => {
                                        openListFlats(item.flatIdList);
                                    }}
                                    geometry={[item.latitude, item.longitude]}
                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageHref: 'https://www.pinclipart.com/picdir/big/545-5450577_map-marker-png-pic-fundacion-checo-perez-clipart.png',
                                        iconImageSize: [20, 30],
                                    }}
                                    properties={
                                        {
                                            hintContent: '<b> Я появляюсь при наведении на метку </b>',
                                        }
                                    }
                                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                                />
                            );
                        })}
                    </Map>
                </YMaps>
            </div>
        </div>
    );
});
export default MapFlats;
