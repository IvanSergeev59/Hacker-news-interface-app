const updateFreshNews = (state, action) => {
    if(state === undefined) {
        return {
            news: [],
            newsId: '',
            comments: [],
            commentsLoading: true,
            newsLoading: false,
            newsError: false         
        }
    }

    switch (action.type) {
        case 'FETCH_NEWS':
            return {
                ...state.freshNews,
                news: action.payload,
                newsLoading: true
            }      
        case 'ADD_NEWS_ID':
            return {
                ...state.freshNews,
                newsId: action.payload
            }   
        case 'FETCH_COMMENTS' : 
            return {
                ...state.freshNews,
                comments: action.payload
            }
        case 'ADD_SUBCOMMENTS_ID':
            return {
                ...state.freshNews,
                subcommentsId: action.payload
            }
            
        case 'FETCH_SUBCOMMENTS':
            //get state
            let newState = {...state.freshNews};
            //get subcomment parent id and comments
            let {subcommentsId, comments}  = newState;
            //check subcomments id and render 
            comments.map(comment => {                
                if(subcommentsId == comment.id) {
                    if (action.payload) {comment.subcomment=[...action.payload]}                    
                    comment.button="hidden"
                    }
                })            

            return {
                ...newState
            }
        default: return state.freshNews
    }
}

export default updateFreshNews