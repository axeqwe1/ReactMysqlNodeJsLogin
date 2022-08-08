import React, {useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate,generatePath} from 'react-router-dom'
import axios from "axios"
import registor from './Registor.component'

function Login(props) {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([])
    const navigator = useNavigate();
    const path = generatePath('../Home/:username',{
        username:username
    });
    const onChangeUsername = (e) =>{
        setUsername(e.target.value);
        
     }
     const onChangePassword = (e) =>{
        setPassword(e.target.value);
        
     }
     const handleonSubmit = async(e) =>{
         e.preventDefault();
         postData()
     }
    const postData = async() =>{
       const user = {
        username:username,
        password:password
       }
       await axios.post('http://localhost:3000/user/signIn',user)
       .then((res) => {
        console.log(res)
        console.log(res.data);
        if(res['status'] === 200 && !res.data > -1){
            console.log('okay')
            navigator(path, { replace: true,state:{username}});
        }
       }).then(() => {
       })
    }
    return(
        <div className=''>
            <Container>
                <Row className='d-flex justify-content-center p-4'>
                    <Col md="12" sm="6" className='d-flex justify-content-center flex-column align-items-center'>
                        <p>Login page</p>
                        <Form className='d-flex flex-column align-items-center' onSubmit={handleonSubmit}>
                            <input type="text" name="username" id="username" className='m-1' onChange={onChangeUsername} />
                            <input type="password" name="password" id="password" className='m-1' onChange={onChangePassword}/>
                            <input type="submit" name="submit" id="login" value="Login" className='btn btn-primary m-1'/>
                            <a href="/registor">Registor</a>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;