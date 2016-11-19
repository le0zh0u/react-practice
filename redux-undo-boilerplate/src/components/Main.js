import React, {Component, PropTypes} from 'react'

export default class Main extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render () {
    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
