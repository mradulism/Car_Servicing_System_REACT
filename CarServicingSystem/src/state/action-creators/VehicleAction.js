import { store } from "../store";

const getVehicle=()=>{
    console.log("aniket")
    return async () => {
        const data = await fetch("http://localhost:5000/vehicleCategory");
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"get_Vehicle",payload:parsedData})
    }
}

const getAllVehicle=()=>{
    return async () =>{
        const vehicleData = await fetch("http://localhost:5000/vehicleCategory");
        const response = await vehicleData.json();
        store.dispatch({type:"GET_ALL_VEHICLE_CATEGORY",payload:response});
    } 
} 



const deleteVehicle=(id)=>{
    return async () => {
        console.log("id",id)
        const data=await fetch(`http://localhost:5000/vehicleCategory/${id}`,{method:'delete'});
        console.log(data);
        const response= await data.json();
        console.log(response)
        const data1 = await fetch("http://localhost:5000/vehicleCategory");
        const parsedData1 = await data1.json()
        console.log(parsedData1)
        store.dispatch({type:"del_Vehicle",payload:parsedData1})
        
    }
}

const addVehicle=(vehicle)=>{
    return async () => {
        const data = await fetch("http://localhost:5000/vehicleCategory", {
            'method':'POST',
            'body':JSON.stringify({
                type:vehicle.type, description:vehicle.description,details:vehicle.details
             }),
             'headers':{"Content-type":"application/json"}
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"add_Vehicle",payload:parsedData})
    }
}

const updVehicle=(vehicle)=>{
    return async () => {
        const data = await fetch(`http://localhost:5000/vehicleCategory/${vehicle.id}`, {
            'method':'PUT',
            'body':JSON.stringify({
                type:vehicle.type, description:vehicle.description,details:vehicle.details
             }),
             'headers':{"Content-type":"application/json"}
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({type:"upd_Vehicle",payload:parsedData})
    }
}


export {getVehicle,deleteVehicle,addVehicle,updVehicle,getAllVehicle}