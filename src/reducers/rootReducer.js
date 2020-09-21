import {combineReducers} from 'redux';

const default_reducer = (state='null', action)=>{
    if(action.type==='FETCH_POSTS'){
        console.log(action.payload)
    }
    return state
}



const reducers = combineReducers({
    default_reducer:default_reducer
})

export default reducers