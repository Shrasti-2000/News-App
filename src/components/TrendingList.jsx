import { useContext } from 'react';
import NewsContext from '../context/News/newsContext';
import { fetchNews } from '../context/News/newsServices';

const TrendingList = () => {
  const { dispatch } = useContext(NewsContext);


  const getNews = async (topic) => {
    const data = await fetchNews(topic)
    dispatch({
      type: 'GET_NEWS',
      payload: data
    })
  }

return (
        <ul className='my-2 flex items-center justify-center flex-wrap'>
            <li className='m-1 bg-teal-600 rounded-sm text-white text-center p-0.5 px-2 cursor-pointer hover:bg-teal-800 text-sm' onClick={() => getNews("Indore")}>Indore</li>
            <li className='m-1 bg-teal-600 rounded-sm text-white text-center p-0.5 px-2 cursor-pointer hover:bg-teal-800 text-sm' onClick={() => getNews("India")}>Trending</li>
            <li className='m-1 bg-teal-600 rounded-sm text-white text-center p-0.5 px-2 cursor-pointer hover:bg-teal-800 text-sm' onClick={() => getNews("Bollywood")}>Entertainment</li>
            <li className='m-1 bg-teal-600 rounded-sm text-white text-center p-0.5 px-2 cursor-pointer hover:bg-teal-800 text-sm' onClick={() => getNews("Indian Politics")}>Politics</li>
            <li className='m-1 bg-teal-600 rounded-sm text-white text-center p-0.5 px-2 cursor-pointer hover:bg-teal-800 text-sm' onClick={() => getNews("Indian Education")}>Education</li>
            <li className='m-1 bg-teal-600 rounded-sm text-white text-center p-0.5 px-2 cursor-pointer hover:bg-teal-800 text-sm' onClick={() => getNews("Indian Business")}>Business</li>
            <li className='m-1 bg-teal-600 rounded-sm text-white text-center p-0.5 px-2 cursor-pointer hover:bg-teal-800 text-sm' onClick={() => getNews("Internation")}>International</li>
            <li className='m-1 bg-teal-600 rounded-sm text-white text-center p-0.5 px-2 cursor-pointer hover:bg-teal-800 text-sm' onClick={() => getNews("Indian Sports")}>Sports</li>
            <li className='m-1 bg-teal-600 rounded-sm text-white text-center p-0.5 px-2 cursor-pointer hover:bg-teal-800 text-sm' onClick={() => getNews("InTechnology")}>Technology</li>
            <li className='m-1 bg-teal-600 rounded-sm text-white text-center p-0.5 px-2 cursor-pointer hover:bg-teal-800 text-sm' onClick={() => getNews("Indian Funny")}>Meme</li>
            <li className='m-1 bg-teal-600 rounded-sm text-white text-center p-0.5 px-2 cursor-pointer hover:bg-teal-800 text-sm' onClick={() => getNews("Artificial Intelligence")}>Artificial Intelligence</li>
        </ul>
    )
}

export default TrendingList