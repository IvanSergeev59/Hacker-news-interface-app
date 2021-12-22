import React, { Component } from "react";
import { connect } from "react-redux";
import FreshNews from "../freshNews";
import { addIdOfChoosenNews } from "../../actions";

export class NewsListPage extends Component  {
    render () {
        const {state, addId} = this.props;
        const {news, newsLoading, newsError} = state.freshNews     
        return (
            <div className="news-list">
                <ul className="news-list_ul">
                    <FreshNews news={news} addId={addId} newsLoading={newsLoading} newsError={newsError}/>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {state}
} 
  
  const mapDispatchToProps =(dispatch) => {
      
      return {
        addId: (item) => dispatch(addIdOfChoosenNews(item))
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NewsListPage)