import {bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'

//将state.counter 绑定到props的counter
//将state的counter值绑定到props上
function mapStateToProps(state) {
  return {
    counter:state.counter
  }
}

//将action的所有方法绑定到props上
//把四个action创建的函数绑定到props上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
/**
 * 第一个参数，必须是function，作用是绑定state的指定值到props上面，智力绑定counter
 * 第二个参数，可以是function，也可以是对象，作用是绑定action创建函数到props上
 * 返回值，是绑定后的组件
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
/**
 * 第二个参数绑定一个对象
 */
// export default connect(mapStateToProps, CounterActions)(Counter)
