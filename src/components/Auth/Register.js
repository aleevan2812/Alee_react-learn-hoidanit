import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin, postRegister } from "../../services/apiService";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleRegister = async () => {
    // validate

    // submit api
    let data = await postRegister(username, email, password);
    console.log(">>> res Register: ", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/login");
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  const handleGoBackHome = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <span className="forgot-password">Forgot pass</span>
        <div>
          <button
            className="btn-submit"
            onClick={() => {
              handleRegister();
            }}
          >
            Register
          </button>
        </div>
        <div className="text-center">
          <span className="back" onClick={() => handleGoBackHome()}>
            ⬅️Go back Home
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
