import './App.css';

import Home from './components/Home'
import IncomesList from './components/IncomesList'
import Error404 from './components/Error404'
import AllOperations from './components/AllOperations'
import ExpensesList from './components/ExpensesList'
import RedirectEditOperation from './components/RedirectEditOperation'



import { Route, Switch } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/incomesList' component={IncomesList}/>
        <Route path='/expensesList' component={ExpensesList}/>
        <Route path='/allOperations' component={AllOperations}/>
        <Route path='/registerOperation' component={() => { 
          window.location.href = 'http://localhost:3001/registerOperation'; 
          return null;
          }}/>
        <Route path='/editOperation/:id' component={RedirectEditOperation}/>
        <Route component={Error404}/>
      </Switch>      
    </div>
  );
}

export default App;
