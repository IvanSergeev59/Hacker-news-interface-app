import React, {Component} from "react";
import Header from "../header";
import NewsListPage from "../pages/news-list-page";
import OpenNewsPage from "../pages/open-news-page";
import { BrowserRouter as Router, Navigate} from "react-router-dom";
import { Routes, Route } from "react-router";
import Footer from "../footer";
import { connect } from "react-redux";
import { fetchNews } from "../../actions";
import withHackerNewsService from '../../hoc';
import compose from '../utils';

    export class App  extends Component {
      componentDidMount() {
        this.props.fetchNews();
        setInterval(() => {
          this.props.fetchNews();
        }, 60000)        
      }

      render () {
        return (
          <Router> 
            <Header />
            <Routes>
              <Route path="/hacker-news-interface-app/" element={<NewsListPage />} />
              <Route path="/*" element={<NewsListPage />} />
              <Route path="/open-news/*" element={<OpenNewsPage />} />
              <Route path="*"  element={<Navigate to="/" />}    />
            </Routes>
            <Footer />
          </Router>
        );
      }
    }

    const mapStateToProps = (state) => {
      return state
    }
    
    const mapDispatchToProps =(dispatch, ownProps) => {
        const {hackerNewsService} = ownProps
        return {
          fetchNews: () => dispatch(fetchNews(hackerNewsService)())
        }
    }
    export default compose( 
      withHackerNewsService(),
    connect(mapStateToProps, mapDispatchToProps))(App)
