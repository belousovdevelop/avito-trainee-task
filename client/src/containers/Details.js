import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchAdById } from "../store/actions/creators"

class Details extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchAdById(id)
  }

  render() {
    return (
      <div>
        {this.props.advert.map(n => (
          <div key={n._id}>
            {n.images.map(src => (
              <img src={src} alt={n._id} />
            ))}
            <div>
              <h2>{n.title}</h2>
              <h2>{n.price}</h2>
              <h2>{n.description}</h2>
              <h2>{n.sellerName}</h2>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ advert }) => {
  return { advert }
}

const mapDispatchToProps = { fetchAdById }

export default connect(mapStateToProps, mapDispatchToProps)(Details)
