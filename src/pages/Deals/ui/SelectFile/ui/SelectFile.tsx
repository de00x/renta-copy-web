import React, { useState } from 'react';
import { classNames } from 'shared';
import { Text } from 'shared/ui/Text';
import { Themes } from 'shared/interfaces/base';
import { Select } from 'shared/ui/Select';
import moment from 'moment';
import cls from './SelectFile.module.scss';

interface SelectFileProps {
    list?: {
        id: string,
        userId: string,
        documentTypeId: string,
        fileInfoResponseDto: {
            id: string,
            size: number,
            contentType: string,
            name: string
        },
        public: boolean,
        createdAt: string
    }[]
    accordionTitle: string
    accordionMessage?: string
    className?: string
    isLoadingFiles: boolean
    getFileDocument?: (id: string, name: string) => void
}

const SelectFile = (props: SelectFileProps) => {
    const {
        list, accordionTitle, accordionMessage, className, isLoadingFiles, getFileDocument,
    } = props;

    const [toggle, setToggle] = useState(false);

    const onToggle = () => {
        setToggle((prevState) => !prevState);
    };

    if (toggle && !list.length) {
        return (
            <Select accordionTitle={accordionTitle} list={list} onToggle={onToggle} toggle={toggle} className={className} isLoadingFiles={isLoadingFiles}>
                <div
                    className={classNames(cls.item, { [cls.itemDifferentStyle]: true }, [])}
                >
                    <Text
                        className={cls.textOption}
                        theme={Themes.PRIMARY}
                    >
                        Нет данных
                    </Text>
                </div>
            </Select>
        );
    }

    return (
        <Select accordionTitle={accordionTitle} list={list} onToggle={onToggle} toggle={toggle} className={className} isLoadingFiles={isLoadingFiles}>
            {toggle && list.map((item, index) => (
                <div
                    className={classNames(cls.item, { [cls.itemDifferentStyle]: index === 0 }, [])}
                    onClick={() => getFileDocument(item.fileInfoResponseDto.id, item.fileInfoResponseDto.name)}
                >
                    <Text
                        className={cls.textOption}
                        theme={Themes.PRIMARY}
                    >
                        {`${item.fileInfoResponseDto.name}`}
                    </Text>
                </div>

            ))}
        </Select>
    );
};

export default SelectFile;
