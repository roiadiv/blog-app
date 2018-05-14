const filtersReducerDefultState = {
    text: '',
    sortBy: 'title'
};

export default (state = filtersReducerDefultState , action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        }

        case 'SORT_BY_TITLE':
        return{
            ...state,
            sortBy: 'title'
        }

        default:
        return state;
    }
}
