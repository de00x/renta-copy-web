import {FC} from "react";
import {Form} from "antd";
import {Text} from "shared/ui/Text";
import {Input} from "shared/ui/Input";
import {Modal} from "shared/ui/Modal";
import {FileUpload} from "shared/ui/FileUpload";
import cls from './ModalUploadDocuments.module.scss'
import {CheckboxInput} from "feature/CheckboxGroup";
import {Button, ThemeButton} from "shared/ui/Button";
import PaperClipSVG from "assets/icons/paperClip.svg?react";
import DeleteDocumentSVG from "assets/icons/deleteDocument.svg?react";
import UploadDocumentSVG from "assets/icons/uploadDocument.svg?react";
import {IModalUploadDocumentsProps} from "../../model/types/documentsUserPageTypes";

export const ModalUploadDocuments: FC<IModalUploadDocumentsProps> = (props) => {

    const {
        form,
        onFinish,
        handleFileSelect,
        handleFileRemove,
        readyToUploadFiles,
        closeModalsByConfig,
        modalUploadDocumentOpen
    } = props

    return (
        <Modal
            isOpen={modalUploadDocumentOpen}
            additionalStyles={cls['modal-additional-styles']}
            onClose={() => closeModalsByConfig('upload-files')}
        >
            <div className={cls['modal-upload-file-wrapper']}>
                <Form
                    form={form}
                    name={'upload-new-document'}
                    onFinish={(value) => onFinish(value)}
                    className={cls['modal-form-wrapper']}
                >
                    <Text className={cls['modal-title']}>Загрузить новый документ</Text>
                    <Form.Item
                        name={'file-name'}
                        className={cls['modal-input-wrapper']}
                    >
                        <Input placeholder={'Название'}/>
                    </Form.Item>
                    <div className={cls['checkbox-wrapper']}>
                        <div className={cls['checkbox-item']}>
                            <Text>Чек</Text>
                            <CheckboxInput name={'check'}/>
                        </div>
                        <div className={cls['checkbox-item']}>
                            <Text>Документы</Text>
                            <CheckboxInput name={'document'}/>
                        </div>
                        <div className={cls['checkbox-item']}>
                            <Text>Квитанция</Text>
                            <CheckboxInput name={'ticket'}/>
                        </div>
                        <div className={cls['checkbox-item']}>
                            <Text>Другое</Text>
                            <CheckboxInput name={'other'}/>
                        </div>
                    </div>
                    <Text className={cls['attached-documents']}>Прикрепленные документы</Text>
                    <div className={cls['file-upload-wrapper']}>
                        <div className={cls['uploaded-files-wrapper']}>
                            {readyToUploadFiles.map((file, i) =>
                                <div
                                    key={i}
                                    className={cls['uploaded-file-container']}
                                >
                                    <div className={cls['uploaded-file-svg']}>
                                        <PaperClipSVG/>
                                    </div>
                                    <Text className={cls['uploaded-file-name']}>
                                        {file.name}
                                    </Text>
                                    <Text className={cls['uploaded-file-date']}>
                                        {file.date}
                                    </Text>
                                    <Text className={cls['uploaded-file-size']}>
                                        {file.size}
                                    </Text>
                                    <div
                                        onClick={() => handleFileRemove(i)}
                                        className={cls['uploaded-file-svg-delete']}
                                    >
                                        <DeleteDocumentSVG/>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={cls['upload-files-btn-container']}>
                            <FileUpload
                                setFile={handleFileSelect}
                                accept=".pdf, .doc, .docx"
                                multiple={true}
                                className={cls['file-upload-btn']}
                            >
                                <div className={cls['svg-btn-upload']}>
                                    <UploadDocumentSVG/>
                                </div>
                                <Text>Загрузите документ</Text>
                            </FileUpload>
                        </div>
                    </div>
                    <div
                        className={cls['footer-wrapper']}
                    >
                        <Button htmlType={'submit'}>
                            Сохранить
                        </Button>
                        <Button
                            theme={ThemeButton.CLEAR}
                            type="button"
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.preventDefault();
                                closeModalsByConfig('upload-files');
                            }}
                        >
                            Отмена
                        </Button>
                    </div>
                </Form>
            </div>
        </Modal>
    )
}