import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
    return (
        <Container>
            <Row style={{marginTop:"10px"}}>
                <Col md={4}>
                    <Card className="m-2" style={{ "max-height": "400px","min-height": "400px",'width': '18rem', "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <Card.Img height={"300px"} width={'300px'} src='https://img.freepik.com/free-vector/illustration-characters-fixing-cogwheel_53876-40796.jpg?w=740&t=st=1673068199~exp=1673068799~hmac=acf290ba6e7b1c008bb23c86bddacb2f98fbfdc5fb4848c8a0ae4da641cc371e' />
                        <Card.Body>
                            
                            <Card.Title>Mechanic</Card.Title>
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text></Card.Text>
                            <Button href='/viewMechanic' style={{backgroundColor:"#007580"}}>Manage Mechanic</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="m-2" style={{ "max-height": "400px","min-height": "400px",'width': '18rem', "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <Card.Img height={"300px"} width={'300px'} src='https://img.freepik.com/premium-vector/boy-icon-flat-user-avatar_158483-1595.jpg?w=740' />
                        <Card.Body>
                            <Card.Title>User</Card.Title>
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text></Card.Text>
                            {/* <Button style={{backgroundColor:"#4C0033"}}><Link to="/viewUser" style={{color:"white"}}>View</Link></Button> */}
                            <Button href='/viewUser' style={{backgroundColor:"#007580"}}>Manage User</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="m-2" style={{ "max-height": "400px","min-height": "400px",'width': '18rem', "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <Card.Img height={"300px"} width={'300px'} src='https://img.freepik.com/free-vector/car-service-center-accessories-composition_98292-7431.jpg?w=740&t=st=1673068598~exp=1673069198~hmac=4febdce971b8dd2a08c772e052a51d1f2db335bd08b7c7b0454f00e4698cb6aa' />
                        <Card.Body>
                            <Card.Title>Services</Card.Title>
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text></Card.Text>
                            <Button href='/viewService' style={{backgroundColor:"#007580"}}>Manage Services</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} style={{marginTop:"50px",marginBottom:"50px"}}>
                    <Card className="m-2" style={{ "max-height": "400px","min-height": "400px",'width': '18rem', "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <Card.Img height={"300px"} width={'300px'} src='https://img.freepik.com/premium-vector/car-company-logo-design-new-style-design-2022_631317-10.jpg?w=740' />
                        <Card.Body>
                            <Card.Title>Vehicle</Card.Title>
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text></Card.Text>
                            <Button href='/viewVehicle' style={{backgroundColor:"#007580"}}>Manage Vehicle</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} style={{marginTop:"50px",marginBottom:"50px",}}>
                    <Card className="m-2" style={{ "max-height": "400px","min-height": "400px",'width': '18rem', "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <Card.Img height={"300px"} width={'300px'} src='https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1673371092~exp=1673371692~hmac=1dabdffb9117eb8beea82654d81bbc74122f936503d6c2d4cc6f82ff49124fa2' />
                        <Card.Body>
                            <Card.Title>Enquiry</Card.Title>
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text></Card.Text>
                            <Button href='/viewEnquiry' style={{backgroundColor:"#007580"}}>Manage Enquiry</Button>
                        </Card.Body>
                    </Card>
                </Col>                
            </Row>
        </Container>
    )
}

export default AdminDashboard