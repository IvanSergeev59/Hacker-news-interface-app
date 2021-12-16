const fetchNewsList = (data) => {
    return {
        type: 'FETCH_NEWS',
        payload: data
    }
}

const fetchNews = (hackerNewsService) => () => (dispatch) => {
    console.log
    hackerNewsService.getNewsList()
    .then((data) => dispatch(fetchNewsList(data)))
    .catch((err) => 
        console.log(err))
       
}

export {fetchNews}