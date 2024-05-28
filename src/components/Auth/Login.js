import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    alert("Just click Login");
  };

  return (
    <div className="login-container">
      <div className="header">This is header</div>
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
      </div>
    </div>
  );
};

export default Login;
