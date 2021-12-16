import updateFreshNews from "./updateFreshNews";

const reducer = (state, action) => {
    return {
        freshNews: updateFreshNews(state, action)
    }
   
}

export default reducer