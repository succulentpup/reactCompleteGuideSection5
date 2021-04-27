import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = ({expenses}) => {
  if (expenses.length === 0)
    return <h2 className='expenses-list__fallback'>No Expenses Found</h2>

  return <ul className='expenses-list'>{
    expenses.map(expense => <ExpenseItem
      key={expense.id}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
    />)
  }</ul>
}

export default ExpensesList;
