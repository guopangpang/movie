import React, {Component} from 'react'
import './style.css'
import http from '../../http/http'
import MovieItem from '../movieItem/movieItem'
import Header from "../header/Header";
import Footer from "../footer/footer";
import {withRouter} from "react-router-dom";

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
    // handlerjump = () =>{
    //     this.props.history.push('/movie_detail')
    // };
    render(){
        return(
            <div className={'home_body'}>
                <Header/>
                {
                    this.state.movie_list.map((item,index) =>{
                        return <MovieItem key={index} history={this.props.history}  movie_item={item}/>
                    })
                }
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Home)
