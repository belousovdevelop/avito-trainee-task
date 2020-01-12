import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchAdverts } from "../store/actions/creators"
import {Link} from "react-router-dom"

class Adverts extends Component {
  state = {
    page: 1,
    sortBy: "createdAt",
    orderBy: "desc"
  }

  componentDidMount() {
    this.props.fetchAdverts(this.state.page, this.state.sortBy, this.state.orderBy)
  }
  render() {
	  return (
		  <div><Link to={`/adverts/5e1ae0777a43a3228777fd9b`}>
       dvdvdvs </Link>
			  {this.props.adverts.map(advert => advert.title)}
			  </div>
	  )
  }
}

const mapStateToProps = ({ adverts }) => {
  return { adverts }
}
const mapDispatchToProps = { fetchAdverts }

export default connect(mapStateToProps, mapDispatchToProps)(Adverts)
