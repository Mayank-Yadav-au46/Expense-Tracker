import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    // console.log(props.dataPoints);
    const dataPointValues = props.dataPoints.map((dataPoint)=>dataPoint.value);
    // console.log(dataPointValues);
    const totalMax = Math.max(...dataPointValues);
    // console.log(totalMax);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
