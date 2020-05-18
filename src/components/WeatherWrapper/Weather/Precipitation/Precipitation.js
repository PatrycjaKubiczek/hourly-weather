import React, { Component, PureComponent } from "react";
import { BarChart, Bar, LabelList, ResponsiveContainer, YAxis } from "recharts";
class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;
    if(value === 0) {
      return null;
    }
    return (
      <text
        x={x}
        y={y}
        dy={-5}
        dx={25}
        fill={stroke}
        fontSize={12}
        textAnchor="start"
      >
        {value} mm
      </text>
    );
  }
}

class Precipitation extends Component {
  render() {
    const { data } = this.props;
    return (
      <div style={{ height: "100%", width: "4900px" }}>
        <ResponsiveContainer>
        <BarChart
          width={4950}
          height={100}
          margin={{
            top: 25,
            bottom: 0,
            left: 0,
          }}
          data={data}
          barCategoryGap={0}
        >
          <Bar dataKey="precipIntensity" fill="#3d9fd0" barGap={0}>
            <LabelList
              dataKey="precipIntensity"
              position="top"
              content={<CustomizedLabel />}
            />
          </Bar>
          <YAxis type="number" domain={[0, "dataMax + 20"]} hide={true} />
        </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default Precipitation;
