import React, { Component } from 'react';

class WindSpeed extends Component{

    renderWindScaleName = (speed) => {

    let value = speed;
    if(speed <= 19) {
        return "słaby"
    }
    if(speed <= 39)
         return "umiarkowany";
    if (speed <= 79)
        return "silny"
    };
    render(){

        return (
          <>
            <p style={{margin: 0}}>{this.renderWindScaleName(this.props.data)}</p>
            <p style={{margin: 0}}>{Math.round(this.props.data)} km/h</p>
          </>
        );
    }
}

export default WindSpeed;