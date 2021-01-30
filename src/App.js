// import React from 'react'
import "./scss/index.scss";

import Counter from "./components/hooks/Counter";
import { useState } from "react";

const App = () => {

  return (
    <>
      <h1>Học react hooks</h1>
      <Counter></Counter>
      <Counter increment ={2} color="green"></Counter>
      <Counter increment ={10}></Counter>
    </>
  )
}

export default App
