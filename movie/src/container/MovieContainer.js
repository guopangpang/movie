import React from 'react'
import { connect } from 'react-redux'
import { start_point,count, MovieRost } from '../store/actions/get_movie_list'
import Home from '../component/home/home'

const mapStateToProps = (state, ownProps) => {
    console.log('state:',state);
    return {
        movie_list:state.movie_list
    }
};

const mapDispatchToProps = dispatch => {
    return {
        set_start_point: (num)=>{
            dispatch(start_point(num))
        },
        set_count: (num) =>{
            dispatch(count(num))
        },
        get_movie_list: (start,count) =>{
            dispatch(MovieRost(start,count));
        }
    }
};

const MovieList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default MovieList
