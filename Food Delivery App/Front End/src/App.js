import './App.css';
import ResView from './components/ResView';
import { Route, Routes } from 'react-router-dom';
import ResSearch from './components/ResSearch';
import ResAdd from './components/ResAdd';
import FoodView from './components/FoodView';
import FoodSearch from './components/FoodSearch';
import FoodAdd from './components/FoodAdd';


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<FoodView/>}/>
      <Route path="/fsearch" exact element={<FoodSearch/>}/>
      <Route path="/fadd" exact element={<FoodAdd/>}/>
      <Route path="/radd" exact element={<ResAdd/>}/>
      <Route path="/rsearch" exact element={<ResSearch/>}/>
      <Route path="/rview" exact element={<ResView/>}/>
    </Routes>
    
  );
}

export default App;
