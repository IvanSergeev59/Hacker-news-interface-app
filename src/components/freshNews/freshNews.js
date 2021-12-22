import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import  Button  from "react-bootstrap/button";
import Loader from "../loader";


const FreshNews = (props) => { 
    const {news, addId, newsLoading, newsError} = props;
    
    let FreshNewsContainer = newsLoading & !newsError ?  
        news.map (                
            item => 
            <li key={item.id}>
            <Card>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    Author: <span>{item.by}</span><br />
                    Rating: <span>{item.score}</span><br />
                    
                    dated: <span>{item.date}</span>
                    
                    </Card.Text>
                    <Link to={item.link} onClick={(event) => addId(event.target.name)}><Button name ={item.id} variant="primary">More</Button></Link>
                </Card.Body>
                </Card>
            </li>
        )
        :
        <Loader />
    FreshNewsContainer =  newsError ? <h3>Ошибка при загрузке</h3>    : FreshNewsContainer
        
    return FreshNewsContainer
}
export default FreshNews