import { store } from "../store";

const getUser=()=>{
    console.log("aniket")
    return async () => {
        const data = await fetch("http://localhost:5000/users");
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"get_User",payload:parsedData})
    }
}

const deleteUser=(id)=>{
    return async () => {
        console.log("id",id)
        const data=await fetch(`http://localhost:5000/users/${id}`,{method:'delete'});
        console.log(data);
        const response= await data.json();
        console.log(response)
        const data1 = await fetch("http://localhost:5000/users");
        const parsedData1 = await data1.json()
        console.log(parsedData1)
        store.dispatch({type:"del_User",payload:parsedData1})
    }
}

const addUser=(user)=>{
    return async () => {
        const data = await fetch("http://localhost:5000/users", {
            'method':'POST',
            'body':JSON.stringify({
                email:user.email, password:user.password,name:user.name
             }),
             'headers':{"Content-type":"application/json"}
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"add_User",payload:parsedData})
    }
}

const getSingleUser=(id)=>{
    return async () => {
        console.log("id",id)
        const data=await fetch(`http://localhost:5000/users/${id}`);
        console.log(data);
        const response= await data.json();
        console.log(response)
        const data2 = await fetch("http://localhost:5000/users");
        const parsedData2 = await data.json()
        console.log(parsedData2)
        store.dispatch({type:"get_User",payload:parsedData2})
    }
}

const updUser=(userr)=>{
    return async () => {
        const data = await fetch(`http://localhost:5000/users/${userr.id}`, {
            'method':'PUT',
            'body':JSON.stringify({
                email:userr.email, password:userr.password,name:userr.name,mechanic:userr.mechanic
             }),
             'headers':{"Content-type":"application/json"}
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"upd_User",payload:parsedData})
    }
}
const postUserUid=(regData) => {
    return async()=>{
    const data = await fetch('http://localhost:5000/users',{
    method:'POST',
    body : JSON.stringify({
        email: regData.username,
        password: regData.password,
        name: regData.name,
        uid:regData.uid
    }),
    headers : {
        'Content-type': 'application/json;charset=UTF-8'
    }
})
const response = await data.json();
store.dispatch({type:"SET_FIRE_USERID",payload:response})


}
}

export {getUser,deleteUser,addUser,getSingleUser,updUser,postUserUid}