import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Table, Button, Label } from 'reactstrap'
import { serviceActions } from '../state/index'
import { useNavigate } from 'react-router-dom'
import { BiEdit, BiTrash } from "react-icons/bi";

const ViewUserService = () => {
    const navigate = useNavigate()
    var services = useSelector(state => state.services)
    console.log(typeof (services))
    const dispatch = useDispatch()
    

    // const filterItem = (categItem) => {
    //     const updatedItem = services.filter((curElem) => {
    //         return curElem.vehicle === categItem;
    //     })
    //     console.log(updatedItem)
    //     //services=updatedItem
    // }

    useEffect(() => {
        dispatch(serviceActions.getService())
    }, [])
    const handleDelete=(id)=>{
        if(window.confirm("are you sure ?")){
            dispatch(serviceActions.deleteService(id))
        }
    }
    

    return (
        <Container>
            <div>
                <Button href="/addService" style={{ backgroundColor: "#007580", marginTop: "10px"}}>Add Service</Button>
                {/* <Button href="/viewOfferService" style={{ backgroundColor: "#4C0033", marginTop: "10px" }}>Service Offered</Button> */}
                {/* <Button onClick={() => filterItem('SUV')} style={{ backgroundColor: "#4C0033", marginTop: "10px" }}>Filter Service</Button> */}
            </div>
            <Table striped bordered hover style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#007580", backgroundColor: "", border: "2px solid #007580", marginTop: "10px", marginBottom: "50px" }}>
                <thead style={{ textAlign: "center", backgroundColor: "#007580", color: "white" }}>
                    <th>Sr.No</th>
                    <th>User Id</th>
                    <th>Service Name</th>
                    <th>Description</th>
                    <th>Vehicle Number</th>
                    <th>Book Date</th>
                    <th>Total Cost</th>
                    <th>Mechanic</th>
                    <th>Vehicle Category</th>
                    <th>Status</th>
                    <th>Close Service</th>
                    <th>Update</th>
                    <th>Delete</th>

                </thead>
                <tbody style={{ textAlign: "center" }}>
                    {services.map((service) => {
                        return <tr>
                            <td>{service.id}</td>
                            <td>{service.userId}</td>
                            <td>{service.serviceName}</td>
                            <td>{service.description}</td>
                            <td>{service.vehicleNumber}</td>
                            <td>{service.bookDate}</td>
                            <td>{service.cost}</td>
                            <td>{service.mechanic}</td>
                            <td>{service.vehicleCategory}</td>
                            <td>{service.status ? 'open' : 'close'}</td>
                            <td>{service.status ? <Button color="success" onClick={() => { dispatch(serviceActions.fetchService(service)) }}>Close</Button> : <p>No pending</p>}</td>
                            {/* <td><Button color="danger" onClick={()=>{dispatch(serviceActions.fetchService(service))}}>Close</Button></td> */}
                            <td><Button color="success" onClick={() => { navigate("/updService", { state: { service: service } }) }}><BiEdit></BiEdit></Button></td>
                            {/* <td><Button color="danger" onClick={() => { dispatch(serviceActions.deleteService(service.id)) }}>Delete</Button></td> */}
                            <td><Button color="danger" onClick={()=>handleDelete(service.id)}><BiTrash></BiTrash></Button></td>

                        </tr>
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default ViewUserService