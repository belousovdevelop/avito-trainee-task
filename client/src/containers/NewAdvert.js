import { connect } from "react-redux"
import { addAdvert } from "../store/actions/creators"
import React, { Component } from "react"

class NewAdvert extends Component {
  render() {
    return "newAdvert"
  }
}

export default connect(null, { addAdvert })(NewAdvert)
