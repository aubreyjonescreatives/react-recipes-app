
# This React.js project continues my Github repository from the first course project. It contains: 




## Continue to retrieve your local API data to render a list of UI items

1. I retrieved json data from the https://www.themealdb.com/api.php API through PostMan. I then inserted 
the return data in my meals.json file. Here is example code from that file: 

``` 
{
    "categories": [
        {
            "idCategory": "4",
            "strCategory": "Lamb",
            "strCategoryThumb": "https://www.themealdb.com/images/category/lamb.png",
            "strCategoryDescription": "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n"
        },
        {
            "idCategory": "6",
            "strCategory": "Pasta",
            "strCategoryThumb": "https://www.themealdb.com/images/category/pasta.png",
            "strCategoryDescription": "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4] Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca)."
        }
    ]

}



```


## Continue to render your local API data using some combination of Cards, Avatars, List, etc. elements. These UI elements will be from the MUI version 5 package.

1. Material UI version 5! My website has cards, icons, lists, etc from this cutting edge new design system. For example: 

``` 
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';



```



## Add at least two ways in which a user may interact with your UI (click, input, etc.) and handle the events with some response by your UI

1. Users can favorite meal categories per meal category card when they click on their heart icons. React events take place behind the scenes to make this happen.  


## Use the useState hook to store some local state and have some mechanism for updating that state.  Make sure you use a proper method for updating state that depends on previous state!

1. Users can favorite meal categories per meal category card when they click on their heart icons. React events take place behind the scenes to make this happen.


## Submit a Github URL for your source code for this assignment

1. Here lies the Github Repository for this project 


## Also submit the Netlify URL for where your application is being served live. (can be a custom domain if you hooked one up)

1. Interested in checking out this project in action? Here is the live application link: 


https://chefs-react-meals.netlify.app/

