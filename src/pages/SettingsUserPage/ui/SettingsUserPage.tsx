import {Tabs} from 'antd';
import React, {useState} from 'react';
import cls from './SettingsUserPage.module.scss';
import {SettingsUserPageLayout} from "widgets/Layouts";
import {
    emailChangeTabLocalization,
    settingsMasterTabLocalization,
    passwordChangeTabLocalization,
    telephoneChangeTabLocalization
} from "pages/SettingsUserPage/models/constants";
import {
    EmailChangeTab,
    PasswordChangeTab,
    SettingsMasterTab,
    TelephoneChangeTab
} from "pages/SettingsUserPage";


const {masterTabName} = settingsMasterTabLocalization
const {emailChangeTabName} = emailChangeTabLocalization
const {passwordChangeTabName} = passwordChangeTabLocalization
const {telephoneChangeTabName} = telephoneChangeTabLocalization

const SettingsUserPage = () => {

    const [activeTab, setActiveTab] = useState('1');

    const onToggleTab = (key: string) => {
        setActiveTab(key);
    };

    const {TabPane} = Tabs

    return (
        <SettingsUserPageLayout>
            <Tabs
                defaultActiveKey="1"
                activeKey={activeTab}
                onChange={onToggleTab}
                destroyInactiveTabPane
                className={cls['user-account-settings-wrapper']}
            >
                <TabPane tab={masterTabName} key="1" tabKey="1">
                    <SettingsMasterTab onToggleTab={onToggleTab}/>
                </TabPane>
                <TabPane tab={passwordChangeTabName} key='2' tabKey='2'>
                    <PasswordChangeTab
                        TabPane={TabPane}
                        onToggleTab={onToggleTab}
                        changeFormStyles={cls['change-form-styles']}
                        changeFormButtonStyles={cls['change-form-button']}
                        currentSettingTitleStyles={cls['current-setting-title']}
                    />
                </TabPane>
                <TabPane tab={emailChangeTabName} key='3' tabKey='3'>
                    <EmailChangeTab
                        TabPane={TabPane}
                        onToggleTab={onToggleTab}
                        changeFormStyles={cls['change-form-styles']}
                        changeFormButtonStyles={cls['change-form-button']}
                        currentSettingTitleStyles={cls['current-setting-title']}
                    />
                </TabPane>
                <TabPane tab={telephoneChangeTabName} key='4' tabKey='4'>
                    <TelephoneChangeTab
                        TabPane={TabPane}
                        onToggleTab={onToggleTab}
                        changeFormStyles={cls['change-form-styles']}
                        changeFormButtonStyles={cls['change-form-button']}
                        currentSettingTitleStyles={cls['current-setting-title']}
                    />
                </TabPane>
            </Tabs>
        </SettingsUserPageLayout>
    );
};

export default SettingsUserPage;
