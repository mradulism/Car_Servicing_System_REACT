import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Label } from 'reactstrap'
import Form from 'react-bootstrap/Form';
import SingleOfferedService from './SingleOfferedService';
import { serviceActions, vehicleActions } from '../state';

const NewServiceComponent = () => {
  //var initialization for storing the selected values
  const [vehicleSelect, setVehicleSelect] = useState();
  const [YOM, setYOM] = useState();
  const [dateOfService, setDateOfService] = useState();
  const [vehicleNumber, setVehicleNumber] = useState();
  const [error, setError] = useState({
    vehicleNumber: ""
  })

  //setting and using dispatch for getting the vehicle Data
  const disptach = useDispatch();
  const vehicleData = useSelector(state => state.vehicles);
  console.log("vehicle Data from Comp ", vehicleData);

  //setting and using dispatch for getting offered Services data
  //const disptach = useDispatch();
  const offeredServiceData = useSelector(state => state.services);
  console.log("offered Service", offeredServiceData);

  //calling dispatch on rendering of component
  useEffect(() => {
    disptach(vehicleActions.getAllVehicle());
    disptach(serviceActions.getAllOfferedService())
  }, [])

  // validation for disabling Past Dates
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  // validation for disabling Future Dates
  const disableFutureDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 4).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  // validation function for Vehicle Number
  const validateVehicleNumber = (vehicleNum) => {
    let regex = new RegExp(/^[A-Z]{2}[-][0-9]{1,2}[-][A-Z]{1,2}[-][0-9]{4}/);
    setVehicleNumber(vehicleNum.toUpperCase());
    //console.log(regex.test(vehicleNum))
    if (!regex.test(vehicleNum.toUpperCase())) {
      setError({ ...error, vehicleNumber: "Please enter valid vehicle number" })
    }
    else {
      setError({ ...error, vehicleNumber: "" })
    }
  }

  return (
    <div>
      {/* this div contains all inputs */}
      <div className='container w-50 h-auto my-5' style={{ display: "d-flex wrap", width: '100%', "border": "solid 0.5px #C0C0C0", "padding": "15px", "alignContent": "center", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <div style={{
          "backgroundColor": "#007580", "margin": "0px 0px 25px 0px", "width": "100%", "height": "40px",
          "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px", "textAlign": "center"
        }}>
          <h5 style={{ "color": "white", "paddingTop": "5px" }}>Raise New Service Request</h5>
        </div>
        {/* div for selecting vehicle category */}
        <div>
          <Label style={{ fontSize: "18px" }}>
            Select your Vehicle Category
          </Label>
          <Form.Select onChange={(e) => {
            setVehicleSelect(e.target.value)
          }}>
            <option value="">Select</option>
            {
              vehicleData.map((vehicle) => {
                return <option key={vehicle.id} value={vehicle.type}>{vehicle.type}</option>
              })
            }
          </Form.Select>
        </div>

        {/* div for Inserting Vehicle number */}
        <div>
          <Form.Label >Vehicle Number</Form.Label>
          <Form.Control className={error.vehicleNumber ? "is-invalid" : ""} invalid onChange={(e) => { validateVehicleNumber(e.target.value) }} type="text" placeholder='MP-09-ZZ-1111' value={vehicleNumber} maxLength={13} />
          <small className="invalid-feedback">{error.vehicleNumber}</small>
        </div>

        {/* div for selecting Year of Manfg. */}
        <div>
          <Label>
            Select Year of Manufacturing of your Car
          </Label>
          <Form.Select onChange={(e) => {
            setYOM(e.target.value);
          }}>
            <option value="">Select</option>
            {
              [...Array(25)].map((_, yom) => {
                return <option key={(new Date().getFullYear() - 24) + yom} value={(new Date().getFullYear() - 24) + yom}>{(new Date().getFullYear() - 24) + yom}</option>
              })
            }
          </Form.Select>
        </div>

        {/* div for selecting date */}
        <div>
          <Form.Label >Select Date for Service</Form.Label>
          <Form.Control onChange={(e) => {
            setDateOfService(e.target.value)
          }} type="date" min={disablePastDate()} max={disableFutureDate()} />
        </div>


        {/* div for selecting and display of Offered Service Cards */}
        <div className="container-fluid" style={{ marginTop: "5%", display: 'flex', flexWrap: 'wrap',justifyContent:'space-evenly' }}>
          {
            offeredServiceData.map((offerServices) => {
              return <SingleOfferedService offeredService={offerServices} vehicle={vehicleSelect} vehicleNumber={vehicleNumber} YOM={YOM} serviceDate={dateOfService} />
            })
          }
        </div>


      </div>
    </div>
  )
}

export default NewServiceComponent