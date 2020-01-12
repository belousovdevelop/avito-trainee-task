import React from "react"
import { Link } from "react-router-dom"

const Header = () => (
  <div style={styles.header}>
    <Link style={styles.header.link} to="/adverts">
      <img
        src="https://www.avito.ru/files/avito/company/logos/Logo-AvitoREALESTATE.png?_ga=2.25330109.1865149675.1578327699-1408778998.1533902241&_gac=1.12264320.1578405868.EAIaIQobChMI1PGr_9Px5gIVR7YYCh3ebASIEAAYASAAEgK7wfD_BwE"
        alt="avito"
        style={styles.header.img}
      />
    </Link>
  </div>
)

export default Header

const styles = {
  header: {
    display: "flex",
    justifyContent: "center",
    link: {
      marginTop: 20
    },
    img: {
      width: 300
    }
  }
}
