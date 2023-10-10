import React, {FC} from "react";
import {Button} from "shared/ui/Button";
import cls from "./SettingsMasterTab.module.scss";
import {ISettingsMasterTabProps} from '../models/types/edit-user.types'
import {settingsMasterTabLocalization} from "pages/SettingsUserPage/models/constants/settings-master-tab.constants";

const {
    changeEmailButtonText,
    changePasswordButtonText,
    changePhoneNumberButtonText
} = settingsMasterTabLocalization


export const SettingsMasterTab: FC<ISettingsMasterTabProps> = (props) => {

    const {onToggleTab} = props

    return (
        <div className={cls['user-settings-button-container']}>
            <Button
                onClick={() => onToggleTab('2')}
            >
                {changePasswordButtonText}
            </Button>
            <Button
                onClick={() => onToggleTab('3')}
            >
                {changeEmailButtonText}
            </Button>
            <Button
                onClick={() => onToggleTab('4')}
            >
                {changePhoneNumberButtonText}
            </Button>
        </div>
    )
}