import React from 'react';
import {connect} from 'react-redux';
import {startEditPost,startRemovePost} from '../actions/posts';
import PostForm from './PostForm';


export class EditPostPage extends React.Component{
    onSubmit = (post)=>{
        this.props.startEditPost(this.props.post.id, post);
        this.props.history.push('/');
    };
    onRemove = ()=>{
        this.props.startRemovePost({id : this.props.post.id});
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <div className = "page-header">
                     <div className = "content-container">
                        <h1 className="header__title header__title--subtitle">Edit Post</h1>
                    </div>
                </div>
                <PostForm
                  post = {this.props.post}
                  onSubmit = {this.onSubmit}
                 />
                  <button className = "button button--remove" onClick={this.onRemove}>Remove Post</button> 
                  
            </div>
        )
    }
}

const mapStateToProps = (state, props)=>{
    return {
        post :  state.posts.find((post)=> post.id === props.match.params.id)
    };
};


const mapDispatchToProps = (dispatch,props)=>({
    startEditPost:(id,post)=> dispatch(startEditPost(id,post)),
    startRemovePost:(data)=> dispatch(startRemovePost(data))      
});
export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);