import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import axios from 'axios'

const EditUser = (props) =>{
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    
    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        EditData();
    }
    const EditData = async() =>{
        const editdata = {
            username:username,
            password:password,
            email:email
        }
        await axios.post(`http://localhost:3000/user/update/:username`,editdata)
        .then((res) => { 
            console.log(res.data)
        })
    }
    return(
        <>
            <Container>
            <h1>EditProfile</h1>
                <Row>
                    <Col>
                        <Form className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                            <label>Username</label>
                            <input type="text" name="username" id="username" className='m-1'  onChange={onChangeUsername}/>
                            <label>Password</label>
                            <input type="password" name="password" id="password" className='m-1'onChange={onChangePassword} />
                            <label>Email</label>
                            <input type="email" name="email" id="email" className='m-1' onChange={onChangeEmail}/>
                            <input type="submit" name="submit" id="submit" value="EDIT" className='btn btn-primary'/>
                            <a href="/Home">back</a>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EditUser ;