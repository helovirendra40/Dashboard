import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Number of active services ', value: 600 },
  { name: 'New services added', value: 300 },
  { name: 'Services removed ', value: 800 },
//   { name: 'Group D', value: 200 },
];

const COLORS = ['#FFE603', '#FF0000', '#3FE900'];

// Custom active shape that does nothing
const renderActiveShape = () => null;

const Chart3 = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={45}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          activeShape={renderActiveShape} // Use custom active shape
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          activeShape={renderActiveShape} // Use custom active shape
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart3;
