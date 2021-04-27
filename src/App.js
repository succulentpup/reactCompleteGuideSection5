import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2021, 3, 24),
      amount: 299.83,
      title:  'Car Insurance',
    },
    {
      id: 'e2',
      date: new Date(2021, 3, 24),
      amount: 59.83,
      title:  'TV Insurance',
    },
    {
      id: 'e3',
      date: new Date(2021, 3, 24),
      amount: 99.83,
      title:  'Mobile Insurance',
    },
    {
      id: 'e4',
      date: new Date(2021, 3, 24),
      amount: 99.83,
      title:  'Laptop Insurance',
    },
  ];
  const [expenseList, setExpenseList] = useState(expenses)
  const newExpenseHandler = (newExpense) => {
    setExpenseList((prevExpenses) => [newExpense,...prevExpenses]);
  }
  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler}/>
      <div>
        <Expenses expenses={expenseList}/>
      </div>
    </div>
  );
}

export default App;
