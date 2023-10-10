import {FC, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/route";

export const PublicRoutes: FC = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>}
                />
            ))}
        </Routes>
    )
}