import {React, Component} from "react";
import { connect } from "react-redux";
import withHackerNewsService from '../../hoc';
import compose from '../utils';
import { Card } from "react-bootstrap";

export class OpenNewsPage extends Component {

    componentDidMount() {
        this.props.fetchOpenedNews()
    }

    render() {
        
        const {state} = this.props;
        const {news} = state.freshNews;
        const res = window.location.pathname.split('/open-news/').pop();
        let result = news.find(item => item.id == res);
        return (
            <Card>
            <Card.Img variant="top" src={result.item} />
            <Card.Body>
              <Card.Title>{result.title}</Card.Title>
              <Card.Text>
                {result.url}
              </Card.Text>             
            </Card.Body>
          </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {state}
} 
  
  const mapDispatchToProps =(dispatch, ownProps) => {
      const {hackerNewsService} = ownProps
      return {
        fetchOpenedNews: () => console.log('openedNews')
      }
  }
  export default compose( 
    withHackerNewsService(),
  connect(mapStateToProps, mapDispatchToProps))(OpenNewsPage)