import React from 'react';
import {classNames} from 'shared';
import {Modal} from 'shared/ui/Modal';
import {FilterFormAsync} from '../../FilterForm/ui/FilterForm.async';

interface FilterModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const FilterModal = (props: FilterModalProps) => {
    const {className, onClose, isOpen} = props;

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <FilterFormAsync onToggleTab={onClose}/>
        </Modal>
    );
};

export default FilterModal;
