import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
import { Table } from 'reactstrap'
import { serviceActions } from '../state';
import fire from '../Firebase';
import AuthenticationService from '../AuthService/AuthenticationService';

//import { ServiceAction } from '../State/action-creators/ServiceAction';

const SeriveHistoryComponent = () => {
    const dispatch = useDispatch();
    const serviceData = useSelector(state => state.services);
    //console.log(serviceData);
    useEffect(() => {
        dispatch(serviceActions.getAllServices());
        // fire.auth().onAuthStateChanged((user)=>{
        //     if(user){

        //     }
        // })

    }, [])
    return (
        <div>
            <div>
                <div style={{ width: "80%", height: "auto", marginLeft: "auto", marginRight: "auto", marginTop: "50px" }}>
                    <Table striped bordered hover style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#007580", backgroundColor: "", border: "2px solid #007580", marginTop: "10px", marginBottom: "50px" }}>
                        <thead style={{ textAlign: "center", backgroundColor: "#007580", color: "white" }}>
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>
                                    Service Name
                                </th>
                                <th>
                                    Description
                                </th>
                                <th>
                                    User Id
                                </th>
                                <th>
                                    Vehicle Category
                                </th>

                                <th>
                                    Status
                                </th>
                                <th>
                                    Vehicle Number
                                </th>
                                <th>
                                    Book Date
                                </th>
                                <th>
                                    Cost
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                serviceData.filter((data) => data.userId == sessionStorage.getItem("authenticatedUserId")).map((d) => {
                                    return <tr>

                                        <td>
                                            {d.id}
                                        </td>
                                        <td>
                                            {d.serviceName}
                                        </td>
                                        <td>
                                            {d.description}
                                        </td>
                                        <td>
                                            {d.userId}
                                        </td>
                                        <td>
                                            {d.vehicleCategory}
                                        </td>
                                        <td>{d.status ? 'open' : 'close'}</td>
                                        <td>
                                            {d.vehicleNumber}
                                        </td>
                                        <td>
                                            {d.bookDate}
                                        </td>
                                        <td>
                                            {d.cost}
                                        </td>
                                    </tr>
                                })}
                        </tbody>
                    </Table>
                </div>
                <div style={{}}>
                    {/* <Link to="/addEnquiry"><Button style={{ backgroundColor: "#007580", float: "left", marginLeft: "150px" }}>Raise Enquiry</Button></Link> */}
                    <Link to="/newService"><Button style={{ backgroundColor: "#007580", float: "right", marginRight: "150px" }}>Raise New Service</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default SeriveHistoryComponent