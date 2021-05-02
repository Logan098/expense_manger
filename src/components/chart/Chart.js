import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
