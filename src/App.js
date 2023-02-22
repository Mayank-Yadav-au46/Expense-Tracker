import Expenses from "./components/Expenses/Expenses";
import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
const exp_data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 5, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Jacket",
    amount: 242,
    date: new Date(2022, 4, 12),
  },
  {
    id: "e5",
    title: "Guitar",
    amount: 399,
    date: new Date(2023, 1, 23),
  },
  {
    id: "e6",
    title: "Television",
    amount: 312,
    date: new Date(2019, 10, 31),
  },
  {
    id: "e7",
    title: "Invertor",
    amount: 122,
    date: new Date(2022, 7, 12),
  },
  {
    id: "e8",
    title: "Bean Bag",
    amount: 45,
    date: new Date(2023, 11, 25),
  },
  {
    id: "e9",
    title: "Charger",
    amount: 20,
    date: new Date(2021, 8, 21),
  },
  {
    id: "e10",
    title: "Curtains",
    amount: 45,
    date: new Date(2021, 2, 22),
  },
  {
    id: "e11",
    title: "Washing Machine",
    amount: 210,
    date: new Date(2022, 3, 15),
  },
  {
    id: "e12",
    title: "Cell phone",
    amount: 455,
    date: new Date(2021, 12, 21),
  },
  {
    id: "e13",
    title: "Car",
    amount: 2500,
    date: new Date(2022, 4, 30),
  }
];

function App() {
 const [expenses, setExpenses] = useState(exp_data);  

  const addExpense_pointer = (new_expense) => {
    setExpenses((prev_data)=>{
      console.log(new_expense, prev_data);
      return [new_expense, ...prev_data];
    });
  };
  return (
    <div>
      <NewExpense addExpense={addExpense_pointer}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses, { items: expenses })
  // );
}

export default App;
