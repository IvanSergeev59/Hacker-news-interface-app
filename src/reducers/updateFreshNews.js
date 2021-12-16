const updateFreshNews = (state, action) => {
    if(state === undefined) {
        return {
            news: [],
            newsId: ''
        }
    }

    switch (action.type) {
        case 'FETCH_NEWS':
            return {
                ...state.updateFreshNews,
                news: action.payload
            }      
        case 'FETCH_NEWS':
            return {
                ...state.updateFreshNews,
                newsId: action.payload
            }   
        default: return state.updateFreshNews
    }
}

export default updateFreshNews