import { connect } from "react-redux"
import { addAdvert } from "../store/actions/creators"
import Form from "../components/NewAdvertForm"
import React, { Component } from "react"

class NewAdvert extends Component {
  state = {
    title: "",
    description: "",
    address: "",
    images: "",
    price: null
  }
  handleSubmit = event => {
    event.preventDefault()
    const newAdvert = {
      title: this.state.title,
      description: this.state.description,
      address: this.state.address,
      price: this.state.price,
      images: this.state.images
    }
    this.props.addAdvert(newAdvert, () => this.props.history.push("/adverts"))
  }
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <Form
        {...this.state}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleInputNumberChange={value => this.setState({ price: value })}
      />
    )
  }
}

export default connect(null, { addAdvert })(NewAdvert)
