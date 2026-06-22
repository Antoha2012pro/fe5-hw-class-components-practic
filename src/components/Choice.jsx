import React, { Component } from 'react'

export default class Choice extends Component {
  render() {
    const {selectedSticker} = this.props;
    return (
      <h1 className='font-black text-2xl mt-10'>
        Ви вибрали: {this.props.selectedSticker.label}
      </h1>
    )
  }
}
