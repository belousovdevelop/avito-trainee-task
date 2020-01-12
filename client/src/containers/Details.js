import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchAdById } from "../store/actions/creators"
import { Carousel, Typography } from "antd"
import Spinner from "../components/Spinner"
import "./carousel.less"

const { Paragraph } = Typography

class Details extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchAdById(id)
  }

  render() {
    return (
      <div style={styles}>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div>
            {this.props.advert.map(n => (
              <div key={n._id} style={{ display: "flex" }}>
                <Carousel className="car">
                  {n.images.map(src => (
                    <img src={src} alt={n._id} />
                  ))}
                </Carousel>
                <div style={styles.content}>
                  <h3>{n.title}</h3>
                  <Paragraph>{n.description}</Paragraph>
                  <Paragraph strong>{`${n.price} рублей`}</Paragraph>
                  <Paragraph>{n.sellerName}</Paragraph>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ advert, loading }) => {
  return { advert, loading }
}

const mapDispatchToProps = { fetchAdById }

export default connect(mapStateToProps, mapDispatchToProps)(Details)

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
  content: {
    marginLeft: 50
  }
}
