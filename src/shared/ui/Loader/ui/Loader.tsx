import {Spin} from 'antd';
import React, {FC} from 'react';
import cls from './Loader.module.scss';

interface ILoaderProps {
    size?: 'small' | 'default' | 'large';
}

export const Loader = (props: ILoaderProps) => {
    const {size = 'small'} = props;

    return (
        <div className={cls['loader-wrapper']}>
            <Spin size={size}/>
        </div>
    );
};
