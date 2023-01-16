import { store } from "../store";

const getMechanic=()=>{
    console.log("aniket")
    return async () => {
        const data = await fetch("http://localhost:5000/mechanics");
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"get_Mechanic",payload:parsedData})
    }
}


const deleteMechanic=(id)=>{
    return async () => {
        console.log("id",id)
        const data=await fetch(`http://localhost:5000/mechanics/${id}`,{method:'delete'});
        console.log(data);
        const response= await data.json();
        console.log(response)
        const data1 = await fetch("http://localhost:5000/mechanics");
        const parsedData1 = await data1.json()
        console.log(parsedData1)
        store.dispatch({type:"del_Mechanic",payload:parsedData1})
    }
}

const addMechanic=(mechanic)=>{
    return async () => {
        const data = await fetch("http://localhost:5000/mechanics", {
            'method':'POST',
            'body':JSON.stringify({
                email:mechanic.email, password:mechanic.password,name:mechanic.name
             }),
             'headers':{"Content-type":"application/json"}
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"add_Mechanic",payload:parsedData})
    }
}

const updMechanic=(mechanic)=>{
    return async () => {
        const data = await fetch(`http://localhost:5000/mechanics/${mechanic.id}`, {
            'method':'PUT',
            'body':JSON.stringify({
                email:mechanic.email, password:mechanic.password,name:mechanic.name
             }),
             'headers':{"Content-type":"application/json"}
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"upd_Mechanic",payload:parsedData})
    }
}

export {getMechanic,deleteMechanic,addMechanic,updMechanic}