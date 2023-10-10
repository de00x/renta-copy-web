import {FC} from "react";
import {NotFoundPageLayout} from "widgets/Layouts";
import {NotFoundMainContent} from "pages/NotFoundPage/NotFoundMainContent/NotFoundMainContent";

export const NotFoundPage: FC = () => {

    return (
        <NotFoundPageLayout>
            <NotFoundMainContent/>
        </NotFoundPageLayout>
    )
}

