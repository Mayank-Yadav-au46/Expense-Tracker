import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021"); 

  const filter_pointer = (filterYear_data) => {     
    setFilteredYear(filterYear_data);
  };

  const filteredExpenses = props.items.filter((expense) => {    
    return expense.date.getFullYear().toString() === filteredYear;
  });
 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChange={filter_pointer} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>    
      </Card>
    </div>
  );
}

export default Expenses;
