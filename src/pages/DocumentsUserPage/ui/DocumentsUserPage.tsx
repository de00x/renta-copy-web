import {message} from "antd";
import {useEffect, useState} from 'react';
import {useForm} from 'antd/lib/form/Form';
import {PAGE_TITLES} from "shared/constants/pageTitles";
import {DocumentsUserPageLayout} from "widgets/Layouts";
import {IDocumentItem} from "../model/types/documentsUserPageTypes";
import {ModalSortBy} from "pages/DocumentsUserPage/ui/ModalSortBy/ModalSortBy";
import {localizedData} from "pages/DocumentsUserPage/model/constants/constants";
import {ModalFilterBy} from "pages/DocumentsUserPage/ui/ModalFilterBy/ModalFilterBy";
import {UploadedDocuments} from "pages/DocumentsUserPage/ui/UploadedDocuments/UploadedDocuments";
import {ModalSendDocuments} from "pages/DocumentsUserPage/ui/ModalSendDocuments/ModalSendDocuments";
import {ModalUploadDocuments} from "pages/DocumentsUserPage/ui/ModalUploadDocuments/ModalUploadDocuments";
import {DocumentsControlsBtn} from "pages/DocumentsUserPage/ui/DocumentsControlsBtn/DocumentsControlsBtn";

function formatDateToRussian() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${localizedData.MONTHS[month]}, ${year}`;
}

const DocumentsUserPage = () => {
    const [modalSortByOpen, setModalSortByOpen] = useState(false)
    const [selectedDocuments, setSelectedDocuments] = useState([])
    const [modalFilterByOpen, setModalFilterByOpen] = useState(false)
    const [modalSendDocumentOpen, setModalSendDocumentOpen] = useState(false)
    const [modalUploadDocumentOpen, setModalUploadDocumentOpen] = useState(false)
    const [uploadedDocuments, setUploadedDocuments] = useState<IDocumentItem[]>([])
    const [readyToUploadFiles, setReadyToUploadFiles] = useState<IDocumentItem[]>([]);
    const [currSelectedUserForDocument, setCurrSelectedUserForDocument] = useState(null)

    const [form] = useForm();

    useEffect(() => {
        document.title = PAGE_TITLES.DOCUMENTS;
    }, []);

    const handleDocumentClick = (index: number) => {
        setSelectedDocuments((prevState) =>
            prevState.includes(index) ?
                prevState.filter((selectedIndex) => selectedIndex !== index) :
                [...prevState, index]
        );
    };

    const handleDeleteSelectedDocuments = () => {
        setUploadedDocuments((prevState) => {
            return prevState.filter((_, index) => !selectedDocuments.includes(index));
        });

        setSelectedDocuments([]);
    };

    function formatSize(size: number) {
        if (size < 1024) {
            return size.toFixed(2) + 'Б';
        }

        if (size < 1024 * 1024) {
            return (size / 1024).toFixed(2) + 'КБ';
        }

        return (size / (1024 * 1024)).toFixed(2) + 'МБ';
    }

    const handleFileSelect = (e: FileList) => {
        const filesArray = Array.from(e);

        setReadyToUploadFiles((prevFiles) => {

            const newFiles: IDocumentItem[] = filesArray.map((file) => ({
                name: file.name,
                size: formatSize(file.size),
                date: formatDateToRussian(),
            }));

            return [...prevFiles, ...newFiles];
        });
    };

    const handleFileRemove = (indexToRemove: number) => {
        const updatedFiles = readyToUploadFiles.filter((_, index) => index !== indexToRemove);
        setReadyToUploadFiles(updatedFiles);
    };

    const onFinish = (value: any) => {
        let totalSize = 0

        for (let i = 0; i < readyToUploadFiles.length; i++) {
            const sizeString = readyToUploadFiles[i].size;

            const sizeValue = parseFloat(sizeString.replace('КБ', '').trim());

            if (!isNaN(sizeValue)) {
                totalSize += sizeValue;
            }
        }

        const newDocument: IDocumentItem = {
            name: value['file-name'] ?? readyToUploadFiles[0].name,
            size: readyToUploadFiles[0].size,
            date: readyToUploadFiles[0].date,
        }

        closeModalsByConfig('upload-files')
        message.success(`Документ "${newDocument.name}" был успешно добавлен.`)
        setUploadedDocuments(prevState => [...prevState, newDocument])
        setReadyToUploadFiles([])
        form.resetFields(['file-name']);
    }

    const handlerCurrSelectedUserForDocument = (i: number) => {
        currSelectedUserForDocument === i ?
            setCurrSelectedUserForDocument(null) :
            setCurrSelectedUserForDocument(i)

    }

    const sendDocumentToUser = () => {
        setModalSendDocumentOpen(false)
        message.success(`Документ был успешно отправлен.`)
    }

    const closeModalsByConfig = (currentModal: string) => {
        switch (currentModal) {
            case 'upload-files':
                setModalUploadDocumentOpen(false)
                form.resetFields(['file-name']);
                setReadyToUploadFiles([])
                break

            case 'send-document':
                setModalSendDocumentOpen(false)
                break;

            case 'sort-by':
                setModalSortByOpen(false)
                break;

            case 'filter-by':
                setModalFilterByOpen(false)
                break

            default:
                break
        }
    }

    const openModalsByConfig = (currentModal: string) => {
        switch (currentModal) {
            case 'upload-documents':
                setModalUploadDocumentOpen(true)
                break

            case 'send-document':
                setModalSendDocumentOpen(true)
                break

            case 'sort-by':
                setModalSortByOpen(true)
                break

            case 'filter-by':
                setModalFilterByOpen(true)
                break

            default:
                break
        }
    }

    return (
        <DocumentsUserPageLayout>
            <ModalUploadDocuments
                form={form}
                onFinish={onFinish}
                handleFileRemove={handleFileRemove}
                handleFileSelect={handleFileSelect}
                readyToUploadFiles={readyToUploadFiles}
                closeModalsByConfig={closeModalsByConfig}
                modalUploadDocumentOpen={modalUploadDocumentOpen}
            />
            <ModalSendDocuments
                sendDocumentToUser={sendDocumentToUser}
                closeModalsByConfig={closeModalsByConfig}
                modalSendDocumentOpen={modalSendDocumentOpen}
                currSelectedUserForDocument={currSelectedUserForDocument}
                handlerCurrSelectedUserForDocument={handlerCurrSelectedUserForDocument}
            />
            <ModalSortBy
                modalSortByOpen={modalSortByOpen}
                closeModalsByConfig={closeModalsByConfig}
            />
            <ModalFilterBy
                modalFilterByOpen={modalFilterByOpen}
                closeModalsByConfig={closeModalsByConfig}
            />
            <DocumentsControlsBtn
                selectedDocuments={selectedDocuments}
                openModalsByConfig={openModalsByConfig}
                handleDeleteSelectedDocuments={handleDeleteSelectedDocuments}
            />
            <UploadedDocuments
                selectedDocuments={selectedDocuments}
                uploadedDocuments={uploadedDocuments}
                handleDocumentClick={handleDocumentClick}
            />
        </DocumentsUserPageLayout>
    );
};

export default DocumentsUserPage;
