import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenses) => {
    const expenseObject = {
      ...enteredExpenses,
      id: Math.random().toString(),
    }
    props.onNewExpense(expenseObject);
  }
  return (
    <div className='new-expense'>
      <NewExpenseForm onSaveExpense={saveExpenseHandler}/>
    </div>
  )
}

export default NewExpense;
