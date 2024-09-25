import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const HorizontalBarChart = () => {
    const chartData = {
        series: [
          {
            name: 'Metrics',
            data: [600, 400, 300, 500, 700, 900, 800],
          },
        ],
        options: {
          chart: {
            type: 'bar',
            height: 150,
          },
          plotOptions: {
            bar: {
              horizontal: true,
              borderRadius: 3,
              barHeight: '8px', // Set the height of the bars to 5 pixels
              distributed: true,
              barPadding:'10px',
              // Adjust the padding between bars
              dataLabels: {
                position: 'bottom', // To keep the layout clean
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: false,
          },
          colors: [
            '#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FF8633', '#FF3385', '#A833FF',
          ],
          xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
            labels: {
              style: {
                colors: '#8e8da4',
                fontSize: '9px',
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            min: 0,
            max: 1000,
            labels: {
              style: {
                colors: '#8e8da4',
                fontSize: '9px',
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + ' Units';
              },
            },
          },
          legend: {
            show: false,
          },
          grid: {
            show: false,
            borderColor: '#e7e7e7',
            strokeDashArray: 0,
          },
        },
      };
      
      
      

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={250} />
      </div>
    </div>
  );
};

export default HorizontalBarChart;
