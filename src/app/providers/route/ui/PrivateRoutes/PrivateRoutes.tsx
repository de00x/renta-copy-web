import {FC, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfigPrivate} from "shared/config/route";

export const PrivateRoutes: FC = () => {
    return (
        <Routes>
            {Object.values(routeConfigPrivate).map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>}
                />
            ))}
        </Routes>
    )
}