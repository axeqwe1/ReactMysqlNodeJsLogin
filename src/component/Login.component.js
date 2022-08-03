import React, {useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios"
function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const onChangeUsername = (e) =>{
        setUsername(e.target.value);
    }
    const onChangePassword = (e) =>{
        setPassword(e.target.value);
    }
    const onSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <div className=''>
            <Container>
                <Row className='d-flex justify-content-center p-4'>
                    <Col md="12" sm="6" className='d-flex justify-content-center flex-column align-items-center'>
                        <p>Login page</p>
                        <Form className='d-flex flex-column align-items-center'>
                            <input type="text" name="username" id="username" className='m-1' onChange={onChangeUsername} />
                            <input type="password" name="password" id="password" className='m-1'/>
                            <input type="submit" name="submit" id="login" value="Login" className='btn btn-primary m-1' onChange={onChangePassword}/>
                            <a href="/">Registor</a>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;