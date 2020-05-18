import React, { Component } from "react";

class WindSpeed extends Component {
  renderWindScaleName = (speed) => {
    if (speed <= 19) return "Słaby";
    if (speed <= 39) return "Umiark.";
    if (speed <= 79) return "Silny";
  };
  render() {
    return (
      <>
        <small>
          {this.renderWindScaleName(this.props.data)}
        </small>
        <p style={{ marginTop: '5px',marginBottom: 0 }}>{Math.round(this.props.data)} km/h</p>
      </>
    );
  }
}

export default WindSpeed;
