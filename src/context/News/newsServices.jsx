const getDate = () => {
    let currentDate = new Date(Date.now()).toLocaleDateString('en-IN').split("/")
     let day = currentDate[0]
     let month = currentDate[1]-1
     let year = currentDate[2]

 return `${year}-${month}-${day}`
     
    
}

export const fetchNews = async(topic) => {
    const date = getDate()
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${date}&sortBy=publishedAt&apiKey=5a954134e7854aeca8241a2b0bd67823`)
    const data = await response.json()
  
    return data.articles
}

getDate()

//https://newsapi.org/v2/everything?q=${topic}&from=${date}&sortBy=publishedAt&apiKey=5a954134e7854aeca8241a2b0bd67823