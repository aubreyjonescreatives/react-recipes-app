import React, { useState } from 'react'; 
import theCategories from '../../data/meals.json'
import MealCard from '../MealCard/MealCard'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';




const MealCategories = () => {


//const idCategory = ["2", "4"]



const [open, setOpen] = useState(false)
const handleOpen = () => setOpen(true)
const handleClose = () => setOpen(false) 
const [favoriteMeal, setFavoriteMeal] = useState([])


const addFavoriteMeal = (category) => {

if (!favoriteMeal.includes(category.idCategory)) {
    setFavoriteMeal((prevState) => [ ...prevState, category.idCategory]) 
    console.log(`The ${category.strCategory} meal category was added to your favorite Meals`)
} else {
    setFavoriteMeal(() => {
        console.log(`The ${category.strCategory} meal category was removed from your favorite Meals`)
        return favoriteMeal.filter((item) => item !== category.idCategory)
       
    })
}

}

const mealCats = theCategories.categories



const [mealData] = useState({
    mealList: mealCats
})

 

// Fetch API 
/* 
const fetchCategories = async () => {
    try {
    const mealCategoriesInfo = mealCats
    setMealData(mealCategoriesInfo.data)
    console.log(mealCategoriesInfo.data)
    } catch (err) {
        console.log(err)
    }
}

    useEffect(() => {
        fetchCategories()
    
}, [])
 */

return (
<>


<main>
<h1 className="m-c-header">Meals By Category</h1>


{favoriteMeal && favoriteMeal.map((idCategory) => {
      return (
       <p key={idCategory}>{idCategory}</p>
  
      )
      
  })}

<Container className="containerAll">
  
{mealData.mealList.map((category) => {
    return (

        

        <MealCard
        key={category.idCategory}
        addFavoriteMealFunction={addFavoriteMeal}
        modalFunction={handleOpen}
        category={{...category}}
        // id={mCategories.id}
        // strCategoryThumb={mCategories.strCategoryThumb}
        // strCategory={mCategories.strCategory} 
        // strCategoryDescription={mCategories.strCategoryDescription}
        />

    )
    
})}
<Modal 
open={open} 
onClose={handleClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
  <Box>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>


</Modal>

</Container>
</main>

</>
)


}



export default MealCategories 