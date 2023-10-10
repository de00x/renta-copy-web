import React from "react";
import {TabPaneProps} from "antd";

interface ISettingsProfileTabProps {
    TabPane: React.FC<TabPaneProps>
    currentSettingTitleStyles: string
    changeFormButtonStyles: string
    changeFormStyles: string

    onToggleTab(key: string): void
}

interface ISettingsMasterTabProps {

    onToggleTab(key: string): void
}

export type {
    ISettingsProfileTabProps,
    ISettingsMasterTabProps
}