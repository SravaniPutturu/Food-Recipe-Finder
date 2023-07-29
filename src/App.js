import './App.css';
import Meal from './Components/Meal';
import { Routes, Route } from 'react-router-dom'
import RecipeInfo from './Components/RecipeInfo';
import WishList from './Components/WishList';
import Navbar from './Components/Navbar';


function App() {
 
  return (
   <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Meal/>} />
    <Route path='/:MealId' element={<RecipeInfo/>}></Route>
    <Route path='/wishlist' element={<WishList/>}/>
    </Routes>
   </>
  );
}

export default App;
