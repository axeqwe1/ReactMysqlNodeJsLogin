import './App.css';
import {BrowserRouter as Router , Switch, Route, Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <Router>
      <div className="App">
          <Nav className="navbar navbar-dark bg-dark">
            <Container>
            <a className='navbar-brand'>
              <Link to ={"/"} className="nav-link">
                Brand
              </Link>
            </a>
              <Nav className='justify-content-end'>
                <Nav>
                  <Link to={"/"} class="nav-link">
                        HOME
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/Login"} class="nav-link">
                        Login
                  </Link>
                </Nav>
              </Nav>
            </Container>
        </Nav>
        
      </div>
    </Router>
  );
}

export default App;
