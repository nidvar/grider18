const grab_data_action = ()=>{
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(a=>{
            return a.json();
        }).then(a=>{
            console.log(a)
            dispatch({
                type:'FETCH_POSTS',
                payload: a
            })
        }).catch()
    }
}

export default grab_data_action