import React from 'react';
import {connect} from 'react-redux';
import PostListItem from './PostListItem';
import selectorPost from '../selectors/posts';

export const PostList = (props)=>(
    <div className = "content-container">
        <div className= "list-header">
          <div className = "show-for-mobile">Posts</div>
          <div className = "show-for-desktop">Posts</div>
        </div>
        <div className = "list-budy">
        {
            props.posts.length === 0 ? (
                <div className="list-item list-item--massage">
                    <span>No posts</span>
                </div>
            ) : (
                props.posts.map((post) => {
                    console.log(post);
                    return <PostListItem key = {post.id} {...post} />
                })
            )
        }
        </div>
    </div>   
);

const mapStateToProps = (state)=>{
    return {
        posts :  selectorPost(state.posts,state.filters)
    };
};

export default connect(mapStateToProps)(PostList);
