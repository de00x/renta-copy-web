import React, {useState} from 'react';
import {classNames} from 'shared';
import {Text} from 'shared/ui/Text';
import {Themes} from 'shared/interfaces/base';
import {Select} from 'shared/ui/Select';
import {Loader} from 'shared/ui/Loader';
import Arrow from 'assets/icons/arrow.svg?react';
import Close from 'assets/icons/close.svg?react';
import cls from './SelectData.module.scss';

interface SelectFileProps {
    list?: { id: string, name: string }[]
    accordionTitle: string
    accordionMessage?: string
    className?: string
    onClick?: (id: string, name: string) => void
    isLoading: boolean
    error?: string
    clear?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
    isSelected: boolean
}

export const SelectData = (props: SelectFileProps) => {
    const {
        list, accordionTitle, accordionMessage, className, onClick, isLoading, error, clear, isSelected,
    } = props;

    const [toggle, setToggle] = useState(false);

    const onToggle = () => {
        setToggle((prevState) => !prevState);
    };

    const handlerClickOption = (id: string, name: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onClick(id, name);
        onToggle();
    };

    return (
        <div className={classNames(cls.Select, {}, [className])}>
            <div className={classNames(cls.Accordion, {[cls.AccordionActive]: toggle}, [])}>
                <div className={cls.header} onClick={onToggle}>
                    {error
                        ? <Text className={cls.text} theme={Themes.PRIMARY}>{error}</Text>
                        : (
                            <>
                                <Text className={cls.text} theme={Themes.PRIMARY}>{accordionTitle}</Text>
                                {isLoading
                                    ? <Loader/>
                                    : (
                                        <div className={cls.toggle}>
                                            {isSelected ?
                                                <Close className={cls.close} onClick={(e) => clear(e)}/> : null}
                                            <Arrow className={classNames(cls.arrow, {[cls.arrowDown]: toggle}, [])}/>
                                        </div>
                                    )}
                            </>
                        )}
                </div>
            </div>
            <div className={classNames(cls.option, {}, [])}>
                {toggle && list?.map((item, index) => (
                    <div
                        key={item.name}
                        className={classNames(cls.item, {[cls.itemDifferentStyle]: index === 0}, [])}
                        onClick={(e) => handlerClickOption(item.id, item.name, e)}
                    >
                        <Text
                            className={cls.textOption}
                            theme={Themes.PRIMARY}
                        >
                            {item.name}
                        </Text>
                    </div>
                ))}
            </div>
        </div>
    );
};
