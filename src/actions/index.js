const fetchNewsList = (data) => {
    return {
        type: 'FETCH_NEWS',
        payload: data
    }
}

const addIdOfChoosenNews = (item) => {
    return {
        type: 'ADD_NEWS_ID',
        payload: item
    }
}

const fetchComments = (data) => {
    return {
        type: 'FETCH_COMMENTS',
        payload: data
    }
}

const fetchSubcommentsList = (data) => {
    return {
        type: 'FETCH_SUBCOMMENTS',
        payload: data
    }
}

const addSubcommentsId = (id) => {
    return {
        type: 'ADD_SUBCOMMENTS_ID',
        payload: id
    }
}

const fetchNews = (hackerNewsService) => () => (dispatch) => {
    hackerNewsService.getNewsList()
    .then((data) => dispatch(fetchNewsList(data)))
    .catch((err) => console.log(err))       
}

const fetchOpenedNews = (hackerNewsService, res) => () => (dispatch) => {
    hackerNewsService.getCommentsList(res)
    .then((data) => dispatch(fetchComments(data)))
    .catch((err) => console.log(err))    
}

const fetchSubcomments = (hackerNewsService, res) => () => (dispatch) => {
    hackerNewsService.getSubcommentsList(res)
    .then((data) => dispatch(fetchSubcommentsList(data)))
    .catch((err) => console.log(err))    
}

export {fetchNews, addIdOfChoosenNews, fetchOpenedNews, fetchSubcomments, addSubcommentsId}