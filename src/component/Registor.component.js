
import React, {useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import swal from 'sweetalert'
const Registor = () =>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    const addData = async() => {
        const registor = {
            username:username,
            password:password,
            email:email
        }
        await axios.post('http://localhost:4000/user/create',registor)
        .then((res) => {
            console.log(res)
            console.log(res.data)
            if(res['statusText'] === 'OK' && res.data['Message'] === 'successfully'){
                console.log('RegistorSuccessfully');
                swal({
                    title:"Success",
                    text: res.data['Message'],
                    icon:"success",
                    buttons:false,
                    timer:2000
                })
            }
        })
    }
    const onChangeUsername = (e) =>{
        setUsername(e.target.value);
    }
    const onChangePassword = (e) =>{
        setPassword(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addData();
    }
    return (
        <div>
            <Container>
                <Row className='d-flex justify-content-center p-4'>
                    <Col md="12" sm="6" className='d-flex justify-content-center flex-column align-items-center'>
                        <p>Registor page</p>
                        <Form className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                            <label htmlFor="">username</label>
                            <input type="text" name="username" id="username" className='m-1' onChange={onChangeUsername} />
                            <label htmlFor="">password</label>
                            <input type="password" name="password" id="password" className='m-1' onChange={onChangePassword}/>
                            <label htmlFor="">email</label>
                            <input type="email" name="email" id="email" className='m-1' onChange={onChangeEmail}/>
                            <input type="submit" name="submit" id="registor" value="Registor" className='btn btn-primary m-1' />
                            <a href="/Login">back to login</a>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Registor;