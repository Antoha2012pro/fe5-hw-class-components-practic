import React, { Component } from "react";
import "./App.css";
import Sticker from "./components/Sticker";
import StickerList from "./components/StickerList";
import Choice from "./components/Choice";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStickerHidden: true,
      selectedSticker: {},
    };
  }

  handleSticker = (sticker) => {
    if (this.state.isStickerHidden) this.setState({ isStickerHidden: false });
    this.setState({ selectedSticker: sticker });
  };

  render() {
    const { isStickerHidden, selectedSticker } = this.state;

    return (
      <div className="flex flex-col justify-between gap-10 w-full px-3 mx-auto md:max-w-[768px]">
        <div className="flex flex-wrap justify-between gap">
          <StickerList handleSticker={this.handleSticker} />
          <Choice selectedSticker={selectedSticker} />
        </div>
        {isStickerHidden ? "" : <Sticker selectedSticker={selectedSticker} />}
      </div>
    );
  }
}
