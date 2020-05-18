import React, { Component, PureComponent } from "react";
import { LineChart, Line, LabelList, ResponsiveContainer } from "recharts";

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text
        x={x}
        y={y}
        dy={-10}
        fill={stroke}
        fontSize={14}
        textAnchor="middle"
      >
        {value} hPa
      </text>
    );
  }
}
class Pressure extends Component {
  render() {
    const { data } = this.props;
    return (
            <div style={{ height: "100%", width: "4900px" }}>
        <ResponsiveContainer height={100}>
      <LineChart
        width={4900}
        height={100}
        data={data}
        margin={{
          top: 55,
          right: 40,
          left: 40,
          bottom: 5,
        }}
      >
        <Line
          type="monotone"
          dataKey="pressure"
          stroke="#000"
          dot={{ stroke: "black", strokeWidth: 1 }}
        >
          <LabelList
            dataKey="pressure"
            position="top"
            content={<CustomizedLabel />}
          />
        </Line>
      </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
export default Pressure;
