import {FC} from "react";
import {Checkbox} from "antd";
import {Text} from "shared/ui/Text";
import cls from "./UploadedDocuments.module.scss";
import {IDocumentItem, IUploadedDocumentsProps} from "../../model/types/documentsUserPageTypes";

export const UploadedDocuments: FC<IUploadedDocumentsProps> = (props) => {

    const {
        uploadedDocuments,
        selectedDocuments,
        handleDocumentClick
    } = props

    return (
        <div className={cls['uploaded-documents-wrapper']}>
            <div className={cls['uploaded-documents-header']}>
                <Text className={cls['file-number-title']}>Наименование</Text>
                <Text className={cls['file-number-date']}>Дата загрузки</Text>
                <Text className={cls['file-number-volume']}>Объем</Text>
            </div>
            <div className={cls['uploaded-documents-container']}>
                {uploadedDocuments.map((document, i) =>
                    <div
                        key={i}
                        className={cls['uploaded-document']}
                    >
                        <Checkbox
                            name={document.name}
                            onClick={() => handleDocumentClick(i)}
                            checked={selectedDocuments.includes(i)}
                        />
                        <Text className={cls['file-number']}>{i + 1}</Text>
                        <Text className={cls['file-name']}>{document.name}</Text>
                        <Text className={cls['file-date']}>{document.date}</Text>
                        <Text className={cls['file-volume']}>{document.size}</Text>
                    </div>
                )}
            </div>
        </div>
    )
}