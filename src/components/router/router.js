import React from 'react'
import {Route, Switch} from 'react-router-dom'

export const Router = () => {
    return (
        <Switch>
            <Route path='/'/>
            <Route path='/about'/>
            <Route path='/contacts'/>
        </Switch>
    )
} 