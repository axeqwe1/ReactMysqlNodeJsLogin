import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Home = () => {

    const [data, setData] = useState([]);
    const location = useLocation();
    useEffect(() => {
        const fetchData = async() => {
            await axios.get(`http://localhost:3000/user/read/${location.state.username}`)
            .then((res) => {
              setData(res.data);
              console.log(location.state.username)
            });
    }
        fetchData()
    }, []);
    return (
        <div>
          {/* {JSON.stringify(data)} */}
            <h1>Read Username in {location.state.username}</h1>
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