import React, { Component } from "react";
import stickers from "../stickers.json";

export default class StickerList extends Component {
  render() {
    const { handleSticker } = this.props;
    console.log(stickers);
    return (
      <ul className="w-full max-w-93 flex flex-wrap gap-3 justify-center">
        {stickers.map((sticker, index) => (
          <li
            key={index}
            onClick={() => handleSticker(sticker)}
            className="w-[30%] flex-grow transition-all hover:opacity-80 hover:cursor-pointer border border-blue-400 bg-blue-200 rounded-xl p-2 flex flex-col items-center justify-center space-y-2"
          >
            <img className="w-16 h-16 object-contain" src={sticker.img} alt={sticker.label} />
            <h3 className="font-mono text-xs text-center">{sticker.label}</h3>
          </li>
        ))}
      </ul>
    );
  }
}
