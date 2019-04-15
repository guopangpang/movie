import React, {Component} from 'react'
import './movieItem_style.css';
import {Link} from 'react-router-dom';
import PublicDefine from '../../PublicDefine/PublicDefine'
import MovicDetail from '../movie_detail/movie_detail'


class movieItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:this.props.movie_item
        }
    }
    componentWillMount(){

    }
    handlerDetail = () =>{
        this.props.history.push('/movie_detail')
    };
    render(){
        return(
            <div>
                {/*<NavLink  to='/movie_detail'>*/}
                {/*<Link to='/movie_detail'>movie_detail</Link>*/}
                    <div className={'movieItem'} onClick={this.handlerDetail}>
                        <div className={'movieItem_image_content'}>
                            <img className={'movieItem_image'} src={PublicDefine.imgUrl + this.state.item.images.small}/>
                        </div>
                        <div className={'movieItem_info'}>
                            <div className={'movie_name'}>{this.state.item.title}</div>
                            <div className={'movieItem_tag_content'} style={{"WebkitBoxOrient": "vertical"}}>
                                <span className={'movieItem_tag'}>分类：</span>
                                <span>{
                                    this.state.item.genres.map((item,index)=>{
                                        return <span key={index} className={'movieItem_tag'}>{item}  </span>
                                    })
                                }</span>
                            </div>
                            <div className={'movieItem_dircetor_name_content'} style={{"WebkitBoxOrient": "vertical"}}>
                                <span className={'movieItem_dircetor_name'}>导演：</span>
                                <span>{
                                    this.state.item.directors.map((item,index)=>{
                                        return <span key={index} className={'movieItem_dircetor_name'}>{item.name}  </span>
                                    })
                                }</span>
                            </div>
                            <div className={'movieItem_casts_name_content'} style={{"WebkitBoxOrient": "vertical"}}>
                                <span className={'movieItem_casts_name'}>主演：</span>
                                {
                                    this.state.item.casts.map((item,index)=>{
                                        return <span key={index} className={'movieItem_casts_name'}>{item.name} </span>
                                    })
                                }
                            </div>
                        </div>
                        <div className={'movieItem_rating'}>
                            评分：9
                        </div>
                    </div>
                {/*</NavLink>*/}
            </div>

        )
    }
}

export default movieItem