import React from 'react';
import {Form, Select} from 'antd';
import cls from './SelectAccordion.module.scss';
import {ERROR_MESSAGES} from "shared/constants/messages";

interface SelectFileProps {
    name?: string
    placeholder?: string
    list?: { id?: number, name: string, value: number }[]
}

export const SelectAccordion = (props: SelectFileProps) => {
    const {list, name, placeholder,} = props;

    return (
        <Form.Item
            name={name}
            rules={[{
                required: true,
                message: ERROR_MESSAGES.REQUIRED_FIELD
            }]}
            className={cls.wrapper}
        >
            <Select
                placeholder={placeholder}
                className={cls.input}
            >
                {list?.map((item) => (
                    <Select.Option
                        key={item.value}
                        value={item.value}
                    >
                        {item.name}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    );

};
