import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchAdverts } from "../store/actions/creators"
import { Radio, Pagination, Typography, Button } from "antd"
import Goods from "../components/AdvertsList"
import { Link } from "react-router-dom"
import Spinner from "../components/Spinner"
const { Paragraph } = Typography

class Ads extends Component {
  state = {
    page: 1,
    sortBy: "createdAt",
    orderBy: "desc"
  }
  componentDidMount() {
    this.props.fetchAdverts(this.state.page, this.state.sortBy, this.state.orderBy)
  }
  handlePageChange = page => {
    this.setState({ page }, () => this.props.fetchAdverts(this.state.page, this.state.sortBy, this.state.orderBy))
  }
  handleSortChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () =>
      this.props.fetchAdverts(this.state.page, this.state.sortBy, this.state.orderBy)
    )
  }
  render() {
    if (this.props.error) return <p>Что-то пошло не так</p>
    return (
      <>
        <Link style={styles.link} to="/new">
          <Button>Новое объявление</Button>
        </Link>
        <div style={styles.container}>
          <div style={styles.filters}>
            <div style={{ marginBottom: 10 }}>
              <Paragraph strong style={styles.paragraph}>
                Сортировка
              </Paragraph>
              <Radio.Group onChange={this.handleSortChange} value={this.state.sortBy} name="sortBy">
                <Radio.Button value="price">Цена</Radio.Button>
                <Radio.Button value="createdAt">Дата создания</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <Paragraph strong style={styles.paragraph}>
                Направление
              </Paragraph>
              <Radio.Group onChange={this.handleSortChange} value={this.state.orderBy} name="orderBy">
                <Radio.Button value="asc">Возрастание</Radio.Button>
                <Radio.Button value="desc">Убывание</Radio.Button>
              </Radio.Group>
            </div>
          </div>
          {this.props.loading ? <Spinner /> : <Goods adverts={this.props.adverts} />}
        </div>
        <Pagination
          style={styles.center}
          pageSize={6}
          current={this.state.page}
          total={this.props.results}
          onChange={this.handlePageChange}
        />
      </>
    )
  }
}

const mapStateToProps = ({ adverts, results, loading, error, init }) => {
  return { adverts, results, loading, error, init }
}
const mapDispatchToProps = { fetchAdverts }

export default connect(mapStateToProps, mapDispatchToProps)(Ads)

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    minWidth: 1025
  },
  paragraph: {
    margin: 0
  },
  filters: {
    minWidth: 212
  },
  link: {
    alignSelf: "flex-end",
    marginBottom: 20
  },
  center: {
    margin: "0 auto"
  }
}
