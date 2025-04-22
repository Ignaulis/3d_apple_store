import { createContext, useEffect, useState } from "react";
import Home from "../Pages/Home";

export const RouterContext = createContext();

export default function Router({ children }) {
    const routes = {
        '': {
            page: <Home />,
            params: 0
        },
    };

    const getCurrentPage = () => {
        const hash = window.location.hash.replace('#', '');
        const segments = hash.split('/');
        return segments[0] || '';
    };

    const [page, setPage] = useState(getCurrentPage);

    useEffect(() => {
        const onHashChange = () => {
            setPage(getCurrentPage());
        };

        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    return (
        <RouterContext.Provider value={{ page, routes }}>
            {children}
        </RouterContext.Provider>
    );
}
