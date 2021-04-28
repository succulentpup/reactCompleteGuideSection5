import { useState } from 'react';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseHandler = (enteredExpenses) => {
    const expenseObject = {
      ...enteredExpenses,
      id: Math.random().toString(),
    }
    props.onNewExpense(expenseObject);
  }

  const setIsEditingHandler = () => setIsEditing(true);

  const unsetIsEditingHandler = () => setIsEditing(false);

  return (
    <div className='new-expense'>
      { !isEditing && <button onClick={setIsEditingHandler}>Add New Expense</button> }
      { isEditing && <NewExpenseForm onSaveExpense={saveExpenseHandler} onSubmitOrCancel={unsetIsEditingHandler}/> }
    </div>
  )
}

export default NewExpense;
