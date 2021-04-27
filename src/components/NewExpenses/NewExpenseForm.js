import { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
  const [title,setTitle] = useState('');
  const [amount,setAmount] = useState('');
  const [date,setDate] = useState('');

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const amountChangeHandler = (event) => setAmount(event.target.value);
  const dateChangeHandler = (event) => setDate(event.target.value);
  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      title,
      amount,
      date: new Date(date),
    }
    setTitle('');
    setAmount('');
    setDate('');
    props.onSaveExpense(expense);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={amount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='Date' min='2020-01-01' max='2022-12-31' value={date} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div>
        <button className='new-expense__actions' type='submit'>AddExpense</button>
      </div>
    </form>
  )
}

export default NewExpenseForm;
