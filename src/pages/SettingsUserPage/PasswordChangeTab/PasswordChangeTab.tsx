import React, {FC} from "react";
import {Text} from "shared/ui/Text";
import {Input} from "shared/ui/Input";
import {Form, TabPaneProps} from "antd";
import {Button, ThemeButton} from "shared/ui/Button";
import {ISettingsProfileTabProps} from '../models/types/edit-user.types'
import {
    passwordChangeTabLocalization
} from "../models/constants/password-change-tab.constants";

const {
    formName,
    pageTitle,
    saveButtonText,
    cancelButtonText,
    newPasswordPlaceholder,
    oldPasswordPlaceholder,
    confirmPasswordPlaceholder,
} = passwordChangeTabLocalization


export const PasswordChangeTab: FC<ISettingsProfileTabProps> = (props) => {

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
                <Input placeholder={oldPasswordPlaceholder}/>
            </Form.Item>
            <Form.Item>
                <Input placeholder={newPasswordPlaceholder}/>
            </Form.Item>
            <Form.Item>
                <Input placeholder={confirmPasswordPlaceholder}/>
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