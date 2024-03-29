import React, { Component } from 'react'
import UpdatingLifecycleB from './UpdatingLifecycleB'

class UpdatingLifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Aneeba'
      }

      console.log('Lifecycle constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('lifecycleA getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'codevolution'
        })
    }

  render() {
    console.log('lifecycleA render')
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <UpdatingLifecycleB />
      </div>
    )
  }
}

export default UpdatingLifecycleA