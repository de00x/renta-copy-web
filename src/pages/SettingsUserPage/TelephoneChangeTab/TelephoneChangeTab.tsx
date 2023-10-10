import {Form} from "antd";
import React, {FC} from "react";
import {Text} from "shared/ui/Text";
import {Input} from "shared/ui/Input";
import {Button, ThemeButton} from "shared/ui/Button";
import {ISettingsProfileTabProps} from '../models/types/edit-user.types';
import {telephoneChangeTabLocalization} from "../models/constants/index";

const {
    formName,
    pageTitle,
    saveButtonText,
    cancelButtonText,
    newTelephonePlaceholder
} = telephoneChangeTabLocalization


export const TelephoneChangeTab: FC<ISettingsProfileTabProps> = (props) => {

    const {
        onToggleTab,
        changeFormStyles,
        changeFormButtonStyles,
        currentSettingTitleStyles
    } = props

    return (
        <Form
            name={formName}
            className={changeFormStyles}
        >
            <Text className={currentSettingTitleStyles}>{pageTitle}</Text>
            <Form.Item>
                <Input placeholder={newTelephonePlaceholder}/>
            </Form.Item>
            <div className={changeFormButtonStyles}>
                <Button>{saveButtonText}</Button>
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={() => onToggleTab('1')}
                >
                    {cancelButtonText}</Button>
            </div>
        </Form>
    )
}