import React, { Component } from 'react'

export class Child extends Component {
  render() {
    return (
      <div>
        <>
          <h1>{this.props.kite}</h1>
        </>
      </div>
    )
  }
}

export default Child
