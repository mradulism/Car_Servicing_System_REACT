import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
import { Table } from 'reactstrap'
import { enquiryActions } from '../state';
import fire from '../Firebase';
import AuthenticationService from '../AuthService/AuthenticationService';

const EnquiryHistoryComponent = () => {
    const dispatch = useDispatch();
    const enquirys = useSelector(state => state.enquirys)
    //console.log(serviceData);
    useEffect(() => {
        dispatch(enquiryActions.getEnquiry());

    }, [])
    return (
        <div>
            <div>
                <div style={{ width: "80%", height: "auto", marginLeft: "auto", marginRight: "auto"}}>
                    <Table striped bordered hover style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#007580", backgroundColor: "", border: "2px solid #007580", marginTop: "10px", marginBottom: "50px" }}>
                        <thead style={{ textAlign: "center", backgroundColor: "#007580", color: "white" }}>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Details</th>
                                <th>Response</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enquirys.filter((data) => data.userId == sessionStorage.getItem("authenticatedUserId")).map((enquiry) => {
                                    return <tr>
                                        <td>{enquiry.name}</td>
                                        <td>{enquiry.email}</td>
                                        <td>{enquiry.phoneno}</td>
                                        <td>{enquiry.details}</td>
                                        <td>{enquiry.response}</td>
                                    </tr>
                                })}
                        </tbody>
                    </Table>
                </div>
                <div style={{}}>
                    {/* <Link to="/addEnquiry"><Button style={{ backgroundColor: "#007580", float: "left", marginLeft: "150px" }}>Raise Enquiry</Button></Link> */}
                    <Link to="/raiseEnquiry"><Button style={{ backgroundColor: "#007580", float: "right", marginRight: "150px" }}>Raise New Enquiry</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default EnquiryHistoryComponent