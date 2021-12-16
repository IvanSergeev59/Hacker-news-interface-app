const updateFreshNews = (state, action) => {
    if(state === undefined) {
        return {
            news: []
        }
    }

    switch (action.type) {
        case 'FETCH_NEWS':
            return {
                ...state.updateFreshNews,
                news: action.payload
            }        
        default: return state.updateFreshNews
    }
}

export default updateFreshNews