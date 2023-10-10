import React, {ReactNode} from 'react';
import {classNames} from 'shared';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    additionalStyles?: string
}

const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        additionalStyles
    } = props;

    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };
    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div className={classNames(cls.content, mods, [additionalStyles])} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
