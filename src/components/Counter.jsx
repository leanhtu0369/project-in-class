import React, { Component } from 'react'
import { MyGlobalContext } from "./../context/MyGlobalContext";

class Counter extends Component {
  constructor() {
    super()

    this.myStyleP = React.createRef()
  }

  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={ this.increment }>increment</button>

        <p ref={ this.myStyleP }>Count: { this.state.count }</p>

        <MyGlobalContext.Consumer>
          {
            data => (
              <p>{ data.name }</p>
            )
          }
        </MyGlobalContext.Consumer>

      </div>
    )
  }
}

// Counter.contextType = MyGlobalContext

export default Counter
