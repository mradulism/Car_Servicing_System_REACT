// import React, { useEffect } from 'react'
// import { Button } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// //import { useNavigate } from 'react-router-dom';
// import { Table } from 'reactstrap'
// import { serviceActions } from '../state';
// import fire from '../Firebase';
// import AuthenticationService from '../AuthService/AuthenticationService';

// //import { ServiceAction } from '../State/action-creators/ServiceAction';


// const ServiceRequestComponent = () => {

//     const dispatch = useDispatch();
//     const serviceData = useSelector(state => state.services);
    
//     useEffect(() => {
//         dispatch(serviceActions.getAllServices());
//         // fire.auth().onAuthStateChanged((user)=>{
//         //     if(user){

//         //     }
//         // })

//     }, [])
//     return (
//         <div>
//             <div>
//                 <div style={{ width: "80%", height: "auto", marginLeft: "auto", marginRight: "auto", marginTop: "50px" }}>
//                 <Table striped bordered hover style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",color:"#007580" ,backgroundColor:"",border:"2px solid #007580",marginTop:"10px",marginBottom:"50px"}}>
//                         <thead style={{textAlign:"center",backgroundColor:"#007580",color:"white"}}>
//                             <tr>
//                                 <th>
//                                     ID
//                                 </th>
//                                 <th>
//                                     Service Name
//                                 </th>
//                                 <th>
//                                     Description
//                                 </th>
//                                 <th>
//                                     User Id
//                                 </th>
//                                 <th>
//                                     Vehicle Category
//                                 </th>

//                                 <th>
//                                     Status
//                                 </th>
//                                 <th>
//                                     Vehicle Number
//                                 </th>
//                                 <th>
//                                     Book Date
//                                 </th>
//                                 <th>
//                                     Cost
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 serviceData.filter((data) => data.userId == sessionStorage.getItem("authenticatedUserId")).map((d) => {
//                                     return <tr>

//                                         <td>
//                                             {d.id}
//                                         </td>
//                                         <td>
//                                             {d.serviceName}
//                                         </td>
//                                         <td>
//                                             {d.description}
//                                         </td>
//                                         <td>
//                                             {d.userId}
//                                         </td>
//                                         <td>
//                                             {d.vehicleCategory}
//                                         </td>
//                                         <td>{d.status ? 'open' : 'close'}</td>
//                                         <td>
//                                             {d.vehicleNumber}
//                                         </td>
//                                         <td>
//                                             {d.bookDate}
//                                         </td>
//                                         <td>
//                                             {d.cost}
//                                         </td>
//                                     </tr>
//                                 })}
//                         </tbody>
//                     </Table>
//                 </div>
//                 <div style={{}}>
//                     <Link to="/addEnquiry"><Button style={{ backgroundColor: "#007580", float: "left", marginLeft: "150px" }}>Raise Enquiry</Button></Link>
//                     <Link to="/newService"><Button style={{ backgroundColor: "#007580", float: "right", marginRight: "150px" }}>Raise New Service</Button></Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ServiceRequestComponent

import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ServiceRequestComponent = () => {
  return (
    <Container fluid>
            <div className=" col-md-12 d-flex justify-content-around" style={{marginTop:"10px"}}>
                <Col md={4}>
                    <Card className="my-4 mx-auto" style={{ "max-height": "400px","min-height": "400px",'width': '18rem', "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <Card.Img height={"300px"} width={'300px'} src='https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg?w=740&t=st=1673589001~exp=1673589601~hmac=9620871483b97fc790326ea0e4a1cc167ee05481419284ef2c5cbdd27407762d' />
                        <Card.Body>
                            
                            <Card.Title>Raise Enquiry</Card.Title>
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text></Card.Text>
                            <Link to="/raiseEnquiry"><Button style={{backgroundColor:"#007580"}}>Raise Enquiry</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col md={4}>
                    <Card className="my-4 mx-auto" style={{ "max-height": "400px","min-height": "400px",'width': '18rem', "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <Card.Img height={"300px"} width={'300px'} src='https://img.freepik.com/free-vector/automobile-repair-maintenance-service-concept-illustration-employees-are-checking-repairing-cars-garage-illustration-flat-style_1150-41754.jpg?size=338&ext=jpg&ga=GA1.1.1667452072.1673589196&semt=ais' />
                        <Card.Body>
                            <Card.Title>Raise Services</Card.Title>
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text></Card.Text>
                            <Link to="/newService"><Button style={{backgroundColor:"#007580"}}>Raise Services</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                
                      
            </div>
        </Container>
  )
}

export default ServiceRequestComponent