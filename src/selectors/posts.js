
export default (posts, {text , sortBy})=>{
    return posts.filter((post)=>{
        const textMatch = post.title.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'title'){
        return a.title < b.title ? 1:-1;
        }else if(sortBy ==='amount'){
            return a.amount < b.amount? 1:-1;
        }
    });
};