import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const [editing, setEditing] = useState(false);

  const newExpense_pointer = (newExpenseData)=>{
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString()
    }
    props.addExpense(expenseData);
    setEditing(false);
  }
  const startEditingHandler = ()=>{
    setEditing(true);
  }
  const cancelForm =()=>{
    setEditing(false);
  }
  return (
    <div className='new-expense'>
      {!editing && <button onClick={startEditingHandler}>Add New Expense</button>}
       {editing && <ExpenseForm onSaveExpenseData = {newExpense_pointer} onCancel={cancelForm}></ExpenseForm> } 
    </div>
  )
}

export default NewExpense