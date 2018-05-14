import React from 'react';
import BlogListFilters from './BlogListFilters';
import PostList from './PostList';


const DashboardPage =  ()=>(
    <div>
        <div className="page-header">
        <div className ="content-container">
           <div className = "page-header__actions">
           </div>
        </div>
    </div> 
    <BlogListFilters />
    <PostList/>
    </div>
    
); 

export default DashboardPage;