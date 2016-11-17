import React, {Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    //从自检的props属性中导入四个方法和一个变量
    const {increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    //渲染组件，包括一个数字和四个按钮
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    )
  }
  };

  //限制组件的props安全
  Counter.propTypes = {
    //increment 必须为function，且必须存在
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    //Counter必须为数字，且必须存在
    counter: PropTypes.number.isRequired
  };

  export default Counter;
