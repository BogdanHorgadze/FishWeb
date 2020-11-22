import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ProductListContainer } from '../ProductListContainer/ProductListContainer'

export const Router = () => {
    return (
        <Switch>
            <Route exact path='/' />
            <Route exact path='/about' />
            <Route exact path='/contacts' />
            <Route exact path='/product-list/product/:productId' />
            <Route exact path='/product-list' component={ProductListContainer} />
        </Switch>
    )
} 