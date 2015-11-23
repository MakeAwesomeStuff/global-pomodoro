import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Pomodoro from '../components/Pomodoro'
import * as PomodorosActions from '../actions/pomodoros'

class App extends Component {
  render() {
    const { actions, pomodoro } = this.props
    return (
      <div>
        <h1>Global Pomodoros</h1>
        <Pomodoro
          actions={actions}
          num={pomodoro.num}
          activity={pomodoro.activity}/>
      </div>
    )
  }
}

App.propTypes = {
  pomodoro: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    pomodoro: state.pomodoro
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PomodorosActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
