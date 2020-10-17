import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path='/'/>
            <Route path='/about'/>
            <Route path='/contacts'/>
        </BrowserRouter>
    )
} 