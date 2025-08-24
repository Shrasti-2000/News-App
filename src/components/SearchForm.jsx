
import { useContext, useState } from 'react'
import NewsContext from '../context/News/newsContext'
import { fetchNews } from '../context/News/newsServices'
import ThemeContext from '../context/theme/ThemeContext'
import TrendingList from './TrendingList'

const SearchForm = () => {

   const [topic, setTopic] = useState("")

    const {theme} = useContext(ThemeContext)
    const {dispatch} = useContext(NewsContext)

    const getNews = async(topic) => {
      const data = await fetchNews(topic)
      dispatch({
        type: "GET_NEWS",
        payload: data
      })
    }

    const handleGetNews = (e) => {
      e.preventDefault()
      getNews(topic)
      setTopic("")
    }

  return (
     <div className={theme ? " border border-gray-300 rounded-sm w-full p-4 shadow-xl ":" border border-gray-600  p-4 rounded-sm w-full "}>
      <h1 className={theme ?'text-center my-2 text-gray-600 font-bold text-3xl' :'text-center my-2 text-gray-300 font-bold text-2xl'}>Search Any News</h1>
      <p  className='text-center my-2 text-gray-400 font-bold text-sm'>Search Any News, Any Where</p>

      <form onSubmit={handleGetNews}>
        <input value={topic} onChange={(e) => setTopic(e.target.value)} type="text" placeholder='Enter Any Topic' className=' border bg-white w-full rounded-md py-2 px-4 outline-none ' />
        <button type="submit" className='bg-[#2DAA9E] rounded-sm w-full my-3 py-1 text-2xl text-white font-semibold'>Search News</button>
      </form>

<TrendingList />
    </div>
  )
}

export default SearchForm