import React from 'react';
import {connect} from 'react-redux';
import grab_data_action from '../actions/grab_data';

class PostList extends React.Component{
    componentDidMount=()=>{
        this.props.grab_data_action()
    }
    render(){
        return(
            <div>
                <h1>Post List</h1>
            </div>
        )
    }
}

export default connect(null, {grab_data_action: grab_data_action})(PostList)