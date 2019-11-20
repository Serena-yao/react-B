import React,{Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
class Home extends Component{
    async componentDidMount(){
        let res=await axios.get('/mock/data.json');
        console.log(res,'res......')
        this.props.initState(res.data.market)
    }
    render(){
        const {list}=this.props
        return <div>
            <div className="head">
                <span>多点超市</span>
            </div>
            <div className="main">
                {
                    list.map((item,index)=>{
                        return  <dl key={index}>
                    <dd>{item.title}</dd>
                    <dt>{item.money}</dt>
                    </dl>
                    })
                }
               
            </div>
        </div>
    }
}
let mapStateToProps=(state)=>{
    // const {list}=state
    // return {
    //     list
    // }
    return {
        list:state.list
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        initState:list=>{
            dispatch({type:'LIST',list})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)