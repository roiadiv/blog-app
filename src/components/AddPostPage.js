import React from 'react';
import {connect} from 'react-redux';
import {startAddPost} from '../actions/posts';
import PostForm from './PostForm';


export class AddPostPage extends React.Component{
    onSubmit = (post)=>{
        console.log(post);
        this.props.startAddPost(post);
        this.props.history.push('/');//redirect by using browser ruoting
    }
    render(){
        return(
            <div>
                <div className = "page-header">
                     <div className = "content-container">
                        <h1 className="header__title header__title--subtitle">Add Post</h1>
                    </div>
                </div>
                <PostForm
                  onSubmit = {this.onSubmit}
                 />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>({
    startAddPost:(post)=> dispatch(startAddPost(post))   
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);