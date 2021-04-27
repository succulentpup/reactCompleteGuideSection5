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
      <ExpenseItem date={expenses[0].date}
                   title={expenses[0].title}
                   amount={expenses[0].amount}/>
      <ExpenseItem date={expenses[1].date}
                   title={expenses[1].title}
                   amount={expenses[1].amount}/>
      <ExpenseItem date={expenses[2].date}
                   title={expenses[2].title}
                   amount={expenses[2].amount}/>
      <ExpenseItem date={expenses[3].date}
                   title={expenses[3].title}
                   amount={expenses[3].amount}/>
    </Card>
  );
}

export default Expenses;
