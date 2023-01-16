import { store } from "../store";

const getService = () => {
    console.log("aniket")
    return async () => {
        const data = await fetch("http://localhost:5000/services");
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({ type: "get_Service", payload: parsedData })
    }
}

const deleteService = (id) => {
    return async () => {
        console.log("id", id)
        const data = await fetch(`http://localhost:5000/services/${id}`, { method: 'delete' });
        console.log(data);
        const response = await data.json();
        console.log(response)
        const data1 = await fetch("http://localhost:5000/services");
        const parsedData1 = await data1.json()
        console.log(parsedData1)
        store.dispatch({ type: "del_Service", payload: parsedData1 })


    }
}

const fetchService = (service) => {
    return async () => {
        const requestOptions = {
            'method': 'PATCH',
            'body': JSON.stringify({
                status: false
            }),
            'headers': { "Content-type": "application/json" }
        };
        const data = await fetch(`http://localhost:5000/services/${service.id}`, requestOptions)
        const parsedData = await data.json();
        console.log(parsedData)
        store.dispatch({ type: "fetch_Service", payload: parsedData })
    }
}

const addService = (service) => {
    return async () => {
        const data = await fetch("http://localhost:5000/services", {
            'method': 'POST',
            'body': JSON.stringify({
                serviceName: service.serviceName, description: service.description,
                status: true, vehicleNumber: service.vehicleNumber, bookDate: service.bookDate,
                cost: service.cost, mechanic: service.mechanic, vehicleCategory: service.vehicleCategory
            }),
            'headers': { "Content-type": "application/json" }
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({ type: "add_Service", payload: parsedData })
    }
}

const updService = (service) => {
    return async () => {
        const data = await fetch(`http://localhost:5000/services/${service.id}`, {
            'method': 'PUT',
            'body': JSON.stringify({
                serviceName: service.serviceName,
                description: service.description,
                status: service.status, 
                vehicleNumber: service.vehicleNumber, 
                bookDate: service.bookDate,
                cost: service.cost, mechanic: service.mechanic, 
                vehicleCategory: service.vehicleCategory,
                userId:service.userId
            }),
            'headers': { "Content-type": "application/json" }
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({ type: "upd_Service", payload: parsedData })
    }
}

const getAllServices= () =>{ 
    return async ()=>{
    const serviceData = await fetch('http://localhost:5000/services');
    let response = await serviceData.json();
    //console.log(response)
    store.dispatch({type:"GET_ALL_SERVICES",payload:response});
}
}
const getUser = ()=>{
    return async () => {
        const data = await fetch('http://localhost:5000/users');
        const response = await data.json();
        let temp = [];
        temp.push(response);
        console.log('users',temp)
        store.dispatch({type:'Authenticate_User',payload:temp});
    }
}
const getAllOfferedService=()=>{
    return async ()=>{
        const offeredData = await fetch('http://localhost:5000/offeredServices');
        const response = await offeredData.json();
        // let temp = [];
        // temp.push(response);
        // store.dispatch({type:'GET_ALL_OFFERED_SERVICES',payload:temp})
        store.dispatch({type:'GET_ALL_OFFERED_SERVICES',payload:response})   
    }
}
const postServiceData= (serviceData)=>{
    return async()=>{
        console.log(serviceData);
    const data =  await fetch('http://localhost:5000/services',{
         method:'POST',
         body : JSON.stringify({
            offeredServiceId:serviceData.offeredServiceId,
            serviceName : serviceData.serviceName,
            description: serviceData.description,
            userId: serviceData.userId,
            status: true,
            vehicleNumber:serviceData.vehicleNumber,
            vehicleCategory:serviceData.vehicleCategory,
            bookDate:serviceData.bookDate,
            cost:serviceData.cost,
            userId:serviceData.userId
         }),
         headers : {
             'Content-type': 'application/json;charset=UTF-8'
         }
     })
     const response = await data.json();
     store.dispatch({type:"SET_SERVICE_DATA",payload:response})
    }
}



export { getService, deleteService, addService, updService, fetchService,getAllServices,getUser,getAllOfferedService,postServiceData }