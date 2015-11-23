import React, { Component, PropTypes } from 'react'

class Pomodoro extends Component {

  render() {
    const { num, activity } = this.props
    return (
      <div>
        <h2>Number #{num}</h2>
        <p>Activity: <strong>{activity}</strong></p>
      </div>
    )
  }
}

Pomodoro.propTypes = {
  num: PropTypes.number.isRequired,
  activity: PropTypes.string.isRequired,
}

export default Pomodoro