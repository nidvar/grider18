import {combineReducers} from 'redux';

const default_reducer = (state='null', action)=>{
    return state
}



const reducers = combineReducers({
    default_reducer:default_reducer
})

export default reducers