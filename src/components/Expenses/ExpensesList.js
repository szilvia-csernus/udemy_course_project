import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {

    if (props.filteredExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found.</h2>
    }

    return (
        <ul className='expenses-list'>
            {props.filteredExpenses.map(item => <ExpenseItem item={item} key={item.id} />)}
        </ul>
    )
        
}

export default ExpensesList