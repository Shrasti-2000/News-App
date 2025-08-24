import { createContext, useReducer } from "react";

 const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    
const initialState =  {
    theme: JSON.parse(localStorage.getItem('theme')) || false
}

// Theme Reducer
const ThemeReducer = (state, action) => {
    if(action.type === "SWITCH_THEME"){
         return{
     ...state,
            theme : state.theme ? false : true
    }
    }else{
        return state
    }
       
}
const[state, dispatch] = useReducer(ThemeReducer, initialState)



 
    return (
         <ThemeContext.Provider value={{...state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    
    )
       
    }





 export default ThemeContext