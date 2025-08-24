import { useContext } from 'react'
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'
import ThemeButton from './components/ThemeButton'
import Weather from './components/Weather'
import ThemeContext from './context/theme/ThemeContext'
import { WeatherProvider } from './context/theme/Weather/WeatherContext'
import NewsContainer from './components/NewsContainer'
import { NewsProvider } from './context/News/newsContext'


const App = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <WeatherProvider>
  <NewsProvider>
     <Navbar/>
   <ThemeButton/>
   
   <div className={theme ? " min-h-screen p-8": " min-h-screen p-8 bg-[#131010]"}>
   <SearchForm/>

   <h1 className={theme ? 'my-4 text-center text-gray-600 text-xl font-bold':'my-4 text-center text-gray-100 text-xl font-bold'}>Latest News</h1>
    <div className={theme ? "border border-gray-300 rounded-sm p-4 grid-cols-1 md:grid grid-cols-3 gap-3":"border border-gray-900 rounded-sm p-4 grid-cols-1 md:grid grid-cols-3 gap-3"}>
   <Weather/>

<NewsContainer/>


   </div>


   </div>
   <ThemeButton/>
  </NewsProvider>
    </WeatherProvider>
  )
}

export default App