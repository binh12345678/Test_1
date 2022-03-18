import React, { useState } from "react";
import "./login.css";
import { BiUserCircle } from "react-icons/bi";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Loginform({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const hadleSubmit = (e) => {
    e.preventDefault();
    Login(details);
    
  };

  return (
    <div className="tong">
      <div className="contanner">
        <div className="Formframes">
          <div className="title">
            <h2>Đăng Nhập</h2>
          </div>
          <form className="Form" onSubmit={hadleSubmit}>
            <div className="forminter">
              <i>
                {" "}
                <BiUserCircle style={{ color: "white" }} />
              </i>
              <input
                type="text"
                placeholder="tên đăng nhập..."
                id="name"
                name="name"
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
                value={details.name}
              />
              <br />
              <i>
                <MdEmail style={{ color: "white" }} />
              </i>
              <input
                type="email"
                id="mail" 
                name="mail"
                placeholder=" nhập email... "
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
              <br />
              <i>
                <FaKey style={{ color: "white" }} />
              </i>
          
              <input
                type="password"
                placeholder=" nhập mật khẩu..."
                id="password"
                name="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
              <br />
              {error != "" ? <div id="error"> {error}</div> : ""}
              <button onClick={hadleSubmit}> ĐĂNG NHẬP </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginform;
