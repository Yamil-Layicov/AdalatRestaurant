import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./login.scss";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  // const { setUser } = useAuth();

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
  
    if (!formData.email || !formData.password) {
      toast.error("E-poçt və parol boş ola bilməz", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (
      formData.email === "jafaraghamaliyev@gmail.com" &&
      formData.password === "cefer123"
    ) {
      try {
        const response = await axios.post(
          "https://api.hill.az/api/login",
          formData
        );
        // setUser(response.data.token);
        navigate("/admin");
        toast.success("Uğurlu giriş", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        toast.error("Server xətası", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.error("E-poçt və ya parol səhvdir", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  

  return (
    <div className="loginPage">
      <form onSubmit={handleSubmit}>
        <h3>Adalat Admin Panel</h3>
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