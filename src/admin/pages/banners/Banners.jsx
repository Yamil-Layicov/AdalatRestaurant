import "./banners.scss";
import { useEffect, useState } from "react";
import api from "../../api/posts";
import { FiUploadCloud } from "react-icons/fi";
import { toast } from "react-toastify";

const Banners = () => {

  const [image2, setImage2] = useState(null);
  const [previousImage2, setPreviousImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [previousImage3, setPreviousImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [previousImage4, setPreviousImage4] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response2 = await api.get("banners/menu");
        const response3 = await api.get("banners/gallery");
        const response4 = await api.get("banners/reservation");
        setImage2(response2.data.image);
        setImage3(response3.data.image);
        setImage4(response4.data.image);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

 
  const handleImage2 = (e) => {
    const file = e.target.files[0];
    setImage2(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviousImage2(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviousImage2(null);
    }
  };
  const handleImage3= (e) => {
    const file = e.target.files[0];
    setImage3(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviousImage3(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviousImage3(null);
    }
  };
  const handleImage4 = (e) => {
    const file = e.target.files[0];
    setImage4(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviousImage4(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviousImage4(null);
    }
  };

 
  const handleUpload2 = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image2);
      

      const response2 = await api.post("banners/menu", formData);

      if (response2)
       toast.success("Redaktə olundu")
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpload3 = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image3);
      

      const response3 = await api.post("banners/gallery", formData);

      if (response3)
       toast.success("Redaktə olundu")
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpload4 = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image4);
      

      const response4 = await api.post("banners/reservation", formData);

      if (response4)
       toast.success("Redaktə olundu")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bannersSettings">
      <h4>Banners</h4>
      <div className="intoSettings">
        <form onSubmit={handleUpload2}>
          <div className="imageFile">
            <div className="logoBox">
              <label htmlFor="logo2">
              <div className="logo"> 
                <span><FiUploadCloud /> </span>
                <span className="text">Menyu</span>
              </div>
              <img src={previousImage2 || image2} alt="" />
              </label>
              <input
                id="logo2"
                name="logo2"
                type="file"
                accept="image/*"
                onChange={handleImage2}
              />
            </div>
            <button type="submit">Yadda saxla</button>
          </div>
        </form>
        <form onSubmit={handleUpload3}>
          <div className="imageFile">
            <div className="logoBox">
              <label htmlFor="logo3">
              <div className="logo"> 
                <span><FiUploadCloud /> </span>
                <span className="text">Qalareya</span>
              </div>
              <img src={previousImage3 || image3} alt="" />
              </label>
              <input
                id="logo3"
                name="logo3"
                type="file"
                accept="image/*"
                onChange={handleImage3}
              />
            </div>
            <button type="submit">Yadda saxla</button>
          </div>
        </form>
        <form onSubmit={handleUpload4}>
          <div className="imageFile">
            <div className="logoBox">
              <label htmlFor="logo4">
              <div className="logo"> 
                <span><FiUploadCloud /> </span>
                <span className="text">Rezervasiya</span>
              </div>
              <img src={previousImage4 || image4} alt="" />
              </label>
              <input
                id="logo4"
                name="logo4"
                type="file"
                accept="image/*"
                onChange={handleImage4}
              />
            </div>
            <button type="submit">Yadda saxla</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banners;
