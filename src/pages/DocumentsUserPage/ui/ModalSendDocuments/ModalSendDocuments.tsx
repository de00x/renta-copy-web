import {FC, MouseEvent} from "react";
import {Form} from "antd";
import {classNames} from "shared";
import {Text} from "shared/ui/Text";
import {Input} from "shared/ui/Input";
import {Modal} from "shared/ui/Modal";
import cls from "./ModalSendDocuments.module.scss";
import SearchInputSVG from "assets/icons/search.svg?react";
import {Button, ThemeButton} from "shared/ui/Button";
import UserAvatarSVG from "assets/icons/userAvatar.svg?react";
import {sendDocumentUserMock} from "../../model/constants/constants";
import {IModalSendDocumentsProps} from '../../model/types/documentsUserPageTypes'

export const ModalSendDocuments: FC<IModalSendDocumentsProps> = (props) => {

    const {
        sendDocumentToUser,
        closeModalsByConfig,
        modalSendDocumentOpen,
        currSelectedUserForDocument,
        handlerCurrSelectedUserForDocument
    } = props

    return (
        <Modal
            isOpen={modalSendDocumentOpen}
            additionalStyles={cls['modal-additional-styles']}
            onClose={() => closeModalsByConfig('send-document')}
        >
            <Form
                onFinish={sendDocumentToUser}
                className={cls['modal-send-document-wrapper']}
            >
                <Text className={cls['send-document-title']}>Отправить</Text>
                <Form.Item
                    name={'send-file-input'}
                    className={cls['send-document-input-container']}
                >
                    <Input/>
                    <div className={cls['send-document-input-svg']}>
                        <SearchInputSVG/>
                    </div>
                </Form.Item>
                <div className={cls['send-document-user-list-wrapper']}>
                    {sendDocumentUserMock.map((usersToSendDocuments, i) =>
                        <div
                            key={i}
                            className={classNames(cls['send-document-user'],
                                {
                                    [cls['send-document-user-active']]:
                                    currSelectedUserForDocument === i
                                })}
                            onClick={() => handlerCurrSelectedUserForDocument(i)}
                        >
                            <div className={cls['send-document-user-avatar']}>
                                <UserAvatarSVG/>
                            </div>
                            <div className={cls['send-document-user-info']}>
                                <Text>Марина(Квартира однокомнатная)</Text>
                                <Text>г. Пенза, ул. Московская</Text>
                                <Text>Добрый день, где находится квартира?</Text>
                                <Text>30.04</Text>
                            </div>
                        </div>
                    )}
                </div>
                <div className={cls['send-document-button-footer']}>
                    {currSelectedUserForDocument !== null &&
                    <Button
                        htmlType={'submit'}
                    >
                        Отправить
                    </Button>}
                    <Button
                        onClick={(e: MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault();
                            closeModalsByConfig('send-document');
                        }}
                        theme={ThemeButton.CLEAR}
                    >
                        Отмена
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}