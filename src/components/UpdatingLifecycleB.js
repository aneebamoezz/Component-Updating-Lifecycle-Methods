import React, { Component } from 'react'

class UpdatingLifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Aneeba'
      }

      console.log('Lifecycle constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('lifecycleB getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }

  render() {
    console.log('lifecycleB render')
    return (
       
      <div>
        LifecycleB
      </div>
    )
  }
}

export default UpdatingLifecycleB