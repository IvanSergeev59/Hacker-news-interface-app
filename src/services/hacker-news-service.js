import axios from 'axios'

export default class HackerNewsService {
    apiBase = 'https://hacker-news.firebaseio.com/v0';

    async getNumbersOfFreshNews () {
        let res = await fetch(`${this.apiBase}/newstories.json?print=pretty`);                
        if (!res.ok) {          
            throw new Error (`Could not fetch ${this.apiBase}` + ` , received ${res.status}`)
        };
        return res.json();
    }

   getNewsList = async () => {       
            let res = await this.getNumbersOfFreshNews(); 
            let ololo =[]  
            for(let i=0; i < 20; i++) {
            await fetch(`${this.apiBase}/item/${res[i]}.json?print=pretty`)
                .then((res) => res.json())
                .then((result) => ololo.push(result))
                .catch()
            }
            console.log(ololo)
            return ololo.map(this.transformNews)
        
    }

    transformNews = (news) => {
        const newsDate = new Date(news.time);
        return {
            by: news.by,
            score: news.score,
            date:  newsDate.toString(),
            id: news.id,
            title: news.title
            
        }
    }


    
}