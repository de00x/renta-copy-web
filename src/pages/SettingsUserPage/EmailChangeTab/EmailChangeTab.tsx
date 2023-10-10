import React, {FC} from "react";
import {Text} from "shared/ui/Text";
import {Input} from "shared/ui/Input";
import {Form, TabPaneProps} from "antd";
import {Button, ThemeButton} from "shared/ui/Button";
import {emailChangeTabLocalization} from "../models/constants/index";
import {ISettingsProfileTabProps} from '../models/types/edit-user.types'

const {
    formName,
    pageTitle,
    saveButtonText,
    cancelButtonText,
    newEmailPlaceholder
} = emailChangeTabLocalization


export const EmailChangeTab: FC<ISettingsProfileTabProps> = (props) => {

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
                <Input placeholder={newEmailPlaceholder}/>
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