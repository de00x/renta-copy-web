import React, {ReactNode, useRef} from 'react';
import {classNames} from 'shared';
import cls from './FileUpload.module.scss';

interface FileUploadProps {
    setFile: Function;
    accept: string;
    children: ReactNode
    className: string
    multiple?: boolean
}

export const FileUpload: React.FC<FileUploadProps> = ({
                                                          setFile,
                                                          accept,
                                                          children,
                                                          className,
                                                          multiple,
                                                      }) => {
    const ref = useRef<HTMLInputElement>();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files);
        ref.current.value = '';
    };

    return (
        <div className={
            classNames(cls.FileUpload,
                {}, [className])}
             onClick={() => ref.current.click()}
        >
            <input
                type="file"
                accept={accept}
                style={{display: 'none'}}
                ref={ref}
                multiple={multiple}
                onChange={onChange}
            />
            {children}
        </div>
    );
};

export const RegFileUpload: React.FC<FileUploadProps> = ({
                                                             setFile, accept, children, className,
                                                         }) => {
    const ref = useRef<HTMLInputElement>();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className={classNames(cls.RegFileUpload, {}, [className])} onClick={() => ref.current.click()}>
            <input
                type="file"
                accept={accept}
                style={{display: 'none'}}
                ref={ref}
                onChange={onChange}
            />
            {children}
        </div>
    );
};
