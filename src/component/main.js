import React,{Component} from 'react';
import RouterView from '../router/RouterView'
import {Link} from 'react-router-dom'
import './css/style.css'
class Main extends Component{
    render(){
        return <div className="main">
            <RouterView routes={this.props.routes}></RouterView>
            <footer className="foot">
                <Link to="/main/home">配送到家</Link>
                <Link to="/main/classify">分类</Link>
                <Link to="/main/vip">会员</Link>
                <Link to="/main/cart">购物车</Link>
                <Link to="/main/my">我的</Link>
            </footer>
        </div>
    }
}
export default Main