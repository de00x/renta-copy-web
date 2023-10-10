import React from 'react';
import {Form, Checkbox} from 'antd';
import cls from './CheckboxInput.module.scss'
import {CheckboxInputProps} from "pages/AddFlatPage/models/types/addFlatSchema";


export const CheckboxInput: React.FC<CheckboxInputProps> = ({
                                                                name,
                                                                className,
                                                                onClick
                                                            }) => {
    return (
        <Form.Item name={name}
                   valuePropName="checked"
                   className={`${cls['default-wrapper']} ${className}`}
        >
            <Checkbox onClick={onClick}/>
        </Form.Item>
    );
};

