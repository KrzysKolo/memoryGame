import React from 'react'
import { Bar } from 'react-chartjs-2';


export type GameProps = {
  turn: number,
  dateGame: number,
};

const BarChart: React.FC<GameProps> = ({gameResults}) => {
  console.log(game)
    return (
        <div>
            <Bar
                data={{
                  labels: gameResults.dataGame,
                  datasets: [
                    {
                    label: '# of votes',
                    data: gameResults.turn,
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
                width={600}
                options={{
                    maintainAspectRatio: false,
                }}
             />
        </div>
    )
}

export default BarChart;