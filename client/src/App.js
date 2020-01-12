import React from "react"
import { Route, Redirect } from "react-router-dom"
import Adverts from "./containers/Adverts"
import Details from "./containers/Details"
import NewAdvert from "./containers/NewAdvert"
import Header from "./components/Header"

const App = () => (
  <>
    <Header />
    <div style={styles}>
      <Redirect to="/adverts" />
      <Route exact path="/adverts" component={Adverts} />
      <Route exact path="/new" component={NewAdvert} />
      <Route path="/adverts/:id" component={Details} />
    </div>
  </>
)

export default App

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "0 auto",
  maxWidth: 1000
}
