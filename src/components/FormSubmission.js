import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {newPost} from '../actions/postAction'

class FormSubmission extends Component {
    state = { title: '',
                body: '', }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body,
        }

       this.props.newPost(post)
    }
    render() { 
        return ( 
        <div>
            <form onSubmit={this.handleSubmit}>
                <div> 
                    <input type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
                    <input type="text" value={this.state.body}  onChange={this.handleChange} name="body"/>
                    <button>Submit</button>
                </div>
            </form>
        </div> 
        );
    }
}

FormSubmission.propTypes = {
    newPost: PropTypes.func.isRequired,
    postData: PropTypes.array.isRequired
}
    
    const mapStateToProps = state => ({
        postData: state.postData.item
    })
    
    export default connect(mapStateToProps, {newPost})(FormSubmission) 