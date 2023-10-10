import React, { FC, ReactNode, useState } from 'react';
import { Text } from 'shared/ui/Text';
import Arrow from 'assets/icons/arrow.svg?react';
import { classNames } from 'shared';
import { Themes } from 'shared/interfaces/base';
import { Loader } from 'shared/ui/Loader';
import { Select } from 'shared/ui/Select';
import cls from './SelectTypes.module.scss';

interface ISelect {
    list?: {id: string, name: string}[]
    accordionTitle: string
    accordionMessage?: string
    className?: string
    onClick?: (value: string) => void
    isLoading: boolean
}

export const SelectTypes: FC<ISelect> = (props: ISelect) => {
    const {
        accordionTitle,
        accordionMessage,
        className,
        list,
        onClick,
        isLoading,
    } = props;

    const [toggle, setToggle] = useState(false);

    const onToggle = () => {
        setToggle((prevState) => !prevState);
    };

    const handlerClickOption = (name: string, id: string) => {
        onClick(name);
        onToggle();
    };
    return (
        <Select accordionTitle={accordionTitle} onToggle={onToggle} toggle={toggle} className={className} isLoadingFiles={isLoading}>
            {toggle && list?.map((item, index) => (
                <div
                    key={`${item.name}${item.id}`}
                    className={classNames(cls.item, { [cls.itemDifferentStyle]: index === 0 }, [])}
                    onClick={() => handlerClickOption(item.name, item.id)}
                >
                    <Text
                        className={cls.textOption}
                        theme={Themes.PRIMARY}
                    >
                        {item.name}
                    </Text>
                </div>

            ))}
        </Select>
    );
};
