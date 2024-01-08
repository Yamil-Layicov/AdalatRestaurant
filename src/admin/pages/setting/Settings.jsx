import "./settings.scss";
import { useEffect, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { toast } from "react-toastify";
import api from "../../api/posts";

const labels=["Ünvan","Email","Tel-1","Tel-2","Qanunlar"]

const Settings = () => {
  const [settings, setSettings] = useState({
    address: "",
    email: "",
    phone_1: "",
    phone_2: "",
    rights: "",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("settings");

        setSettings((prevSettings) => ({
          ...Object.fromEntries(
            Object.entries(response.data)
              .map(([key, value]) =>
                prevSettings.hasOwnProperty(key) ? [key, value] : null
              )
              .filter(Boolean)
          ),
          previousLogo: response.data.logo,
        }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({ ...prevSettings, [name]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    setSettings((prevSettings) => ({
      ...prevSettings,
      logo: file,
      previousLogo: file ? URL.createObjectURL(file) : null,
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(settings).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await api.post("settings", formData);
      if(response){
        window.location.reload()
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="adminSettings">
      <h4>Tənzimləmələr</h4>
      <div className="intoSettings">
        <form onSubmit={handleUpload}>
          {Object.entries(settings).map(
            ([key, value],index) =>
              key !== "previousLogo" &&
              key !== "logo" && (
                <div className="inputs" key={key}>
                  <label>{labels[index]} *</label>
                  <input
                    type="text"
                    name={key}
                    value={value}
                    onChange={handleInputChange}
                  />
                </div>
              )
          )}
          <div className="imageFile">
            <div className="logoBox">
              <label htmlFor="logo">
                <div className="logo">
                  <span>
                    <FiUploadCloud />{" "}
                  </span>
                  <span className="text">Logo</span>
                </div>
                <img src={settings.previousLogo} alt="" />
              </label>
              <input
                id="logo"
                name="logo"
                type="file"
                accept="image/*"
                onChange={handleImage}
              />
            </div>
          </div>
          <button type="submit">Yadda saxla</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
