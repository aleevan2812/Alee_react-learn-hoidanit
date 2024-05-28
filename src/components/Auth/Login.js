import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    // validate

    // submit api
    let data = await postLogin(email, password);
    console.log(">>> res Login: ", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/");
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
      <div className="header">
        <span>Dont have an account yet</span>
        <button>Sign up</button>
      </div>
      <div className="title">This is title</div>
      <div className="content-form col-4 mx-auto">
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
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <span className="forgot-password">Forgot pass</span>
        <div>
          <button className="btn-submit" onClick={() => handleLogin()}>
            Login to Alee
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

export default Login;
