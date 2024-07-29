import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./login.scss";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://api.edal-et.az/api/login",
      formData
    );
    setUser(response?.data?.token);
    navigate("/admin");
  };

  return (
    <div className="loginPage">
      <form onSubmit={handleSubmit}>
        <h3>Nanə Admin Panel</h3>
        <label>E-poçt</label>
        <input
          type="text"
          name="email"
          placeholder="e-poçt"
          id="username"
          onChange={handleChange}
        />

        <label>Parol</label>
        <input
          type="password"
          name="password"
          placeholder="parol"
          id="password"
          onChange={handleChange}
        />

        <button type="submit">Daxil ol</button>
      </form>
    </div>
  );
};

export default Login;
