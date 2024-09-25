import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


const ApexChartOne = () => {

    const [series, setSeries] = useState([76, 67, 61]);
  const [options, setOptions] = useState({
    chart: {
      height: 390,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 50,
          size: '50%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          offsetX: -18,
          fontSize: '12px',
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
        },
      },
    },
    colors: ['#039f00', '#eb8c00', '#add633'],
    labels: ['Performance Metrics', 'Feedback summary ', 'Rating Trends'],
    stroke: {
        lineCap: 'round', // Gives the bars rounded edges
    },
    fill: {
        type: 'gradient', // Enable gradient
        gradient: {
            // shade: 'dark',
            // type: 'horizontal', // Gradient applies horizontally
            background: ['#FEB019', '#775DD0', '#FF4560', "pink"], // Each bar gets a gradient from one color to the next
            // stops: [],
        },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false,
        },
      },
    }],
  });
  return (
    <>
      
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radialBar" height={390} />
      </div>
      <div id="html-dist"></div>

      <div className='d-flex flex-column'>
      <div className='mb-3 d-flex w-100 justify-content-between align-items-center'>
          <div>
          <div class="d-flex align-items-center">
            <div style={{'height': '10px', 'marginRight': '10px', 'width': '10px', 'borderRadius': '10px', 'background': 'rgb(255, 230, 3)'}}>
            </div>
            <span>New services added</span>
            </div>
          </div>
          <b>123456</b>
        </div>
        <div className='mb-3 d-flex w-100 justify-content-between align-items-center nnnn'>
          <div>
          <div class="d-flex align-items-center ">
            <div style={{'height': '10px', 'marginRight': '10px', 'width': '10px', 'borderRadius': '10px', 'background': 'rgb(255, 230, 3)'}}>
            </div>
            <span>New services added</span>
            </div>
          </div>
          <b>123456</b>
        </div>
        <div className='mb-3 d-flex w-100 justify-content-between align-items-center'>
          <div>
          <div class="d-flex align-items-center">
            <div style={{'height': '10px', 'marginRight': '10px', 'width': '10px', 'borderRadius': '10px', 'background': 'rgb(255, 230, 3)'}}>
            </div>
            <span>New services added</span>
            </div>
          </div>
          <b>123456</b>
        </div>
      </div>
    </>
  )
}

export default ApexChartOne




