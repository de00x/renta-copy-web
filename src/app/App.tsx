import './styles/index.scss';
import Favicon from 'react-favicon';
import {useUpdateToken} from "shared/hooks";
import {YMaps} from '@pbe/react-yandex-maps';
import {useNavigate} from 'react-router-dom';
import {AppRouter} from 'app/providers/route';
import {createContext, useEffect, useState} from 'react';
import {ID_LOCALSTORAGE_KEY} from 'shared/constants/localstorage';

export const Context = createContext(null);

function App() {
    const [context, setContext] = useState(null);
    const user = localStorage.getItem(ID_LOCALSTORAGE_KEY);
    const navigate = useNavigate();

    // useEffect(() => {
    //     user && useUpdateToken(navigate);
    // }, []);
    localStorage.setItem('id_user', '87a74ed3-1aed-41ce-bd87-60e1799331e3')

    return (
        <div className="app">
            <Favicon url="logo3.ico"/>
            <YMaps
                version="2.1.79"
            >
                <Context.Provider value={{
                    context,
                    setContext,
                }}
                >
                    <AppRouter/>
                </Context.Provider>
            </YMaps>
        </div>
    );
}

export default App;
