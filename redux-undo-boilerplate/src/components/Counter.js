import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {

  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    undo: PropTypes.func.isRequired,
    redo: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  }

  render() {
    const {increment, decrement, undo, redo, count } = this.props
    return (
      <p>
        Clicked: {count} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={undo}>Undo</button>
        {' '}
        <button onClick={redo}>Redo</button>
      </p>
    )
  }
}
