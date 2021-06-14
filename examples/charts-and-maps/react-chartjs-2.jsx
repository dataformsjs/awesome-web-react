// Examples are copied from the main site (MIT License):
// https://github.com/jerairrest/react-chartjs-2/tree/master/example/src/components

const pieData = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
		],
		hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
		]
	}]
};

const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
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
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const radarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

class App extends React.Component {
    render() {
        const chartHeight = 350;
        const chartWidth = 650;
        const chartOptions = { maintainAspectRatio: false, responsive: false };
        return (
            <>
                <h1>React Chart.js Demo</h1>
                <p>
                    <a href="/">🏠 Back to all Examples</a>
                </p>
                <p>
                    <a href="https://www.chartjs.org/" target="_blank" rel="noopener">https://www.chartjs.org/</a>
                </p>
                <p>
                    <a href="https://github.com/jerairrest/react-chartjs-2" target="_blank" rel="noopener">https://github.com/jerairrest/react-chartjs-2</a>
                </p>

                <section>
                    <h2>Pie Chart</h2>
                    <Pie data={pieData} height={chartHeight} width={chartWidth} options={chartOptions} />
                </section>

                <section>
                    <h2>Bar Chart</h2>
                    <Bar data={barData} height={chartHeight} width={chartWidth} options={chartOptions} />
                </section>

                <section>
                    <h2>Line Chart</h2>
                    <Line data={lineData} height={chartHeight} width={chartWidth} options={chartOptions} />
                </section>

                <section>
                    <h2>Radar Chart</h2>
                    <Radar data={radarData} height={chartHeight} width={chartWidth} options={chartOptions} />
                </section>
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
