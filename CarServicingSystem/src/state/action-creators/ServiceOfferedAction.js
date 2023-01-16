import { store } from "../store";

const getOfferedService = () => {
    console.log("aniket")
    return async () => {
        const data = await fetch("http://localhost:5000/offeredServices");
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({ type: "get_Offered_Service", payload: parsedData })
    }
}

const deleteOfferedService = (id) => {
    return async () => {
        console.log("id", id)
        const data = await fetch(`http://localhost:5000/offeredServices/${id}`, { method: 'delete' });
        console.log(data);
        const response = await data.json();
        console.log(response)
        const data1 = await fetch("http://localhost:5000/offeredServices");
        const parsedData1 = await data1.json()
        console.log(parsedData1)
        store.dispatch({ type: "del_Offered_Service", payload: parsedData1 })
    }
}

// const fetchService = (service) => {
//     return async () => {
//         const requestOptions = {
//             'method': 'PATCH',
//             'body': JSON.stringify({
//                 status: false
//             }),
//             'headers': { "Content-type": "application/json" }
//         };
//         const data = await fetch(`http://localhost:5000/services/${service.id}`, requestOptions)
//         const parsedData = await data.json();
//         console.log(parsedData)
//         store.dispatch({ type: "fetch_Service", payload: parsedData })
//     }
// }

const addOfferedService = (offerservice) => {
    return async () => {
        const data = await fetch("http://localhost:5000/offeredServices", {
            'method': 'POST',
            'body': JSON.stringify({
                serviceName: offerservice.serviceName, 
                serviceDescription: offerservice.serviceDescription,
                servicePrice: offerservice.servicePrice
            }),
            'headers': { "Content-type": "application/json" }
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({ type: "add_Offered_Service", payload: parsedData })
    }
}

const updOfferedService = (offerservice) => {
    return async () => {
        const data = await fetch(`http://localhost:5000/offeredServices/${offerservice.id}`, {
            'method': 'PUT',
            'body': JSON.stringify({
                serviceName: offerservice.serviceName, 
                serviceDescription: offerservice.serviceDescription, 
                servicePrice: offerservice.servicePrice
            }),
            'headers': { "Content-type": "application/json" }
        });
        const parsedData = await data.json()
        console.log(parsedData)
        store.dispatch({ type: "upd_Offered_Service", payload: parsedData })
    }
}

export {getOfferedService,deleteOfferedService,addOfferedService,updOfferedService}