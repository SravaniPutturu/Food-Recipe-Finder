import './App.css';
import Meal from './Components/Meal';
import { Routes, Route } from 'react-router-dom'
import RecipeInfo from './Components/RecipeInfo';


function App() {
  localStorage.setItem('list',[]);
  return (
   <>
    {/* <Meal/> */}
    <Routes>
    <Route path='/' element={<Meal/>} />
    <Route path='/:MealId' element={<RecipeInfo/>}></Route>
    </Routes>
   </>
  );
}

export default App;
