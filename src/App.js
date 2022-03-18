import { useState } from "react";
import "./App.css";
import Loginform from "./component/login";
import { FaUserAstronaut } from "react-icons/fa";
import {BsSearch} from "react-icons/bs";
function App() {
  const admin = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const products = [
    {
    id:1,
    name:'điện thoại',
    amount: 12
    },
    {
      id:2,
    name:'laptop',
    amount: 20
    },
    {
      id:3,
      name:'máy tính để bàn',
      amount:100
    },
    {
      id:4,
      name:'điện thoại samsung',
      amount:100
    },
    {
      id:5,
      name:'điện thoại nokia',
      amount:100
    },
    {
      id:6,
      name:'điện thoại Oppo',
      amount:100
    },
    {
      id:7,
      name:'điện thoại Iphone',
      amount:100
    },
    {
      id:8,
      name:'điện thoại samsung',
      amount:100
    },
  ];

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (details.email === admin.email && details.password === admin.password ) {
      setUser({
        email: details.email,
        name: details.name,
      });
    }else{
      setError( "lỗi đăng nhập" )
    }
  };
  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
     {user.email !== "" ? (
      <div className="contaner">
        <div className="blockleft">
          <div className='logo'>
            <FaUserAstronaut  id="iconuser" />
            <h4>Xin chào: {user.name}</h4>
             <button  onClick={Logout}>logout</button>
          </div>
        </div>
        <div className="blockright">
      
        
       
          <div className="table">
            <h3>danh sách sản phẩm</h3>
              <table>
              <tr>
                <th>stt</th>
                <th>tên sản phẩm</th>
                <th>số lượng</th>
              </tr>
          {products.map((pr, id)=>{
            return(
              <tr key={id}>
                <td>{pr.id}</td>
                <td>{pr.name}</td>
                <td>{pr.amount}</td>
              </tr>
              
              )}) }
            </table>
          </div>
        </div>
      </div>
     ):   <Loginform Login={Login} error={error} /> }
    </div>
  );
}
//   return (
//     <div className="App">
//       {user.email !== "" ? (
//         <div className="contaner">
//           <div className="blockleft">
//               thông tin
//           </div>
//           <div className="blockright">
//               list
//           </div>
//         </div>

//       ) : (
//         <Loginform Login={Login} error={error} />
//       )}
//     </div>
//   );
// }

export default App;
// <div className="contaner">

//   <input value="Logout" type="button" />
// </div>
