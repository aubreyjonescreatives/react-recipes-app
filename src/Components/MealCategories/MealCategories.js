import React, { useState } from 'react'; 
import theCategories from '../../data/meals.json'
import MealCard from '../MealCard/MealCard'
import { Container } from 'react-bootstrap';





const MealCategories = () => {



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
<h1 className="m-c-header">Meal Categories</h1>



<Container className="containerAll">
  
{mealData.mealList.map((mCategories) => {
    return (

        <MealCard
        {...mCategories}
        // id={mCategories.id}
        // strCategoryThumb={mCategories.strCategoryThumb}
        // strCategory={mCategories.strCategory} 
        // strCategoryDescription={mCategories.strCategoryDescription}
        />

    )
    
})}

</Container>
</main>

</>
)


}



export default MealCategories 