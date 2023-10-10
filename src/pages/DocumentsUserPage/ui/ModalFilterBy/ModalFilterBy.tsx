import {FC} from "react";
import {Form} from "antd";
import {Text} from "shared/ui/Text";
import {Modal} from "shared/ui/Modal";
import cls from "./ModalFilterBy.module.scss";
import {CheckboxInput} from "feature/CheckboxGroup";
import {Button, ThemeButton} from "shared/ui/Button";
import {IModalFilterByProps} from '../../model/types/documentsUserPageTypes'

export const ModalFilterBy: FC<IModalFilterByProps> = (props) => {

    const {
        modalFilterByOpen,
        closeModalsByConfig
    } = props

    return (
        <Modal
            isOpen={modalFilterByOpen}
            onClose={() => closeModalsByConfig('filter-by')}
            additionalStyles={cls['modal-additional-styles']}
        >
            <div className={cls['filter-by-modal-wrapper']}>
                <Text className={cls['filter-by-title']}>Фильтр</Text>
                <Form
                    name={'filter-by-form'}
                    className={cls['filter-by-form-wrapper']}
                >
                    <div className={cls['current-filtered-item']}>
                        <Text>Чек</Text>
                        <CheckboxInput name={'filtered-by-check'}/>
                    </div>
                    <div className={cls['current-filtered-item']}>
                        <Text>Документы</Text>
                        <CheckboxInput name={'filtered-by-documents'}/>
                    </div>
                    <div className={cls['current-filtered-item']}>
                        <Text>Квитанция</Text>
                        <CheckboxInput name={'filtered-by-receipt'}/>
                    </div>
                    <div className={cls['filter-by-button-footer']}>
                        <Button>Ок</Button>
                        <Button
                            theme={ThemeButton.CLEAR}
                            onClick={() => closeModalsByConfig('filter-by')}
                        >
                            Отмена
                        </Button>
                    </div>
                </Form>
            </div>
        </Modal>
    )
}