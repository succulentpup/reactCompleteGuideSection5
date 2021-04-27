import { useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './ExpensesFilter.css';
import './Expenses.css';

const Expenses = ({expenses}) => {
  const [filterYear, setFilterYear] = useState('2022')
  const filterChangeHandler = (year) => setFilterYear(year);
  const filteredExpenses = expenses.filter(expense =>
    expense.date.getFullYear().toString() === filterYear);

  return (
    <Card className='expenses'>
      <ExpensesFilter year={filterYear} onFilterChange={filterChangeHandler}/>
      <div>
        {filteredExpenses.map(expense => {
          return <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          }
        )}
      </div>
    </Card>
  );
}

export default Expenses;
