import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button, Alert } from 'reactstrap'
import AuthenticationService from '../AuthService/AuthenticationService'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../state';
import { async } from '@firebase/util';



const RegistrationComponent = () => {
    const auth = getAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userDetails, setuserDetails] = useState({ name: '', username: '', password: '', uid: '' });

    const changeHandler = (e) => {
        setuserDetails({ ...userDetails, [e.target.name]: e.target.value });
    }
    const registerHandler=()=>{

    }
    const submitHandler = async (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, userDetails.username, userDetails.password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user.uid;
                userDetails.uid = user;
                console.log('userDetails', userDetails);
                dispatch(userActions.postUserUid(userDetails));

                // sessionStorage.setItem("authenticatedUserId", user.id);
                // sessionStorage.setItem("authenticatedUsername", user.email);
                // sessionStorage.setItem("authenticatedFirstName", user.name);
                // const data = await fetch('http://localhost:5000/users');
                // const userList = await data.json();

                // AuthenticationService.login(userList,userDetails.username,userDetails.password,user);
                window.location.href='http://localhost:3000/serviceRequestDashboard'
                //navigate('/serviceRequestDashboard');

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return (
        <div>

            <Form className='container w-50 h-auto d-flex my-5' onSubmit={(e) => submitHandler(e)} >
                <div style={{ width: '100%', "border": "solid 0.5px #C0C0C0", "padding": "15px", "alignContent": "center", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    <div style={{
                        "backgroundColor": "#007580", "margin": "0px 0px 25px 0px", "width": "100%", "height": "40px",
                        "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px", "textAlign": "center"
                    }}>
                        <h5 style={{ "color": "white", "paddingTop": "5px" }}>Register</h5>
                    </div>
                    <FormGroup className='d-flex'>
                        <div className='col-md-2 p-2'>
                            <Label for="examplePassword"> Name </Label>
                        </div>
                        <Input id="name" name="name" placeholder="Enter Name" type="text"
                            value={userDetails.name} onChange={(e) => changeHandler(e)} />
                    </FormGroup>

                    <FormGroup className='d-flex'>
                        <div className='col-md-2 p-2'>
                            <Label for="examplePassword"> Username </Label>
                        </div>
                        <Input id="exampleEmail" name="username" placeholder="Enter Username" type="text"
                            value={userDetails.username} onChange={(e) => changeHandler(e)} />
                    </FormGroup>
                    <FormGroup className='d-flex'>
                        <div className='col-md-2 p-2'>
                            <Label for="examplePassword">Password</Label>
                        </div>
                        <Input id="examplePassword" name="password" placeholder="Enter password" type="password"
                            value={userDetails.password} onChange={(e) => changeHandler(e)} />
                    </FormGroup>
                    <Button style={{ "backgroundColor": "#007580" }}>Register</Button><br /><br />
                    <div style={{ float: "left", fontSize: "13px", color: "#007580" }}>
                        <Link to="/login">Login as User</Link>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default RegistrationComponent