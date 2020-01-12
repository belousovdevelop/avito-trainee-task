import React from "react"
import { Spin } from "antd"

const Spinner = () => (
  <div style={styles}>
    <Spin size="large" />
  </div>
)

export default Spinner

const styles = {
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  height: "100vh",
  justifyContent: "center",
  margin: "0 auto"
}
