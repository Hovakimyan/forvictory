// @flow

import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Home from './home'

const Pages = (): React$Node => {
    return (
        <Switch>
            <Route component={Home} path="/" />
            <Redirect to="/" />
        </Switch>
    )
}

export default Pages
