import React,{useEffect,useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';



const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            await axios.get('http://localhost:3000/user/read')
            .then((res) => {
              setData(res.data)
            });
    }
        fetchData()
    }, []);
    return (
        <div>
            <h1>Read Username in database</h1>
            {
              <table>
                <thead>
                  <tr>
                    <th>username</th>
                    <th>password</th>
                    <th>email</th>
                  </tr>
                </thead>
                {data.map(
                  (item) => {
                      return (
                        <tbody key={item.ID}>
                          <tr>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.email}</td>
                          </tr>
                        </tbody>
                      );
                    })} 
              </table>
            }
        </div>
    );
}
export default Home;