import {FormInstance} from "antd";

interface IDocumentItem {
    name: string;
    size: string;
    date: string
}

interface IModalUploadDocumentsProps {
    modalUploadDocumentOpen: boolean
    form: FormInstance<any>
    readyToUploadFiles: IDocumentItem[]

    onFinish(value: any): void

    handleFileSelect(e: FileList): void

    handleFileRemove(indexToRemove: number): void

    closeModalsByConfig(currentModal: string): void
}

interface IModalSendDocumentsProps {
    modalSendDocumentOpen: boolean
    currSelectedUserForDocument: null | number

    sendDocumentToUser(): void

    closeModalsByConfig(currentModal: string): void

    handlerCurrSelectedUserForDocument(i: number): void
}


interface IModalSortByProps {
    modalSortByOpen: boolean

    closeModalsByConfig(currentModal: string): void
}

interface IModalFilterByProps {
    modalFilterByOpen: boolean

    closeModalsByConfig(currentModal: string): void
}

interface IDocumentsControlsBtnProps {
    selectedDocuments: any[]

    handleDeleteSelectedDocuments(): void

    openModalsByConfig(currentModal: string): void
}

interface IUploadedDocumentsProps {
    selectedDocuments: any[]
    uploadedDocuments: IDocumentItem[]

    handleDocumentClick(index: number): void
}

export type {
    IDocumentItem,
    IModalSortByProps,
    IModalFilterByProps,
    IUploadedDocumentsProps,
    IModalSendDocumentsProps,
    IModalUploadDocumentsProps,
    IDocumentsControlsBtnProps
}