import { useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './ExpensesFilter.css';
import './Expenses.css';

const Expenses = ({expenses}) => {
  const [filterYear, setFilterYear] = useState('2022')
  const filterChangeHandler = (year) => {
    console.log({filter: year}, 'filter');
    setFilterYear(year)
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter year={filterYear} onFilterChange={filterChangeHandler}/>
      {expenses.map(expense => <ExpenseItem
          key = {expense.id}
          date = { expense.date }
          title = { expense.title }
          amount = { expense.amount }
        />
      )}
    </Card>
  );
}

export default Expenses;
