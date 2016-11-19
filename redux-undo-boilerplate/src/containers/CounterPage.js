import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../Components/Counter'
import * from CounterActions from '../actions/counter'

function mapStateToProps (state) {
  return {
    count : state.counter.present.count
  }
}

function mapDispatchToprops(dispatch){
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToprops)(Counter)
