import { ReactNode, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button';
import Rigth from 'assets/icons/right.svg?react';
import Left from 'assets/icons/left.svg?react';
import { Status } from 'feature/Status';
import { RatingUser } from 'shared/ui/RatingUser';
import { Themes } from 'shared/interfaces/base';
import cls from './Carousel.module.scss';

interface CarouselProps {
    isAdmin?: boolean,
    children: ReactNode[],
    rating: number
    idFlat?: string
    status?: boolean
    onChange?: (idUser: string, idFlat: string, status: boolean, e: any) => void
    idUser?: string
}

export const Carousel = (props: CarouselProps) => {
    const {
        children, isAdmin = false, rating, idFlat, onChange, status, idUser,
    } = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children?.length);

    useEffect(() => {
        setLength(children?.length);
    }, [children]);

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    return (
        <div className={cls.carouselContainer}>
            <div className={cls.carouselWrapper}>
                {children?.length > 0
                    && (
                        <Button className={cls.leftArrow} onClick={prev}>
                            <Left className={cls.left} />
                        </Button>
                    )}
                <div className={cls.carouselContentWrapper}>
                    <div
                        className={cls.carouselContent}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {children}
                    </div>
                    <div className={cls.heart}>
                        <RatingUser theme={Themes.SECOND} text={rating} />
                        {isAdmin && <Status activeStatus={status} onClick={(e: any) => onChange(idUser, idFlat, status, e)} />}
                    </div>
                </div>
                {children?.length > 0
                    && (
                        <Button className={cls.rightArrow} onClick={next}>
                            <Rigth className={cls.right} />
                        </Button>
                    )}
            </div>
        </div>
    );
};
