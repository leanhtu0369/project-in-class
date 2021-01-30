import React, { Component } from 'react'
import "./scss/index.scss";
import Counter from "./components/Counter";
import ReactDOM from "react-dom";

import { MyGlobalContext } from "./context/MyGlobalContext";

class App extends Component {
  constructor() {
    super()

    this.state = {
      gContext: {
        name: 'Nguyễn Văn A',
        age: 16
      },

      ok:0
    }

    this.myText = React.createRef()
    this.myCounter = React.createRef()
  }

  componentWillMount() {
    // console.log('before',this.myText);
    // console.log('before',this.myCounter);
  }

  componentDidMount() {
    // console.log('after',this.myText);
    console.log('after',this.myCounter);

    const node = ReactDOM.findDOMNode(this.myCounter.current)
    // console.log(node)
  }

  incrementInApp = () => {
    this.myCounter.current.setState({
      count: this.myCounter.current.state.count + 2
    })
  }

  render() {
    return (
      <>
        <MyGlobalContext.Provider value={ this.state.gContext} ok={ this.state.ok}>
          <h1 ref={ this.myText }></h1>
          {/* <Todo /> */}
          <Counter ref={ this.myCounter }/>

          <button onClick={ this.incrementInApp }>increment IN APP</button>
        </MyGlobalContext.Provider>
      </>
    )
  }
}

export default App
