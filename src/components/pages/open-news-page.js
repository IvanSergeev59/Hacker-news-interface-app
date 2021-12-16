import {React, Component} from "react";
import { connect } from "react-redux";
import withHackerNewsService from '../../hoc';
import compose from '../utils';

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
            <div>
            <h2>{result.title}</h2>
            <p>{result.by}</p>
            <h3>{result.comments[0]}</h3>
            </div>
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