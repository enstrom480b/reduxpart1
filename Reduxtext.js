

const {createStore}=require('redux')


const initialstate={

    age:32
}
const myreducer=(state=initialstate,action)=>{
 var newstate={...state}

if(action.type==='ADD')
{
    newstate.age+=action.val
}
if(action.type==='SUB')
{
    newstate.age-=action.val
}
return newstate
}

const store=createStore(myreducer) 

store.subscribe(()=>{
    console.log('changes made')
})


store.dispatch({type:'ADD',val:10})
console.log(store.getState())
store.dispatch({type:'SUB',val:10})
console.log(store.getState())