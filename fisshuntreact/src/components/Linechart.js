import { useState, useEffect } from "react";
// import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     LineElement,
//     PointElement
// )
const Linechart = ({ }) => {
    const [chartData, setChartData] = useState([]);
    const [chartInstance, setChartInstance] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://production.api.coindesk.com/v2/tb/price/values/ETH?start_date=2024-01-23T13:37&end_date=2024-01-24T13:37&ohlc=false");
                const data = await response.json();
                console.log(data);
                if (data.statusCode === 200) {
                    setChartData(data.data.entries);
                } else {
                    console.error("Error fetching data:", data.message);
                }
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };
        // fetchData();
    }, []);
    useEffect(() => {
        if (chartData) {
            // Extract timestamps and values from the fetched data
            const timestamps = chartData.map(entry => entry[0]);
            const values = chartData.map(entry => entry[1]);
            if (chartInstance) {
                chartInstance.destroy();
            }
            // Create a line chart using Chart.js
            const ctx = document.getElementById(`lineChart`).getContext('2d');
            const newChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: timestamps,
                    datasets: [{
                        label: 'ETH Price',
                        data: values,
                        borderColor: 'blue',
                        borderWidth: 2,
                        fill: false,
                    }],
                },
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                        },
                        y: {
                            type: 'linear',
                            position: 'left',
                        },
                    },
                },
            });
            setChartInstance(newChartInstance);
        }
    }, [chartData]);
    return (
        <div>
            {/* <canvas id={`lineChart`} width="400" height="200"></canvas> */}
        </div>
    );

}
export default Linechart;