import http from '../../http/http'
import stores from "../store";

export const type = {
    start:'start',
    success:'success',
    error:'error',
    start_point:'start_point',
    count:'count',
    get_movie_list:'get_movie_list'
};
export function start_point(start_point) {
    return{
        type:type.start_point,
        start_point
    }
}
export function count(count) {
    return{
        type:type.count,
        count
    }
}

export function start_status(start) {
    return {
        type:type.start,
        start
    }
}
export function success_status(success) {
    return{
        type:type.success,
        success
    }
}
export function error_status(error) {
    return{
        type:type.error,
        error
    }
}
export function get_movie(item){
    return{
        type:type.get_movie_list,
        item
    }
}
export function MovieRost(start,count) {
    return (dispatch) => {
        dispatch(start_status('start'));
        return http.post('/v2/movie/top250',{start,count}).then((res)=>{
            dispatch(success_status('success'));
            dispatch(get_movie(res.data.subjects));
            dispatch(start_status('end'));
        }).catch((error)=>{
            dispatch(error_status('error'));
            console.log('error:',error);
            dispatch(start_status('end'));
        })
    }
}


