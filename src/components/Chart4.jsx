import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'JAN',
    'New services added': 40,
    'Number of active services': 24,
    amt: 24,
  },
  {
    name: 'FEB',
    'New services added': 30,
    'Number of active services': 13,
    amt: 22,
  },
  {
    name: 'MAR',
    'New services added': 20,
    'Number of active services': 48,
    amt: 22,
  },
  {
    name: 'APR',
    'New services added': 27,
    'Number of active services': 39,
    amt: 20,
  },
  {
    name: 'MAY',
    'New services added': 18,
    'Number of active services': 48,
    amt: 21,
  },
  {
    name: 'JUN',
    'New services added': 23,
    'Number of active services': 38,
    amt: 25,
  },
  {
    name: 'JUL',
    'New services added': 34,
    'Number of active services': 43,
    amt: 21,
  },
  {
    name: 'AUG',
    'New services added': 34,
    'Number of active services': 43,
    amt: 21,
  },
  {
    name: 'SEP',
    'New services added': 34,
    'Number of active services': 43,
    amt: 21,
  },
  {
    name: 'OCT',
    'New services added': 34,
    'Number of active services': 43,
    amt: 21,
  },
  {
    name: 'NOV',
    'New services added': 34,
    'Number of active services': 43,
    amt: 21,
  },
  
  {
    name: 'DEC',
    'New services added': 34,
    'Number of active services': 43,
    amt: 21,
  },
];

const Chart4 = () => {
  return (
    // <div className='char4ss'>
    <ResponsiveContainer style={{maxHeight:'230px'}} width="100%" height="100%">
        <LineChart
        
          width={100}
          height={260}
          data={data}
          margin={{
            top: 2,
            right: 15,
            left: 0,
            bottom: 2,
          }}
          padding={{
            left: 0,
            top:0,
            right: 0,
            bottom:0
          }}
        >
          <CartesianGrid stroke="none" />
          <XAxis dataKey="name" />
          <YAxis interval={0} tickMargin={10} padding={{ top: 10, bottom: 10 }} />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="New services added" stroke="#3FE900" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Number of active services" stroke="#FFE603" />
        </LineChart>
      </ResponsiveContainer>
    //  </div>
  )
}

export default Chart4
