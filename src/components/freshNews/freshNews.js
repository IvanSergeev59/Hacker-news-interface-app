import React from "react";

const FreshNews = ({state}) => {
    const {news} = state.freshNews
    console.log(news);
 
        return (
            news.map (                
                item => <li key={item.id}>
                <h3>Title: {item.title}</h3>
                <p>Author: {item.by}</p>
                <p>Rating: {item.score}</p>
                <p>Time: {item.date}</p>
                </li>
        )     )
             }

export default FreshNews