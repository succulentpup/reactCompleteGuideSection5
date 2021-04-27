import ExpenseItem from './ExpenseItem';

const ExpensesList = ({expenses}) => {
  let expensesContent = <p>No content to display</p>
  if (expenses.length > 0) {
    expensesContent = expenses.map(expense => {
        return <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      }
    )}
  return <div>{expensesContent}</div>
}

export default ExpensesList;
