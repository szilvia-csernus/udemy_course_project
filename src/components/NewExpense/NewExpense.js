import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [clicked, setClicked] = useState(false);

    const hideForm = () => {
        setClicked(false)
    }

    const revealForm = () => {
        setClicked(true)
    }

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            {!clicked && <button onClick={revealForm}>Add New Expense</button>}
            {clicked && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideForm={hideForm} />}
        </div>
    )   

    
}

export default NewExpense