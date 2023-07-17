import "./NewExpenses.css";
import ExpenceForm from "./ExpenseForm";

const NewExpense = (props) => {

  const expenseDataHandler = (enteredExpenseData)=>{
    const expenseData = {...enteredExpenseData, id: Date.now().toString()}
    
    props.onSaveNewExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenceForm onSaveExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
