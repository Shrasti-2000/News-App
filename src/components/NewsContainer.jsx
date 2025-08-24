import { useContext, useEffect } from 'react'
import ThemeContext from '../context/theme/ThemeContext'
import NewsCard from './NewsCard'
import NewsContext from '../context/News/newsContext'
import { fetchNews } from '../context/News/newsServices'

const NewsContainer = () => {
    const {theme} = useContext(ThemeContext)
    const {allNews, dispatch} = useContext(NewsContext)

    // Fetching News
    const getNews = async(topic) => {
       const data = await fetchNews(topic)
       dispatch({
        type: "GET_NEWS",
        payload : data

       })
    }
   
    useEffect(()=>{
      getNews("Indore")
    }, [])

  if(!allNews || allNews.length === 0){
    return (
      <h1 className="text-center my-4 font-bold text-gray-500 text-4xl">Loading.....</h1>
    )
  }

  return (
   <div className={theme ? "border border-gray-300 shadow-xl text-gray-500 p-3 col-span-1 rounded-md col-span-2": "border border-gray-800 text-gray-600 p-3 col-span-1 rounded-md col-span-2"}>
{
  allNews.map((news, index) => <NewsCard key={index} news={news} />)
}
   

</div> 
  )
}

export default NewsContainer