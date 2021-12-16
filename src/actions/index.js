const fetchNewsList = (data) => {
    return {
        type: 'FETCH_NEWS',
        payload: data
    }
}

const addIdOfChoosenNews = (id) => {
    return {
        type: 'ADD_NEWS_ID',
        payload: id
    }
}

const fetchNews = (hackerNewsService) => () => (dispatch) => {
    console.log
    hackerNewsService.getNewsList()
    .then((data) => dispatch(fetchNewsList(data)))
    .catch((err) => 
        console.log(err))
       
}

export {fetchNews, addIdOfChoosenNews}