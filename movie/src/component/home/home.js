import React, {Component} from 'react'
import './style.css'
import MovieItem from '../movieItem/movieItem'
import Header from "../header/Header";
import Footer from "../footer/footer";
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            num_start_point:0,
            movielist_body:''
        }
    }
    componentWillMount(){

    }
    componentDidMount(){
        this.get_data(this.state.num_start_point).then(()=>{
            this.props.get_movie_list(this.props.movie_list.start_point,this.props.movie_list.count);
        });
    }
    handlerScroll = () =>{
        if((this.state.movielist_body.scrollHeight - this.state.movielist_body.offsetHeight - this.state.movielist_body.scrollTop)<100){
            if(this.props.movie_list.start === 'end'){
                this.setState({
                    num_start_point:this.state.num_start_point + 10
                },()=>{
                    this.get_data(this.state.num_start_point).then(()=>{
                        this.props.get_movie_list(this.props.movie_list.start_point,this.props.movie_list.count);
                    });
                });
            }
        }
    };
    get_data = (num) =>{
        return new Promise((resolve,reject)=>{
            this.props.set_start_point(num);
            this.props.set_count(10);
            resolve()
        })
    };
    render(){
        return(
            <div className={'home_body'} >
                <Header/>
                <div className={'movie_list'} onScrollCapture={this.handlerScroll} ref={(movielist_body) =>{this.state.movielist_body = movielist_body}}>
                    {
                        this.props.movie_list.data.map((item,index) =>{
                            return <MovieItem key={index} history={this.props.history}  movie_item={item}/>
                        })
                    }
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Home)
