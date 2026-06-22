import React, { Component } from "react";

export default class Sticker extends Component {
  render() {
    const {selectedSticker} = this.props;

    return (
      <div className="mx-auto bg-blue-200 border border-blue-300 rounded-4xl space-y-2 px-2 py-1">
        <img src={selectedSticker.img} alt={selectedSticker.label} />
        <h3 className="text-center">{selectedSticker.label}</h3>
      </div>
    );
  }
}
