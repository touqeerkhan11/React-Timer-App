import React, { Component } from 'react'

class Controls extends Component {
  constructor(props){
    super(props)
  }

  onStatusChange (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus)
    }
  }

  render() {
    let {countdownStatus} = this.props
    let renderStartStopButton

    if (countdownStatus === 'started') {
      renderStartStopButton = <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
    } else {
      renderStartStopButton = <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
    }

    return (
      <div className="controls">
        {renderStartStopButton}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
}

export default Controls

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
}
