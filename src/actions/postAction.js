import {FETCH_POSTS, NEW_POST} from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_POSTS,
        payload: data
        }) 
    );
};

export const newPost = postSubmit => dispatch => {
    fetch ('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'content-type': 'application/JSON'},
        body: JSON.stringify(postSubmit)            
    })
    .then( res => res.json())
    .then( data => dispatch({
        type: NEW_POST,
        payload: data
    }))
};

