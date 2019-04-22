import {type} from '../actions/get_movie_list'

function movie_list(state = {
    start:'',success:'',error:'',start_point:0,count:10,data:[]},action) {
    switch(action.type){
        case type.start:
            return Object.assign({}, state,{
                start:action.start
            });
        case type.success:
            return Object.assign({},state,{
                success:action.success
            });
        case type.error:
            return Object.assign({}, state, {
                error:action.error
            });
        case type.start_point:
            return Object.assign({},state,{
                start_point:action.start_point
            });
        case type.count:
            return Object.assign({},state,{
                count:action.count
            });
        case type.get_movie_list:
            let aaa = JSON.parse(JSON.stringify(state));
            let data =[...state.data,...action.item];
            aaa.data = JSON.parse(JSON.stringify(data));
            return aaa;
        default:
            return state;
    }
}

export default  movie_list