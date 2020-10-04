import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Pages from './pages'
import './i18n';

ReactDOM.render(
    <HashRouter basename="/">
        <Pages />
    </HashRouter>,
    document.getElementById('root')
)
