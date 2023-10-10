import React from 'react';
import {Modal} from 'shared/ui/Modal';
import {classNames} from 'shared';
import {CityFormAsync} from '../../CityForm/ui/CityForm.async';

interface CityModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const CityModal = (props: CityModalProps) => {
    const {className, onClose, isOpen} = props;

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <CityFormAsync onToggleTab={onClose}/>
        </Modal>
    );
};

export default CityModal;
