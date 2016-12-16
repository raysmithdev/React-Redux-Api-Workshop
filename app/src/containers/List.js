import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListView from '../components/ListView'
import { fetchDataFromApi } from '../actions'

class List extends Component {
  componentWillMount() {
    this.props.getData()
  }

  render() {
    return (
      <ListView {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(fetchDataFromApi())
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
