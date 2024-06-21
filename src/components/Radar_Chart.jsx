import {RadarChart, PolarAngleAxis, PolarGrid, Radar, ResponsiveContainer } from 'recharts';
import '../styles/Radar_Chart.css'

function ChartRadar ({ data }) {
    return (
      <ResponsiveContainer width={258} height={283}>
        <RadarChart className='radar_chart' outerRadius={50}  data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke="#ffffff" />
        <Radar dataKey="value" fill="#ff0000" fillOpacity={0.8} />
      </RadarChart>
      </ResponsiveContainer>
    )
}

export default ChartRadar