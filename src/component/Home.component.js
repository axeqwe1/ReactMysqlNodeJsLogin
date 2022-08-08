import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { generatePath } from 'react-router-dom'
const Home = () => {

    const [data, setData] = useState([]);
    const location = useLocation();
    const path = generatePath('../Home/:username/EditUser',{
      username:location.state.username
  })
    
    useEffect(() => {
        const fetchData = async() => {
            await axios.get(`http://localhost:3000/user/read/${location.state.username}`)
            .then((res) => {
              setData(res.data);
              console.log(res.data)
              console.log(location.state.username)
            });
    }
        fetchData()
    }, []);
    return (
        <div>
          {/* {JSON.stringify(data)} */}
            <h1>Welcome {location.state.username}</h1>
            {
              <table>
                <thead>
                  <tr>
                    <th>username</th>
                    <th>password</th>
                    <th>email</th>
                    <th>action</th>
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
                            <td>
                              <a href={path} className='btn btn-warning'>EDIT</a>
                              <a href='' className='btn btn-danger'>DELETE</a>
                            </td>
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