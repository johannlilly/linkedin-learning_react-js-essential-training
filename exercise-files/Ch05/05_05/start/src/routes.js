import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/ui/Home'
import  { Whoops404  } from './components'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="*" component={Whoops404} />
    </Router>
)

export default routes