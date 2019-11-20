import {createStore} from 'redux'
let reducer=(state,action)=>{
    state=JSON.parse(JSON.stringify(state));
    // switch(action.type){
    //     case 'LIST':{
    //         state.list=action.list
    //     } break;
    //     default: break;
    // }
    if(action.type==='LIST')
    {
        console.log(action.list)
        state.list=action.list
    }
    return state
}
let initState={
    list:[]
}
export default createStore(reducer,initState)