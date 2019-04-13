import React, {Component} from 'react'
import './style.css'
import http from '../../http/http'
import MovieItem from '../movieItem/movieItem'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            movie_list: []
        }
    }
    componentWillMount(){
        http.post('/v2/movie/top250',{start:0,count:10}).then((res)=>{
            console.log(res);
            this.setState(
                {
                    movie_list: res.data.subjects
                }
            )
        }).catch((error)=>{
            console.error('ERROR:', error)
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.movie_list.map((item,index) =>{
                        return <MovieItem key={index} movie_item={item}/>
                    })
                }
            </div>
        )
    }
}

export default Home
