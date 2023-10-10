import React from 'react';
import {Modal} from 'shared/ui/Modal';
import {classNames} from 'shared';
import {ConfirmationFormAsync} from '../ConfirmationForm/ConfirmationForm.async';

interface ConfirmationModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    control?: string
    idFlat: string
}

const ConfirmationModal = (props: ConfirmationModalProps) => {
    const {
        className, onClose, isOpen, control, idFlat,
    } = props;

    return (
        <Modal
            className={className}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ConfirmationFormAsync control={control} onToggleTab={onClose} idFlat={idFlat}/>
        </Modal>
    );
};

export default ConfirmationModal;
