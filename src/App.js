import React, { Component } from 'react'
import "./scss/index.scss";
import MusicsList from "./components/MusicsList";

class App extends Component {
  // count = 0

  constructor() {
    super()

    this.state = {
      count: 0
    }

    // get this in increment = this in increment + this in class parent
    // this.increment = this.increment.bind(this)
  }

  // increment() {
  //   // this.state.count += 1
  //   console.log(this)
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  //   // console.log(this.state.count)
  // }

  increment = () => {
    // this.state.count += 1
    // console.log(this)
    this.setState({
      count: this.state.count + 1
    })
    // console.log(this.state.count)
  }

  render() {
    // setTimeout(() => {
    //   this.count = 20
    // }, 2000);

    // this.state.count = 2

    return (
      <div>
        <h1>react app vs class</h1>
        <h2>Count: { this.state.count }</h2>

        <button onClick={ this.increment }>Increment</button>

        {/* <button onClick={ () => this.increment(1) }>Increment</button>
        <button onClick={ () => this.increment(2) }>Increment</button> */}

        <MusicsList />
      </div>
    )
  }
}

export default App
