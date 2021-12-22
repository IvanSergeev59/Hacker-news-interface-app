import React, {Component, Fragment} from "react";
import { connect } from "react-redux";
import withHackerNewsService from '../../hoc';
import compose from '../utils';
import { Card } from "react-bootstrap";
import Comments from "../comments";
import { fetchOpenedNews, fetchSubcomments, addSubcommentsId} from "../../actions";
import Loader from "../loader";
import Button from "react-bootstrap/button";
import { Link } from "react-router-dom";

export class OpenNewsPage extends Component {

    componentDidMount() {
        const state = this.props;
        const {newsId} = state.freshNews;  
        state.fetchOpenedNews(newsId)
        setInterval(() => {
          state.fetchOpenedNews(newsId);
        }, 60000) 
    }   

    render() {
        const state = this.props;
        const {fetchSubcomments, addSubcommentsId} = this.props;
        const {news, comments, commentsLoading, newsId} = state.freshNews;       
        const res = window.location.pathname.split('/open-news/').pop();
        let result = news.find(item => item.id == res);
        const OpenNewsPageContainer = () => {
            return (
              <Fragment>
              <Link to="/"><Button>Вернуться к списку новостей</Button></Link>
                <Card>
                <Card.Img variant="top" src={result.item} />
                <Card.Body>
                  <Card.Title>{result.title}</Card.Title>
                  <Card.Text>
                    Author: <span>{result.by}</span>
                  </Card.Text> 
                  <Card.Text>
                  <span>{result.text}</span>
                  </Card.Text> 
                  <Card.Text>
                    Original: <span>{result.url}</span>
                  </Card.Text>
                  <Card.Text>
                    Raiting: <span>{result.score}</span>
                  </Card.Text>              
                </Card.Body>
              </Card>
              </Fragment>
            )
        }

        const CommentsBlock = () => {
          const onClickUpdateComments = () =>{
            state.fetchOpenedNews(newsId)
          }
          if (commentsLoading) {
            return (
              <Fragment>
            <h4 className="open-news__comments-h4">Комментарии</h4><Button onClick={onClickUpdateComments} className="open-news__comments-button">Обновить комментарии</Button>
            <Comments comments={comments} commentsLoading={commentsLoading}  fetchSubcomments={fetchSubcomments} addSubcommentsId={addSubcommentsId}/></Fragment>
            )
          }
          else return <Loader />
        }

        return (
            <section className="open-news">
                <OpenNewsPageContainer />
                <CommentsBlock />
            </section>
        )      
    }
}

const mapStateToProps = (state) => {
    return state
} 
  
  const mapDispatchToProps =(dispatch, ownProps) => {
      const {hackerNewsService} = ownProps
      return {
        fetchOpenedNews: (res) => dispatch(fetchOpenedNews(hackerNewsService, res)()),
        addSubcommentsId: (id) => dispatch(addSubcommentsId(id)),
        fetchSubcomments: (res) => dispatch(fetchSubcomments(hackerNewsService, res)())
      }
  }
  export default compose( 
    withHackerNewsService(),
  connect(mapStateToProps, mapDispatchToProps))(OpenNewsPage)