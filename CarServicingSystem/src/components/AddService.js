import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import { mechanicActions, serviceActions, vehicleActions } from '../state/index'
import { useNavigate } from 'react-router-dom'


const AddService = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const mechanics = useSelector(state => state.mechanics)
    const vehicles = useSelector(state => state.vehicles)
    const [service, setService] = useState({})
    const handleChange = (e) => {
        setService({ ...service, [e.target.name]: e.target.value })
        console.log(service)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(serviceActions.addService(service))
        navigate("/viewUserService")
    }
    useEffect(() => {
        dispatch(serviceActions.getService())
        dispatch(mechanicActions.getMechanic())
        dispatch(vehicleActions.getVehicle())
    }, []);
    return (
        <Container>
            <Form className='container w-50 h-auto d-flex my-5'>
                <div style={{ width: '100%', "border": "solid 0.5px #C0C0C0", "padding": "15px", "alignContent": "center", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    <div style={{
                        "backgroundColor": "#007580", "margin": "0px 0px 25px 0px", "width": "100%", "height": "40px",
                        "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px", "textAlign": "center"
                    }}>
                        <h5 style={{ "color": "white", "paddingTop": "5px"}}>Add Service</h5>
                    </div>
                    <FormGroup>
                        <div className='p-2'>
                            <Label style={{fontWeight:"bold" }} for="serviceName">ServiceName</Label>
                        </div>
                        <Input
                            id="serviceName"
                            name="serviceName"
                            placeholder="ServiceName placeholder"
                            type="text"
                            value={service.serviceName}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'><Label style={{fontWeight:"bold" }} for="description">Description</Label></div>

                        <Input
                            id="description"
                            name="description"
                            placeholder="Description placeholder"
                            type="textarea"
                            value={service.description}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'><Label style={{fontWeight:"bold" }} for="vehicleNumber">Vehicle Number</Label></div>

                        <Input
                            id="vehicleNumber"
                            name="vehicleNumber"
                            placeholder="Vehicle placeholder"
                            type="text"
                            value={service.vehicleNumber}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'><Label style={{fontWeight:"bold" }} for="bookDate">Book Date</Label></div>

                        <Input
                            id="bookDate"
                            name="bookDate"
                            placeholder="Book Date placeholder"
                            type="text"
                            value={service.bookDate}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'><Label style={{fontWeight:"bold" }} for="cost">Cost</Label></div>

                        <Input
                            id="cost"
                            name="cost"
                            placeholder="Cost placeholder"
                            type="text"
                            value={service.cost}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'><Label style={{fontWeight:"bold" }} for="mechanic">Mechanic</Label></div>

                        <select id="mechanic" name="mechanic" value={service.mechanic} onChange={handleChange}>
                            <option>All</option>
                            {mechanics.map((defec) => {
                                return (
                                    <option value={defec.name} key={defec.id}>{defec.name}</option>
                                )
                            })}
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <div className='p-2'><Label style={{fontWeight:"bold" }} for="vehicle">Vehicles</Label></div>

                        <select id="vehicleCategory" name="vehicleCategory" value={service.vehicleCategory} onChange={handleChange}>
                            <option>All</option>
                            {vehicles.map((vech) => {
                                return (
                                    <option value={vech.type} key={vech.id}>{vech.type}</option>
                                )
                            })}
                        </select>
                    </FormGroup>
                    <Button onClick={handleSubmit} style={{ "backgroundColor": "#007580" }}>Add Service</Button><br /><br />
                </div>
            </Form>
        </Container>
    )
}

export default AddService