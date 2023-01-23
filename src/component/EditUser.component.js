import React, {useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios"
import swal from 'sweetalert'
import { useLocation ,useNavigate ,generatePath} from 'react-router-dom';
const EditUser = () =>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const location = useLocation();
    useEffect(() => {
        setUsername(location.state.username)
        console.log(username)
    },[])
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
        e.preventDefault();
        EditData();
    }
    const EditData = async() =>{
        
        const editdata = {
            username:username,
            newPassword:password
        }
        await axios.put(`http://localhost:4000/user/update/`,editdata)
        .then((res) => { 
            console.log(res.data)
        })
    }
    return(
        <div>
            <Container>
            <h1>EditProfile</h1>
                <Row>
                    <Col>
                    <Form className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                            
                            <label>Password</label>
                            <input type="password" name="password" id="password" className='m-1'onChange={onChangePassword} />
                            <input type="submit" name="submit" id="edit" value="edit" className='btn btn-primary m-1' />
                            <a href="/Home">back</a>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default EditUser ;