import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledContainer } from './StyledComponents/StyledContainer';
import { CustomNavbar } from './components/CustomNavbar';
import { Home } from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddExpense } from './components/AddExpense';
import { ModifyExpense } from './components/ModifyExpense';
import { ViewExpense } from './components/ViewExpense';
import { useContext, createContext} from 'react';
import ExpensesData from './data/Expenses';


function App(){
  return(
    <Router>
      <StyledContainer>
        <CustomNavbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/add" element={<AddExpense />}/>
            <Route path="/modify" element={<ModifyExpense />}/>
            <Route path="/view" element={<ViewExpense />}/> 
          </Routes>
      </StyledContainer>
    </Router>
  )
}

export default App;