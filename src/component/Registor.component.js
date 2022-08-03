
import React, {useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css';
const Registor = () =>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const onChangeUsername = (e) =>{
        setUsername(e.target.value);
    }
    const onChangePassword = (e) =>{
        setPassword(e.target.value);
    }
    return (
        <div>
            <Container>
                <Row className='d-flex justify-content-center p-4'>
                    <Col md="12" sm="6" className='d-flex justify-content-center flex-column align-items-center'>
                        <p>Registor page</p>
                        <Form className='d-flex flex-column align-items-center'>
                            <label htmlFor="">username</label>
                            <input type="text" name="username" id="username" className='m-1' onChange={onChangeUsername} />
                            <label htmlFor="">password</label>
                            <input type="password" name="password" id="password" className='m-1'/>
                            <label htmlFor="">email</label>
                            <input type="email" name="email" id="email" className='m-1'/>
                            <input type="submit" name="submit" id="Registor" value="Registor" className='btn btn-primary m-1' onChange={onChangePassword}/>
                            <a href="/Login">back to login</a>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Registor;