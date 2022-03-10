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
        fontSize={20}
        textAnchor="middle"
      >
        {value}°
      </text>
    );
  }
}

class Temperature extends Component {
  render() {
    const { data } = this.props;
    return (
      <div style={{ height: "100%", width: "4800px" }}>
        <ResponsiveContainer height={100}>
          <LineChart
            data={data}
            margin={{
              top: 40,
              bottom: 5,
              left: 40,
              right: 40,
            }}
            // width={500}
          >
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#f9d348"
              dot={{ stroke: "black", strokeWidth: 1 }}
            >
              <LabelList
                dataKey="temp"
                position="top"
                content={<CustomizedLabel />}
              />
            </Line>
            {/* <XAxis width={5000}/> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default Temperature;
