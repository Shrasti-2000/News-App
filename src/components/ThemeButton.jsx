import { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext'
import { Sun, Moon} from 'lucide-react'

const ThemeButton = () => {
     const {dispatch, theme} = useContext(ThemeContext)

     const handleThemeSwitch = () => {
       dispatch({type : "SWITCH_THEME"})
      localStorage.setItem("theme" , JSON.stringify(theme ? false : true))

     }

  return (
    <button className={theme ? 'bg-[#00809D] py-3 px-3 rounded-full text-white font-bold fixed bottom-10 left-5 cursor-pointer duration-150': 'duration-150 bg-[#090040] py-3 px-3 rounded-full text-white font-bold fixed bottom-10 left-5 cursor-pointer'} onClick={()=> handleThemeSwitch()}>
       {
        theme ?  <Sun /> : <Moon />
       }
        </button>
  )
}

export default ThemeButton