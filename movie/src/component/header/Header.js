import React, {Component} from 'react'
import './header_style.css'

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isLeft:true,
            isRight:true
        }
    }
    render(){
        return(
            <div className={'header'}>
                {
                    this.state.isLeft?<div className={'header_left_icon'}>11</div>:''
                }
                <div className={'header_page_name'}>热门电影</div>
                {
                    this.state.isRight?<div className={'header_right_icon'}>22</div>:''
                }
            </div>
        )
    }
}

export default Header