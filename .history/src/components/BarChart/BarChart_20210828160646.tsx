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
                    backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
                    }
                  ]
                }}
                height={400}
                width={400}
                options={{
                    maintainAspectRatio: false,
                }}
             />
        </div>
    )
}

export default BarChart;