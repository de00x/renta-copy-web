import {FC} from "react";
import {useAuthCheck} from "shared/hooks";
import {PublicRoutes} from "app/providers/route/ui/PublicRoutes";
import {PrivateRoutes} from "app/providers/route/ui/PrivateRoutes";

const isAuthUser = useAuthCheck()

export const AppRouterMain: FC = () => {
    return (
        <>
            {isAuthUser && <PrivateRoutes/>}
            {!isAuthUser && <PublicRoutes/>}
        </>
    )
}