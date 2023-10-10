import React, {FC, ReactNode, useState} from 'react';
import {Text} from 'shared/ui/Text';
import Arrow from 'assets/icons/arrow.svg?react';
import {classNames} from 'shared';
import {Themes} from 'shared/interfaces/base';
import {Loader} from 'shared/ui/Loader';
import cls from './Select.module.scss';

interface ISelect {
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
    children: ReactNode
    onToggle: () => void
    toggle: boolean
    isLoadingFiles?: boolean
}

export const Select: FC<ISelect> = ({
                                        list,
                                        accordionTitle,
                                        accordionMessage,
                                        className,
                                        children,
                                        onToggle,
                                        toggle,
                                        isLoadingFiles,
                                    }) => (
    <div className={classNames(cls.Select, {}, [className])}>
        <div className={classNames(cls.Accordion, {[cls.AccordionActive]: toggle}, [])}>
            <div className={cls.header} onClick={onToggle}>
                <Text className={cls.text} theme={Themes.PRIMARY}>{accordionTitle}</Text>
                {isLoadingFiles
                    ? <Loader/>
                    : <Arrow className={classNames(cls.arrow, {[cls.arrowDown]: toggle}, [])}/>}
            </div>
        </div>
        <div className={classNames(cls.option, {}, [])}>
            {children}
        </div>
    </div>
);
