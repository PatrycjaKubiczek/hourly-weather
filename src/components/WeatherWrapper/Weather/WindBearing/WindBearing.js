import React, { Component } from "react";

import "./WindBearing.scss"

class WindBearing extends Component {
  degToDirection = (num) => {
    let value = Math.round(num / 45);
    let nameDirections = [
      "Północny",
      "Pn.-Zach.",
      "Zachodni",
      "Pd.-Zach.",
      "Południowy",
      "Pd.-Wsch.",
      "Wschodni",
      "Pn.-Wsch.",
    ];
    return nameDirections[value % 8];
  };

  render() {
    const { data } = this.props;
    return (
      <>
        <div
          style={{
            transform: `rotate(${data}deg)`,
          }}
          className="wind__wrapper"
        >
          <svg className="wind__svg">
              <svg viewBox="0 0 16 16">
                <polygon points="8,0.409 2.35,15.486 8,12.396 13.65,15.486 "></polygon>
              </svg>
          </svg>
        </div>

        <small>{this.degToDirection(data)}</small>
      </>
    );
  }
}
export default WindBearing;
