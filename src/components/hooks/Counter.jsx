import React, { useState } from "react"
import PropTypes from "prop-types";

const Counter = ({ increment, color }) => {
  const [count, setCount] = useState(0)

  // const color = props.color || 'green'

  return (
    <>
      <button 
        onClick={() => setCount(count * increment)}
        style={{ backgroundColor: color }}
      >
        Increment
      </button>

      <p>Count: {count}</p>

      <hr/>
    </>
  )
}

Counter.propTypes = {
  increment: PropTypes.number.isRequired,
  color: PropTypes.string
}

Counter.defaultProps = {
  color: 'yellow'
}

export default Counter
