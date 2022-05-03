import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart({ title, data, userDataKey,salesDataKey, grid }) {
  return (
    <div className='chart'>
    <h3 className='chartTitle'>{title}</h3>
    <ResponsiveContainer width='100%' aspect={4 / 1}>
<LineChart data={data}>
<XAxis dataKey="name" stroke='#5551bd' />
<YAxis /> 
<Line type="monotone" dataKey={salesDataKey} stroke="#5551bd" />
<Line type="monotone" dataKey={userDataKey} stroke="rgb(16, 170, 124)" />
<Legend />
<Tooltip/>
{grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
</LineChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Chart