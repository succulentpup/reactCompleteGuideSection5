import { useState} from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

import './ExpensesFilter.css';
import './Expenses.css';

const Expenses = ({expenses}) => {
  const [filterYear, setFilterYear] = useState('2021')
  const filterChangeHandler = (year) => setFilterYear(year);
  const filteredExpenses = expenses.filter(expense =>
    expense.date.getFullYear().toString() === filterYear);

  return (
    <Card className='expenses'>
      <ExpensesFilter year={filterYear} onFilterChange={filterChangeHandler}/>
      <ExpensesChart dataPoints={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
