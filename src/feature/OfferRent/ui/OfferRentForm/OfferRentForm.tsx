import React from 'react';
import {Text} from 'shared/ui/Text';
import {Themes} from 'shared/interfaces/base';
import {Button, ThemeButton} from 'shared/ui/Button';
import {useSelector} from 'react-redux';
import cls from './OfferRentForm.module.scss';

export interface ConfirmationModalProps {
    onToggleTab: () => void
    control: string
    idFlat?: number
}

const OfferRentForm = (props: ConfirmationModalProps) => {
    const {onToggleTab, control, idFlat} = props;

    const addBlackList = (arrayId: number[]) => {
        // TODO добавить запрос ЧС
        onToggleTab();
    };

    const rejectOffer = (arrayId: number[]) => {
        // TODO добавить запрос отказать в аренде
        onToggleTab();
    };

    const fetchFlat = () => {
        const arrayId: number[] = [];
        [].forEach((item: any) => item.select === true && arrayId.push(item.id));
        if (control === 'rejectOffer') {
            rejectOffer(arrayId);
            return;
        }
        addBlackList(arrayId);
    };

    const onCancel = () => {
        onToggleTab();
    };

    return (
        <div className={cls.ConfirmationForm}>
            <Text theme={Themes.PRIMARY} className={cls.title}>
                {control === 'rejectOffers' ? 'Отказать в аренде' : 'В ЧС'}
            </Text>
            <div className={cls.box}>
                <Button theme={ThemeButton.BASIC} className={cls.button} onClick={fetchFlat}>Да</Button>
                <Button theme={ThemeButton.CLEAR} className={cls.button} onClick={onCancel}>Нет</Button>
            </div>
        </div>
    );
};
export default OfferRentForm;
