import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Home from './home'
import ResetCss from './reset-css'
import Languages from './languages'

const Pages = () => {
    return (
        <div>
            <ResetCss />
            <Languages />
            <Switch>
                <Route component={Home} path="/" />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Pages
