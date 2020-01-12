import React from "react"
import { Link } from "react-router-dom"
import Advert from "./Advert"

const styles = {
  cards: {
    display: "flex",
    maxWidth: "900",
    justifyContent: "center",
    flexWrap: "wrap"
  }
}

const AdvertsList = ({ adverts }) => (
  <>
    <div style={styles.cards}>
      {adverts.map(advert => (
        <Link to={`/adverts/${advert._id}`} key={advert._id}>
          <Advert {...advert} />
        </Link>
      ))}
    </div>
  </>
)

export default AdvertsList
