import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap';
import { serviceActions } from '../state';
import Buttons from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CheckOutComponent = () => {
    const [show,setShow] =useState(false)
    const location = useLocation();
    console.log("checkout location",location.state)
    let tax = parseInt(location.state.offeredService.servicePrice) * 0.10;
    let total = tax + parseInt(location.state.offeredService.servicePrice) ;
    const [postService,setPostService]= useState (
      {
        offeredServiceId:location.state.offeredService.id,
        serviceName : location.state.offeredService.serviceName,
        description: location.state.offeredService.serviceDescription,
        userId: parseInt(sessionStorage.getItem('authenticatedUserId')),
        status: true,
        vehicleNumber:location.state.vehicleNumber,
        vehicleCategory:location.state.vehicle,
        bookDate:location.state.serviceDate,
        cost:total
      })
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCheckOut=(serviceData)=>{
      console.log("handle",serviceData)
      dispatch(serviceActions.postServiceData(serviceData));
      //navigate("/serviceRequestDashboard");
      // navigate("/serviceHistory");
      setShow(true)
    }
    return (
        <div>
      {/* this div contains all inputs */}
      <div className='container w-50 h-auto my-5' style={{ display: "d-flex wrap", width: '100%', "border": "solid 0.5px #C0C0C0", "padding": "15px", "alignContent": "center", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <div style={{
          "backgroundColor": "#007580", "margin": "0px 0px 25px 0px", "width": "100%", "height": "40px",
          "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px", "textAlign": "center"
        }}>
          <h5 style={{ "color": "white", "paddingTop": "5px" }}>Check Out Booking</h5>
        </div>
        <div>
            <h5>Review</h5>
            <div><span>Service Opted</span> : {location.state.offeredService.serviceName}</div>
            <div><span>Service Description</span> : {location.state.offeredService.serviceDescription}</div>
            <div><span>Your Vehicle Number</span>  : {location.state.vehicleNumber}</div>
            <div><span>Your Vehicle Category</span>  : {location.state.vehicle}</div>
            <div><span>Vehicle Manufacturing Year</span> : {location.state.YOM}</div>
            <div><span>Chosen Service Date</span> : {location.state.serviceDate}</div>
            <div><span>Service Cost</span> : &#8377;{location.state.offeredService.servicePrice}</div>
            <div><span>Taxes </span> : &#8377;{tax }</div>
            <div><span>Total  : &#8377;{total }</span></div>

          
        </div>
        <div><Button style={{backgroundColor:"#007580"}} onClick={
          ()=>{
            
            handleCheckOut(postService);
          }
        }>Proceed for Check-out</Button></div>
      </div>
      {show&&<div
      className="modal show"
      style={{ display: 'block', position: 'absolute' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Confirm Your Request</p>
        </Modal.Body>

        <Modal.Footer>
          <Buttons style={{backgroundColor:"red"}} onClick={()=>{setShow(false);}}>Cancel</Buttons>
          <Buttons style={{backgroundColor:"#007580"}} onClick={()=>{setShow(false);navigate("/serviceHistory");}}>Confirm</Buttons>
        </Modal.Footer>
      </Modal.Dialog>
    </div>}
    </div>     
    )
}
export default CheckOutComponent