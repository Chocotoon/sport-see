import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import '../styles/Radial_Chart.css'
function ChartRadial({ data }) {
    const scoreAngle = data[0].score * 360 ;
    return (
        <ResponsiveContainer width={258} height={283} style={{ position: 'relative' }}>
            <RadialBarChart className='radial_chart'
                innerRadius={100}
                outerRadius={100}
                barSize={10}
                data={data}
                startAngle={90}
                endAngle={90 + scoreAngle}
                cy={"58%"}
            >
                <RadialBar
                    cornerRadius={10}
                    minAngle={15}
                    dataKey="score"
                    fill='#E60000'
                />
                <text x={20} y={40} style={{fontSize:"15px" }}>Score</text>
            </RadialBarChart>
            <div className='radial_score'>
                <span className='radial_score_amount'><strong>{data[0].score*100}%</strong></span><br />
                <span className='radial_score_text'>de votre objectif</span>
            </div>
        </ResponsiveContainer>
    )
}

export default ChartRadial