import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node.js', 'jQuery', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
      return { name: genre, value };
    });
    return data;
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(() => getData());
  }, [events]);

  const colors = ['#52d726', '#ffeC00', '#ff0000', '#007ed6', '#7cdddd'];

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          outerradius={80}
          fill='#8884d8'
          dataKey='value'
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))
          }
        </Pie>
        <Legend verticalAlign='bottom' height={20} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;