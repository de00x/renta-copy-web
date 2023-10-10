import React from 'react';
import {Modal} from 'shared/ui/Modal';
import {OfferRentFormAsync} from '../OfferRentForm/OfferRentForm.async';

interface ConfirmationModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    control?: string
}

const OfferRentModal = (props: ConfirmationModalProps) => {
    const {
        className, onClose, isOpen, control,
    } = props;

    return (
        <Modal
            className={className}
            isOpen={isOpen}
            onClose={onClose}
        >
            <OfferRentFormAsync control={control} onToggleTab={onClose}/>
        </Modal>
    );
};

export default OfferRentModal;
