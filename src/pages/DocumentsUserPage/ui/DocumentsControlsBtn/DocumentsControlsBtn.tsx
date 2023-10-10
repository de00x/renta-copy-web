import {FC} from "react";
import {Text} from "shared/ui/Text";
import {Button} from "shared/ui/Button";
import cls from "./DocumentsControlsBtn.module.scss";
import {IDocumentsControlsBtnProps} from '../../model/types/documentsUserPageTypes'

export const DocumentsControlsBtn: FC<IDocumentsControlsBtnProps> = (props) => {

    const {
        selectedDocuments,
        openModalsByConfig,
        handleDeleteSelectedDocuments
    } = props

    return (
        <>
            <Text className={cls['title-name-page']}>Документы</Text>
            <div className={cls['add-new-document-btn-container']}>
                {selectedDocuments.length !== 0 &&
                <>
                    <Button
                        className={cls.btn}
                        onClick={handleDeleteSelectedDocuments}
                    >
                        Удалить
                    </Button>
                    <Button
                        className={cls.btn}
                        onClick={() => openModalsByConfig('send-document')}
                    >
                        Отправить
                    </Button>
                    <Button
                        className={cls.btn}
                        onClick={() => openModalsByConfig('filter-by')}
                    >
                        Фильтр
                    </Button>
                    <Button
                        className={cls.btn}
                        onClick={() => openModalsByConfig('sort-by')}
                    >
                        Сортировка</Button>
                </>}
                <Button
                    className={cls.btn}
                    onClick={() => openModalsByConfig('upload-documents')}
                >
                    Добавить
                </Button>
            </div>
        </>
    )
}