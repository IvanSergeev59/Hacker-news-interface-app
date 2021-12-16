import {React, Component} from "react";
import { connect } from "react-redux";
import FreshNews from "../freshNews";
import { addIdOfChoosenNews } from "../../actions";


export class NewsListPage extends Component   {
    
    render() {
        const {state} = this.props;
        return (
            <div className="news-list">
                <ul className="news-list_ul">
                    <FreshNews state={state} addIdOfChoosenNews={addIdOfChoosenNews}/>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {state}
} 

export default connect(mapStateToProps)(NewsListPage)
