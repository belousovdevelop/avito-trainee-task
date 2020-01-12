import React from "react"
import "antd/dist/antd.css"
import { Form, Input, InputNumber, Button } from "antd"

class NewAdvertFrom extends React.Component {
  render() {
    return (
      <div style={styles}>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Item label="Заголовок">
            <Input
              name="title"
              value={this.props.title}
              onChange={this.props.handleInputChange}
              placeholder="input placeholder"
            />
          </Form.Item>
          <Form.Item label="Описание">
            <Input
              name="description"
              value={this.props.description}
              onChange={this.props.handleInputChange}
              placeholder="input placeholder"
            />
          </Form.Item>
          <Form.Item label="Адрес">
            <Input
              name="address"
              value={this.props.address}
              onChange={this.props.handleInputChange}
              placeholder="input placeholder"
            />
          </Form.Item>
          <Form.Item label="Ссылка на фотографию">
            <Input
              name="images"
              value={this.props.images}
              onChange={this.props.handleInputChange}
              placeholder="input placeholder"
            />
          </Form.Item>
          <Form.Item label="Цена">
            <InputNumber
              name="price"
              value={this.props.price}
              onChange={this.props.handleInputNumberChange}
              placeholder="input placeholder"
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Разместить</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default NewAdvertFrom

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  height: "100vh",
  minWidth: 450,
  margin: "0 auto"
}
