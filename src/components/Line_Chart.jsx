import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import '../styles/Line_Chart.css'

function ChartLine({ data }) {
const customAxisTickLine = ({ x, y, payload }) => {
        let letter = "";
        let day = payload.value

        switch (day) {
            case 1:
                letter = "L"
                break;
            case 2:
                letter = "M"
                break;
            case 3:
                letter = "M"
                break;
            case 4:
                letter = "J"
                break;
            case 5:
                letter = "V"
                break;
            case 6:
                letter = "S"
                break;
            case 7:
                letter = "D"
                break;
            default:
                letter = "null"
                break;
        }
        return (
            <text x={x} y={y} dy={16} textAnchor="middle" fill="#FFFFFF80">
                {letter}
            </text>
        );
    }
    const CustomTooltipLine = ({ payload }) => {
        const length = payload.find(entry => entry.dataKey === 'sessionLength');
    
        if (length) {
            return (
                <div className="custom_tooltip">
                    <p className="label_length">{`${length.value} min`}</p>
                </div>
            );
        }
    
        return null;
    };
    return (
        <ResponsiveContainer className='line_chart' width={258} height={283}>
            <LineChart data={data.sessions}>
                <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="75%" stopColor="#ffffff" stopOpacity={0.4} />
                        <stop offset="25%" stopColor="#ffffff" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <text x={10} y={40} fill="#ffffff99">Durée moyenne des sessions</text>
                <Tooltip content={CustomTooltipLine}/>
                <Line type="basis" dataKey="sessionLength" stroke="url(#lineGradient)" strokeWidth={2} dot={false} />
                <XAxis dataKey="day" stroke='#ffffff99' tick={customAxisTickLine} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default ChartLine
