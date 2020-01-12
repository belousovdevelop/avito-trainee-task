import React from "react"
import { Route, Redirect } from "react-router-dom"
import Adverts from "./containers/Adverts"
import Details from "./containers/Details"
import NewAdvert from "./containers/NewAdvert"
import "./app.less"

const App = () => (
  <div className="app">  
	<Redirect to="/adverts" />
    <Route exact path="/adverts" component={ Adverts } />
    <Route exact path="/new" component={ NewAdvert } />
    <Route path="/adverts/:id" component={ Details } />
  </div>
)

export default App
