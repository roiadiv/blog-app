import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {Editor, EditorState,ContentState} from 'draft-js';

export default class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editorState: props.post ? EditorState.createWithContent(ContentState.createFromText(props.post.body)):EditorState.createEmpty(),
            title: props.post ? props.post.title:'',
            body: props.post ? props.post.body:'',
        };
        this.onChange = (editorState)=>{
            this.state.body = this.state.editorState.getCurrentContent().getPlainText();
            return this.setState({editorState});
        };
    }

    onSubmit =(e)=>{
        e.preventDefault();
        if(!this.state.title){
            this.setState(()=>({error: 'Please provide title'}))
            console.log('error');
        }else{
            this.setState(()=>({error: ''}))
            console.log('submit');
            this.props.onSubmit({
                title: this.state.title,
                body: this.state.body 
             });
        }

    }

    onTitleChange  = (e)=>{
        const title = e.target.value;
        this.setState(()=>({title}));
   }

    render(){
        return(
            <form  onSubmit = {this.onSubmit}>
                    <div className = "content-container">
                    <input    
                        type = "text" 
                        placeholder ="Post Title"
                        className="text-input"
                        required
                        value = {this.state.title}
                        onChange = {this.onTitleChange}
                     />
                    <button className = "button button--save">Save Post</button> 
                     <div className = "form form--post">
                      <Editor editorState={this.state.editorState} onChange = {this.onChange} />
                    </div>
                    </div>                    
            </form>
            
        )
    }
}