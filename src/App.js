import './App.css';
import {BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css'

import Login from './component/Login.component'
import Registor from './component/Registor.component';
function App() {
  return (
    <Router>
      <div className="App">
          <Nav className="navbar navbar-dark bg-dark">
            <Container>
            
              <Link to={"/"} className="nav-link navbar-brand">
                Brand
              </Link>
            
              <Nav className='justify-content-end'>
                <Nav>
                  <Link to={"/"} className="nav-link">
                        HOME
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/Login"} className="nav-link">
                        Login
                  </Link>
                </Nav>
              </Nav>
            </Container>
        </Nav>
      </div>

      <Container>
        <Row>
          <Col md="12">
            <div className="wrapper">
              <Routes>
                <Route exact path='/' element ={<Login/>}/>
                <Route path='/Login' element ={<Login/>}/>
                <Route path='/registor' element ={<Registor/>}/>
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
