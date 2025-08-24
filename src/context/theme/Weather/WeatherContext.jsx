import { createContext, useReducer } from "react";
import weatherReducer from "./weatherReducer";

 const WeatherContext = createContext()

 export const WeatherProvider = ({children})=>{

const initialState = {
  weatherData: null
}
 const[state, dispatch] = useReducer(weatherReducer, initialState)






  return(
    <WeatherContext.Provider value= {{...state, dispatch}}>
      {children}
    </WeatherContext.Provider>
  )
 }


 export default WeatherContext