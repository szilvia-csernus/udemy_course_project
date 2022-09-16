import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2020');

    const changeYearHandler = selectedYear => {
        setSelectedYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === selectedYear);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onChangeYear={changeYearHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList filteredExpenses={filteredExpenses} />

            </Card>
        </div>

    )
}

export default Expenses;