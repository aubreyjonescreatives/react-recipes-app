  
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import MealCategories from './Components/MealCategories/MealCategories';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'; 
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/mealsStyles.css'; 


function App() {
  return (
   <>
   <Router>
     <NavBar />
  <Route path="/" exact component={MealCategories} />
   <Footer />
   </Router>
   </>
  );
}

export default App;
