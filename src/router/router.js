import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import DisplayCard from '../components/displayCard';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/gallery" component={DisplayCard} />
  </Switch>

)