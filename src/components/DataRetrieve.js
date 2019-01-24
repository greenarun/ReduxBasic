import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {fetchPosts} from '../actions/postAction'

class DataRetrieve extends Component {
    componentWillMount() {
        this.props.fetchPosts()
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.postData.unshift(nextProps.newPost)
        }
    }
    render() { 
        const PostMapping = this.props.postData.map(post => <li key={post.id}><h3>{post.title}</h3><div>{post.body}</div></li>)
        return ( <div>
            <ul>
            {PostMapping}
            </ul>
        </div> );
    }
}

DataRetrieve.propTypes = {
fetchPosts: PropTypes.func.isRequired,
postData: PropTypes.array.isRequired,
newPost: PropTypes.object
}

const mapStateToProps = state => ({
    postData: state.postData.items,
    newPost: state.postData.item
})

export default connect(mapStateToProps, {fetchPosts})(DataRetrieve)