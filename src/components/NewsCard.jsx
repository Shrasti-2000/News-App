

const NewsCard = ({ news }) => {
  return (
    <div className={'border border-gray-400 py-2 rounded-sm flex-col md:flex-row md:space-y-0 space-x-4 relative'}>
      <img src={news.urlToImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCBHgbS23kyBw2r8Pquu19UtKZnrZmFUx1g&s"} className='h-55 w-60 rounded-md p-4 object-cover' alt="" />
      <div>
        <h1 className='text-2xl font-bold text-gray-450 px-2 mb-1'>{news.title}</h1>
        <p className='text-xl px-2'>{news.description}</p>
        <p className='text-md mt-4 px-2'>Source: {news.source.name}</p>
        <p className='mt-2 px-2'>Date: {news.publishedAt}</p>
      </div>
      <a href={news.url} target="_blank" className='bg-emerald-500 hover:bg-emerald-600 cursor-pointer py-2 px-4 rounded-md text-md text-white absolute right-5 bottom-5'>Read Full News</a>
    </div>
  )
}

export default NewsCard