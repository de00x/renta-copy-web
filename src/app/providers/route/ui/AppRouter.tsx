import {Header} from 'widgets/Header'
import {Sidebar} from "widgets/Sidebar";
import {AppRouterLayout} from "widgets/Layouts";
import {AppRouterMain} from "app/providers/route/ui/AppRouterMain";

export const AppRouter = () => {
    return (
        <AppRouterLayout>
            <Header/>
            <Sidebar/>
            <AppRouterMain/>
        </AppRouterLayout>
    )
}