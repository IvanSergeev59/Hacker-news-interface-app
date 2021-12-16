import React from "react";
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const FreshNews = ({state}) => {
    const {news} = state.freshNews;
    console.log(news)
        return (
            news.map (                
                item => 
                <li key={item.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                        {item.by}<br />
                        {item.score}<br />
                        {item.date}
                        
                        </Card.Text>
                        <Link to={item.link}><Button variant="primary">More</Button></Link>
                    </Card.Body>
                    </Card>
                </li>
            ))}

export default FreshNews