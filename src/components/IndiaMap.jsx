import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsMap from 'highcharts/modules/map';

// Initialize the Highcharts map module
HighchartsMap(Highcharts);

const IndiaMap = () => {
  useEffect(() => {
    const fetchTopologyAndRenderMap = async () => {
      const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/in/in-all.topo.json'
      ).then(response => response.json());

      // Prepare demo data
      const data = [
        { key: 'in-ap', value: 15 },    // Andhra Pradesh
        { key: 'in-ar', value: 8 },     // Arunachal Pradesh
        { key: 'in-as', value: 20 },    // Assam
        { key: 'in-br', value: 22 },    // Bihar
        { key: 'in-ch', value: 18 },    // Chandigarh
        { key: 'in-ct', value: 19 },    // Chhattisgarh
        { key: 'in-dl', value: 25 },    // Delhi
        { key: 'in-dn', value: 10 },    // Dadra and Nagar Haveli and Daman and Diu
        { key: 'in-la', value: 12 },     // Lakshadweep
        { key: 'in-mh', value: 3 },    // Maharashtra
        { key: 'in-mp', value: 28 },    // Madhya Pradesh
        { key: 'in-mn', value: 12 },    // Manipur
        { key: 'in-mz', value: 14 },    // Mizoram
        { key: 'in-nl', value: 24 },    // Nagaland
        { key: 'in-or', value: 30 },    // Odisha
        { key: 'in-pb', value: 58 },    // Punjab
        { key: 'in-hr', value: 55 },    // Haryana
        { key: 'in-tn', value: 33 },    // Tamil Nadu
        { key: 'in-tr', value: 16 },    // Tripura
        { key: 'in-up', value: 35 },    // Uttar Pradesh
        { key: 'in-ut', value: 12 },    // Uttarakhand
        { key: 'in-jh', value: 20 },    // Jharkhand
        { key: 'in-ld', value: 25 },    // Ladakh
        { key: 'in-py', value: 10 },    // Puducherry
        { key: 'in-hp', value: 15 },    // Himachal Pradesh
        { key: 'in-wb', value: 55 },    // West Bengal
        { key: 'in-sk', value: 5 },     // Sikkim
        { key: 'in-jk', value: 28 },    // Jammu and Kashmir
        { key: 'in-ml', value: 12 },    // Meghalaya
        
        { key: 'in-ka', value: 29 },    // Tamil Nadu
        { key: 'in-ka', value: 29 },    // Tamil Nadu
        { key: 'in-rj', value: 7 },    // Tamil Nadu
        { key: 'in-kl', value: 9 },    // Tamil Nadu
        { key: 'in-ga', value: 15 },    // Tamil Nadu
        { key: 'in-2984', value: 38 },    // Tamil Nadu

];
    
    
      // Function to determine color based on value
      const getColor = (value) => {
        if (value < 10) return '#FF847C'; // Red
        if (value < 20) return '#165DC9'; // Yellow
        if (value < 30) return '#48CFAF'; // Green
        if (value < 40) return '#FFB5B1'; // Green
        if (value < 50) return '#722391'; // Green
        return '#FFDC7E'; // Blue
      };

      // Create the chart
      Highcharts.mapChart('container', {
        chart: {
          map: topology,
        },

        title: {
          text: 'Dynamic Color Map of India',
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom',
          },
        },

        series: [{
          data: data.map(item => ({
            'hc-key': item.key,
            value: item.value,
            color: getColor(item.value), // Assign color based on value
          })),
          name: 'State Data',
          states: {
            hover: {
              color: '#252762',
            },
          },
          dataLabels: {
            enabled: false,
            format: '{point.name}',
          },
        }],
      });
    };

    fetchTopologyAndRenderMap();
  }, []);

  return (
    <div>
      <div id="container" style={{ height: '600px' }}></div>
    </div>
  );
};

export default IndiaMap;
