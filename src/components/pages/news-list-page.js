import {React, Component} from "react";
import { connect } from "react-redux";
import FreshNews from "../freshNews";

export class NewsListPage extends Component   {
    
    render() {
        const {state} = this.props;
        return (
            <ul>
                <FreshNews state={state}/>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {state}
} 

export default connect(mapStateToProps)(NewsListPage)
