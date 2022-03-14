import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { NavBar } from "./components/app-bar";
import { getData } from "./store/actions/actions";
import { IWeatherData } from "./store/types";


function App() {
 const dispatch = useDispatch();
 const data:IWeatherData = useSelector((state:any)=> state.weather.data)
  
 useEffect(() => {
     dispatch(getData('paris'))          
  }, [])
  

  return (
    <div className="App">
        <NavBar />
    </div>
  );
}

export default App;
