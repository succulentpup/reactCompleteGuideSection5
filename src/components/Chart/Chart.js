import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  return <div className='chart'>
    {props.dataPoints.map((dataPoint) => {
      return <ChartBar
        key = { dataPoint.label }
        value = { dataPoint.value }
        label = { dataPoint.label }
        maxValue = { props.maxValue }
      />
    })}
  </div>
};

export default Chart;
