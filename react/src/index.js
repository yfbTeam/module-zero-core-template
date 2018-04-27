import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Routes from './routes'
ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <Routes />
    </LocaleProvider>
    , document.getElementById('root'));

