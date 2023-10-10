import {FC} from "react";
import {Text} from "shared/ui/Text";
import cls from './UserInformation.module.scss'
import {usersDataMock} from "pages/ProfilePage/model/constants/profile-page.constants";

export const UserInformation: FC = () => {
    return (
        <div className={cls['user-information-wrapper']}>
            {usersDataMock.map((item, i) => (
                <div
                    key={i}
                    className={cls['user-info-container']}
                >
                    <Text>{item.firstText}:</Text>
                    <Text>{item.secondText}</Text>
                </div>
            ))}
        </div>
    )
}