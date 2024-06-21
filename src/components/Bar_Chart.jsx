import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/Bar_Chart.css'

function ChartBar({ data, children }) {

    const tooltipStyle = {
        backgroundColor: '#ff0000',
        color: '#ffffff'
    }

    const CustomTooltipBar = ({ payload }) => {
        const kgBar = payload.find(entry => entry.dataKey === 'kilogram');
        const calBar = payload.find(entry => entry.dataKey === 'calories');
    
        if (kgBar && calBar) {
            return (
                <div className="custom_tooltip">
                    <p className="label_kg">{`${kgBar.value} kg`}</p>
                    <p className="label_cal">{`${calBar.value} Kcal`}</p>
                </div>
            );
        }
    
        return null;
    };

    const customAxisTickBar = ({ x, index }) => {
        let number = index+1;
        return (
            <text x={x} y={230} dy={16} textAnchor="middle" fill="#9B9EAC">
                {number}
            </text>
        );
    }
    return (
        <ResponsiveContainer className='bar_chart' width={"100%"} height={250}>
            <BarChart data={data} barSize={7}>
                <text y={18}>{children}</text>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="day" tick={customAxisTickBar} interval={0}/>
                <Tooltip content={CustomTooltipBar} itemStyle={tooltipStyle}/>
                <Legend iconType='circle' iconSize={8} align='right' verticalAlign='top' />
                <Bar name='Poids (kg)' radius={[10, 10, 0, 0]} dataKey="kilogram" fill="#000000" />
                <Bar name='Calories brûlées (kcal)' radius={[10, 10, 0, 0]} dataKey="calories" fill="#FF0000" />
            </BarChart>
        </ResponsiveContainer>
    );
}
export default ChartBar