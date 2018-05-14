import React from 'react';
import {Link} from 'react-router-dom';
import filters from '../reducers/filters';
import {connect} from 'react-redux';
import {setTextFilter, sortByTitle} from '../actions/filters';

export class BlogListFilters extends React.Component{
    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e)=>{
        if(e.target.value === 'title'){
            this.props.sortByTitle();
        }else if(e.target.value === 'amount'){
            this.props.sortByAmount();
        }
    };

    render(){
     return(
    <div className="content-container">
            <div className="input-group">
                <div className ="input-group__item">
                    <input 
                    type = "text" 
                    placeholder ="Search posts"
                    className="text-input"
                    value ={this.props.filters.text} 
                    onChange = {this.onTextChange} 
                     />
                </div>
                <div className ="input-group__item">
                    <select className="select" value = {this.props.filters.sortBy} onChange = {this.onSortChange}>
                    <option value = "title">Title</option>
                    </select>
                </div>
                <Link className = "button button--post" to="/create">Add Post</Link>
            </div>
    </div>
    )
    }
}


const mapSateToProps = (state)=>{
    return {
        filters : state.filters
    }
};

const mapDispatchToProps = (dispatch,props)=>({
    setTextFilter:(text)=> dispatch(setTextFilter(text)),
    sortByDate:()=> dispatch(sortByTitle())
});

export default connect(mapSateToProps,mapDispatchToProps)(BlogListFilters);