import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
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
     <ul>
       {data.list.map((item)=>{
         return <li>{item.dt}</li>
       })}
     </ul>
    </div>
  );
}

export default App;
