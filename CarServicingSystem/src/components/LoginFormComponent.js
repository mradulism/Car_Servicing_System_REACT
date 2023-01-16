import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button, Alert } from 'reactstrap'
import AuthenticationService from '../AuthService/AuthenticationService'
import fire from '../Firebase'
const LoginFormComponent = () => {
    const navigate = useNavigate();

    const [loginSuccess, setLoginSuccess] = useState(true);

    const [userList, setUserList] = useState([]);
    //fetching all users from db.json   
    const fetchData = async () => {
        // fire.auth().signOut();

        const data = await fetch('http://localhost:5000/users');
        const response = await data.json();
        setUserList(response);
    }
    useEffect(() => {
        fetchData();
    }, [])


    //taking credintial from below login form
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const changeHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });

    }

    //validating credentials using Authentication service
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('inputs are', credentials.username, credentials.password);
        console.log('userList', userList);
        // admin auth

        fire.auth().signInWithEmailAndPassword(credentials.username, credentials.password)
            .then((userCredential) => {
                // Signed in 
                let temp = AuthenticationService.login(userList, credentials.username, credentials.password, userCredential.user.uid);
                if (temp)
                    navigate('/serviceRequestDashboard', {
                        state: {
                            userId: sessionStorage.getItem('authenticatedUserId'),
                            username: sessionStorage.getItem('authenticatedUsername')
                        }
                    })
                else
                    setLoginSuccess(false);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });


        let temp = AuthenticationService.login(userList, credentials.username, credentials.password);
        console.log(temp)
        //setLoginSuccess(temp);

        console.log('loginsucess', loginSuccess);
        // if (temp)
        //     navigate('/serviceRequestDashboard', {
        //         state: {
        //             userId: sessionStorage.getItem('authenticatedUserId'),
        //             username: sessionStorage.getItem('authenticatedUsername')
        //         }
        //     })
        // else
        //     setLoginSuccess(false);

    }

    //login Component
    return (
        <div>
            <Form className='container w-50 h-auto d-flex my-5' onSubmit={(e) => submitHandler(e)} >
                <div style={{ width: '100%', "border": "solid 0.5px #C0C0C0", "padding": "15px", "alignContent": "center", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    <div style={{
                        "backgroundColor": "#007580", "margin": "0px 0px 25px 0px", "width": "100%", "height": "40px",
                        "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px", "textAlign": "center"
                    }}>
                        <h5 style={{ "color": "white", "paddingTop": "5px" }}>Login</h5>
                    </div>
                    <FormGroup className='d-flex'>
                        <div className='p-2'>
                            <Label for="examplePassword"> Username </Label>
                        </div>
                        <Input id="exampleEmail" name="username" placeholder="Enter Username" type="text"
                            value={credentials.username} onChange={(e) => changeHandler(e)} />
                    </FormGroup>
                    <FormGroup className='d-flex'>
                        <div className='p-2'>
                            <Label for="examplePassword">Password</Label>
                        </div>
                        <Input id="examplePassword" name="password" placeholder="Enter password" type="password"
                            value={credentials.password} onChange={(e) => changeHandler(e)} />
                    </FormGroup>
                    <Button style={{ "backgroundColor": "#007580" }}>Login</Button><br /><br />
                    {!loginSuccess &&
                        <Alert color="danger">
                            Bad Credentials
                        </Alert>}
                    <p>Create an account <Link to="/registration">Signup here</Link></p>

                    <div style={{ float: "left", fontSize: "13px", color: "#007580" }}>
                        <Link to="/adminLogin">Login as Admin</Link>
                    </div>

                </div>
            </Form>
        </div>
    )
}

export default LoginFormComponent