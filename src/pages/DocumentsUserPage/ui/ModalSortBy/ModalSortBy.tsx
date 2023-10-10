import {FC} from "react";
import {Text} from "shared/ui/Text";
import {Modal} from "shared/ui/Modal";
import cls from "./ModalSortBy.module.scss";
import {Button, ThemeButton} from "shared/ui/Button";
import {IModalSortByProps} from '../../model/types/documentsUserPageTypes'

export const ModalSortBy: FC<IModalSortByProps> = (props) => {

    const {
        modalSortByOpen,
        closeModalsByConfig
    } = props

    return (
        <Modal
            isOpen={modalSortByOpen}
            additionalStyles={cls['modal-additional-styles']}
            onClose={() => closeModalsByConfig('sort-by')}
        >
            <div className={cls['sort-by-modal-wrapper']}>
                <Text className={cls['sort-by-title']}>Сортировка</Text>
                <div className={cls['sort-by-mock-text']}>
                    <Text>Сначала новые</Text>
                    <Text>Сначала старые</Text>
                    <Text>Сначала еще что-то</Text>
                </div>
                <div className={cls['sort-by-button-footer']}>
                    <Button>Ок</Button>
                    <Button
                        theme={ThemeButton.CLEAR}
                        onClick={() => closeModalsByConfig('sort-by')}
                    >
                        Отмена
                    </Button>
                </div>
            </div>
        </Modal>
    )
}