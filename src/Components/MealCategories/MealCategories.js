import React, { useState } from 'react'; 
import theCategories from '../../data/meals.json'
import MealCard from '../MealCard/MealCard'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const MealCategories = () => {


//const idCategory = ["2", "4"]



const [open, setOpen] = useState(false)
const handleOpen = () => setOpen(true)
const handleClose = () => setOpen(false) 
const [favoriteMeal, setFavoriteMeal] = useState([])
const [shareFB, setshareFB] = useState(false)
const [shareT, setshareT] = useState(false)
const [shareI, setshareI] = useState(false)


const handleshareSocialClickFB = () => {
  
if (shareFB == true) {
    setshareFB() 
    console.log(`We won't share on Facebook`)
} else {
    console.log(`Are you sure you want to share this meal on Facebook?`)
       
        return setshareFB(!shareFB)
       
    
}
  
    }

    

const handleshareSocialClickT = () => {
  
    if (shareT == true) {
        setshareT() 
        console.log(`We won't share on Twitter`)
    } else {
        console.log(`Are you sure you want to share this meal on Twitter?`)
           
            return setshareT(!shareT)
           
        
    }
      
        }
    
        
        

const handleshareSocialClickI = () => {
  
    if (shareI == true) {
        setshareI() 
        console.log(`We won't share on Instagram`)
    } else {
        console.log(`Are you sure you want to share this meal on Instagram?`)
           
            return setshareI(!shareI)
           
        
    }
      
        }


const handlesocialSubmit = () => {
    console.log("Thank you for sharing!")
}
        
    



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
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
           Say Something About This Meal: 
          </Typography>
          <TextareaAutosize
          display="block"
          margin={0}
      aria-label="minimum height"
      minRows={3}
      placeholder="This meal..."
      style={{ width: '100%' }}
      
    />
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Ways to Share:
          </Typography>
        <IconButton aria-label="settings"
       
        
        
        >
            <FacebookIcon
            sx={{ fontSize: 42, 
            color: shareFB ? '#E71D36' : '#4C86A8'
            }}
            onClick={handleshareSocialClickFB}
            
            
            />
          </IconButton>
          <IconButton aria-label="settings">
            <TwitterIcon 
             onClick={handleshareSocialClickT}
            sx={{ fontSize: 42, 
            color: shareT ? '#E71D36' : '#4C86A8'
            
            }}
            />
          </IconButton>
          <IconButton aria-label="settings">
            <InstagramIcon 
            sx={{ fontSize: 42, 
                color: shareI ? '#E71D36' : '#4C86A8'
                }}
                onClick={handleshareSocialClickI}
            
            />
          </IconButton>
          <Button
         sx={{ fontSize: 24, 
            color: 'white', 
            bgcolor: '#E71D36'
            }}
            onClick={handlesocialSubmit}
          
        >Share</Button>
        </Box>
       
      </Modal>

</Container>
</main>

</>
)


}



export default MealCategories 