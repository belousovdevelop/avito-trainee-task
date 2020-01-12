import React from "react"
import ReactDOM from "react-dom"
import "./index.less"
import App from "./App"
import store from "./store"
import { fetchAdverts, fetchAdById, addAdvert } from "./store/actions/creators"

ReactDOM.render(<App />, document.getElementById("root"));

store.dispatch(fetchAdById("5e19d436c20a3c43ba88d698"))

const testData = {
    title: "bla",
    description: "blabla",
    address: "blablalbla",
    price: 10000
}
store.dispatch(addAdvert(testData))

store.dispatch(fetchAdverts(1, "createdAt", "desc"))
