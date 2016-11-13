import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

import Clock from 'Clock'
import CountdownForm from 'CountdownForm'
import Controls from 'Controls'

class Countdown  extends Component {

  constructor(props){
    super(props)
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer()
          break
        case 'stopped':
          this.setState({count: 0})
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined
          break
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1
      this.setState({
        count: newCount >= 0 ? newCount : 0
      })

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'})
      }
    }, 1000)
  }

  handleStatusChange(newStatus) {
    this.setState({countdownStatus: newStatus})
  }

  handleSetCountdown(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    })
  }

  render(){
    let { count, countdownStatus } = this.state

    let renderControlArea
      if (countdownStatus !== 'stopped') {
        renderControlArea = <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange.bind(this)}/>
      } else {
        renderControlArea = <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)}/>
      }


    return(
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count} />
        {renderControlArea}
      </div>
    )
  }
}

export default Countdown
