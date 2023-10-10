import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import {ConfigProvider} from 'antd';
import ru_RU from 'antd/es/locale/ru_RU';
import App from './app/App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <BrowserRouter>
        <ConfigProvider locale={ru_RU}>
            <App/>
        </ConfigProvider>
    </BrowserRouter>
);
