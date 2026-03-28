// Write your code here

import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  state = {min: 0, sec: 0}

  intervalId = null

  onStart = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => {
        if (prevState.min === 59 && prevState.sec === 59) {
          clearInterval(this.intervalId)
        } else if (prevState.sec === 59) {
          return {
            min: prevState.min + 1,
            sec: 0,
          }
        }
        return {
          sec: prevState.sec + 1,
        }
      })
    }, 1000)
  }

  onStop = () => {
    clearInterval(this.intervalId)
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({min: 0, sec: 0})
  }

  render() {
    const {min, sec} = this.state

    const formatedMin = min < 10 ? `0${min}` : min
    const formatedSec = sec < 10 ? `0${sec}` : sec

    return (
      <div className="main-container">
        <h1>Stopwatch</h1>
        <div className="card">
          <div className="card-heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h2>
            {formatedMin}:{formatedSec}
          </h2>
          <div className="button-container">
            <button
              type="button"
              className="btn start-btn"
              onClick={this.onStart}
            >
              Start
            </button>
            <button
              type="button"
              className="btn stop-btn"
              onClick={this.onStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn reset-btn"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
