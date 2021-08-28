import React from 'react'
import { Line } from 'react-chartjs-2';


export type GameProps = {
  turn: Array<number | null | any>,
  Label: Array<string | null | any>,
};

const BarChart: React.FC<GameProps> = ({turn, Label}) => {

    return (
        <div>
            <Line
                data={{
                  labels: Label,
                  datasets: [
                    {
                    label: '# number of rounds',
                    data: turn,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgb(252, 182, 27)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,   }
                  ]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                }}
             />
        </div>
    )
}

export default BarChart;