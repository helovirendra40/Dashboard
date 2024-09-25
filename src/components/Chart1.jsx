import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'MON',
    'Active Service Provider': 6000,
    'Service Provider Retension Rate': 5400,
    'New Service Provider': 2700,
    'Service Completion Rate': 1200,
    'Total Service Provider': 1600,
    'Average Rating': 300,
    amt: 2400,
  },
  {
    name: 'TUE',
    'Active Service Provider': 4000,
    'Service Provider Retension Rate': 2400,
    'New Service Provider': 2700,
    'Service Completion Rate': 3200,
    'Total Service Provider': 2600,
    'Average Rating': 3000,
    amt: 2210,
  },
  {
    name: 'WED',
    'Active Service Provider': 5000,
    'Service Provider Retension Rate': 1400,
    'New Service Provider': 1700,
    'Service Completion Rate': 1200,
    'Total Service Provider': 1600,
    'Average Rating': 3500,
    amt: 2290,
  },
  {
    name: 'THU',
    'Active Service Provider': 3000,
    'Service Provider Retension Rate': 1800,
    'New Service Provider': 1700,
    'Service Completion Rate': 5350,
    'Total Service Provider': 1090,
    'Average Rating': 2000,
    amt: 2000,
  },
  {
    name: 'FRI',
    'Active Service Provider': 7000,
    'Service Provider Retension Rate': 5400,
    'New Service Provider': 2700,
    'Service Completion Rate': 4200,
    'Total Service Provider': 5600,
    'Average Rating': 6000,
    amt: 6081,
  },
  {
    name: 'SAT',
    'Active Service Provider': 5000,
    'Service Provider Retension Rate': 4400,
    'New Service Provider': 1700,
    'Service Completion Rate': 3200,
    'Total Service Provider': 2600,
    'Average Rating': 5500,
    amt: 2500,
  },
];

const Chart1 = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="none" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Active Service Provider" stroke="#FF5D8D" activeDot={{ r: 8 }} strokeWidth={2} />
          <Line type="monotone" dataKey="Service Provider Retension Rate" stroke="#72BBFF" strokeWidth={2} />
          <Line type="monotone" dataKey="New Service Provider" stroke="#11BEA9" strokeWidth={2} />
          <Line type="monotone" dataKey="Service Completion Rate" stroke="#FF834D" strokeWidth={2} />
          <Line type="monotone" dataKey="Total Service Provider" stroke="#FA18FF" strokeWidth={2} />
          <Line type="monotone" dataKey="Average Rating" stroke="#FBBC05" strokeWidth={2} />
          
        </LineChart>
        </ResponsiveContainer>
  )
}

export default Chart1
