import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {

  const [data, setData] = useState([]);
  const colors = ['#52d726', '#ffeC00', '#ff0000', '#007ed6', '#7cdddd', '#000', '#8f3515', '#a0a598', '#e9ca2a', '#185c6a'];
  useEffect(() => {
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS', 'Node.js', 'Angular', 'AngularJS-Remote', 'jQuery,', 'JavaScript!!'];
      const data = genres.map(genre => {
        const value = events.filter(event => event.summary.split(' ').includes(genre)).length
        return { name: genre, value };
      })
      return data;
    };
    setData(() => getData());
  }, [events]);

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