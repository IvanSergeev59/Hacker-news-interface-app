export default class HackerNewsService {
    apiBase = 'https://hacker-news.firebaseio.com/v0';

    async getNumbersOfFreshNews () {
        let res = await fetch(`${this.apiBase}/topstories.json?print=pretty`);                
        if (!res.ok) {          
            throw new Error (`Could not fetch ${this.apiBase}` + ` , received ${res.status}`)
        };
        return res.json();
    }

    async getNumbersOfComments (url) {
        let res = await fetch(`${this.apiBase}/item/${url}.json?print=pretty`)
        return res.json()
    }

   getNewsList = async () => {       
            let res = await this.getNumbersOfFreshNews(); 
            let newArr =[]  
            for(let i=0; i < 20; i++) {
            await fetch(`${this.apiBase}/item/${res[i]}.json?print=pretty`)
                .then((res) => res.json())
                .then((result) => newArr.push(result))
                .catch()
            }
            return newArr.map(this.transformNews)
        
    }

    getCommentsList = async (url) => {
        let resp = await this.getNumbersOfComments(url);
        const comments = resp.kids
        let newArr = [];
        for(let i=0; i < comments.length; i++) {
            await fetch(`${this.apiBase}/item/${comments[i]}.json?print=pretty`)
                .then((res) => res.json())
                .then((result) => newArr.push(result))
                .catch()
        }
        return newArr.map(this.transformComments)
        
    }

    getSubcommentsList = async (urlList) => {
        if(urlList) {
            let newArr = []
            for(let i=0; i < urlList.length; i++) {
                await fetch(`${this.apiBase}/item/${urlList[i]}.json?print=pretty`)
                    .then((res) => res.json())
                    .then((result) => newArr.push(result))
                    .catch()
            }
        return newArr.map(this.transformComments)
        }
        else return null
    }

    transformNews = (news) => {
        const newsDate = new Date(news.time);
        return {
            by: news.by,
            score: news.score,
            date:  newsDate.toString(),
            id: news.id,
            title: news.title,
            url: news.url,
            img: news.img, 
            comments: news.kids,
            link: `/open-news/${news.id}`
        }
    }

    transformComments = (comment) => {
        return {
            text: comment.text,
            by: comment.by,
            id: comment.id,
            subcommentsNums: comment.kids,
            button: '',
            parentId: comment.parent
        }
    }

    
}