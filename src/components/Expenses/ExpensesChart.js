import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  props.dataPoints.forEach(dataPoint => {
    const expensesMonth = dataPoint.date.getMonth();
    chartDataPoints[expensesMonth].value += +dataPoint.amount;
  });

  const maxValue = Math.max(...chartDataPoints.map((dataPoint) => dataPoint.value));

  return <div>
    <Chart dataPoints = { chartDataPoints } maxValue = {maxValue}/>
  </div>

}

export default ExpensesChart;
