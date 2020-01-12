import React from "react"
import { Card, Typography } from "antd"
import moment from "moment"
import "moment/locale/ru"

const { Paragraph } = Typography

const Advert = ({ title, images, address, price, createdAt }) => {
  const date = moment(createdAt).format("D MMMM HH:mm")
  return (
    <Card
      bodyStyle={styles.card.body}
      style={styles.card}
      cover={<img alt="example" src={images} style={styles.card.img} />}
    >
      <Paragraph strong style={styles.paragraph}>
        {title}
      </Paragraph>
      <Paragraph style={styles.paragraph}>{`${price} рублей`}</Paragraph>
      <Paragraph style={styles.paragraph} type="secondary">
        {address}
      </Paragraph>
      <Paragraph type="secondary">{date}</Paragraph>
    </Card>
  )
}
export default Advert

const styles = {
  card: {
    maxWidth: 240,
    border: "none",
    cursor: "pointer",
    marginLeft: 17,
    body: {
      padding: 0,
      paddingTop: 5
    },
    img: {
      height: 180
    }
  },
  paragraph: {
    margin: 0
  }
}
