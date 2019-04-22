import { combineReducers } from 'redux'
// import visibilityFilter  from './reducers/reducer'
import todos  from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'
import movie_list from './reducers/movie_list'


const stores = combineReducers({
    visibilityFilter,
    todos,
    movie_list
});


export default stores