import {UserReviews} from "./UserReviews/UserReviews";
import {ProfilePhoto} from "./ProfilePhoto/ProfilePhoto";
import {UserInformation} from "./UserInformation/UserInformation";
import {ProfilePageLayout, DisplayFlexLayout} from "widgets/Layouts";

const ProfilePage = () => {
    return (
        <ProfilePageLayout>
            <DisplayFlexLayout>
                <ProfilePhoto/>
                <UserInformation/>
            </DisplayFlexLayout>
            <UserReviews/>
        </ProfilePageLayout>
    );
};

export default ProfilePage;
