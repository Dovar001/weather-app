import { Box } from "@mui/material";
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { NavBar } from "./components/app-bar";
import { CardSingle } from "./components/card";
import { Cards } from "./components/cards-container/card-holder";
import { getData } from "./store/actions/actions";
import { IWeatherData } from "./store/types";


function App() {
 const dispatch = useDispatch();
 const data:IWeatherData = useSelector((state:any)=> state.weather.data)
 const city:string = useSelector((state:any)=>state.weather.city)
  

 useEffect(()=>{
   dispatch(getData('dushanbe'))
 },[])

 useEffect(() => {
   if(city) {
     dispatch(getData(city))
   } 
  }, [city])
  

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default App;
