import React, { Component, PropTypes } from 'react'

class Pomodoro extends Component {

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.props.actions.tick(Date.now()),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { activity, activityMinutes } = this.props
    return (
      <div>
        <h1>{activity} for {Math.floor(activityMinutes)} minutes</h1>
      </div>
    )
  }
}

Pomodoro.propTypes = {
  activity: PropTypes.string.isRequired,
  activityMinutes: PropTypes.number.isRequired
}

export default Pomodoro