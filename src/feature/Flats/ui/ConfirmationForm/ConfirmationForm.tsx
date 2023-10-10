import React from 'react';
import {Text} from 'shared/ui/Text';
import {Themes} from 'shared/interfaces/base';
import {Button, ThemeButton} from 'shared/ui/Button';
import cls from './ConfirmationForm.module.scss';

export interface ConfirmationModalProps {
    onToggleTab: () => void
    control: string
    idFlat?: string
}

const ConfirmationForm = (props: ConfirmationModalProps) => {
    const {onToggleTab, control, idFlat} = props;

    const deleteFlats = () => {
        const arrayId: string[] = [];
        [].forEach((item: any) => item.select === true && arrayId.push(item.id));
        onToggleTab();
    };

    const deleteFlat = (id: string) => {
        onToggleTab();
    };

    const fetchFlat = () => {
        if (control === 'flat') {
            deleteFlat(idFlat);
            return;
        }
        deleteFlats();
    };

    const onCancel = () => {
        onToggleTab();
    };

    return (
        <div className={cls.ConfirmationForm}>
            <Text theme={Themes.PRIMARY} className={cls.title}>
                Удалить выбранные объявления?
            </Text>
            <div className={cls.box}>
                <Button theme={ThemeButton.BASIC} className={cls.button} onClick={fetchFlat}>Да</Button>
                <Button theme={ThemeButton.CLEAR} className={cls.button} onClick={onCancel}>Нет</Button>
            </div>
        </div>
    );
};
export default ConfirmationForm;
