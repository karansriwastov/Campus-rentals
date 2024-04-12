const reducer=(state=0,action)=>{
    if(action.type==='sendItems'){
        return state+action.payload
    }
    else {return state}
}
export default reducer;