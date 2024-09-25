import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import LineChartBottom from './LineChartBottom';

const ApexChartTwo = () => {
  // Use the useState hook to manage the series and options
  const [series, setSeries] = useState([44, 55, 41, 17, 15, 20]);
  const [options, setOptions] = useState({
    chart: {
      type: 'donut',
    },
    labels: ['Petcare Sector', 'Entertainment Sector', 'Event Sector', 'Healthcare Sector', 'Construction Sector','Home Services Sector'], // Custom text for each section
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
  });

  return (
    <>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="donut" />
      </div>
      <div id="html-dist"></div> 
      <LineChartBottom />
    </>
  );
}

export default ApexChartTwo;



