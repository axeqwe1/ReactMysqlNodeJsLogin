import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import { useLocation ,useNavigate ,generatePath} from 'react-router-dom';
const Home = () => {

    const [data, setData] = useState([]);
    const navigator = useNavigate()
    const location = useLocation();
    const [username, setUsername] = useState("");
    const path = generatePath('../Home/:username/EditUser',{
      username:location.state.username
  })
  
    useEffect(() => {
        const fetchData = async() => {
            await axios.get(`http://localhost:4000/user/read/${location.state.data_id}`)
            .then((res) => {
              setData(res.data);
              setUsername(res.data.map((item) => {return item.username}))
              
            });
            localStorage.removeItem('iduser');
            localStorage.removeItem('user');
            

    }
        fetchData()
    }, []);

    const edit = () =>{
      console.log("test")
      navigator(path, { replace: true,state:{username}});;
    }
    const Delete = async() => {
      await axios.delete(`http://localhost:4000/user/delete/${location.state.data_id}`)
      .then((res) => {
        console.log(res.data);
        navigator('/Login',{replace:true});
      });
    }
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
                    console.log(username)
                      return (
                        <tbody key={item.iduser}>
                          <tr>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.email}</td>
                            <td>
                              <a onClick={edit} className='btn btn-warning'>EDIT</a>
                              <button onClick={Delete} className='btn btn-danger'>DELETE</button>
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