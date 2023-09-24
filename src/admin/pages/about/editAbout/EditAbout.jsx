import { useEffect, useState } from "react";
import "./editAnout.scss";

const EditAbout = ({ setEditPage }) => {
  const [content, setContent] = useState("");

  const [image_1, setImage1] = useState(null);
  const [image_2, setImage2] = useState(null);
  const [previousImage1, setPreviousImage1] = useState(null);
  const [previousImage2, setPreviousImage2] = useState(null);

  useEffect(() => {
    fetch("https://api.hill.az/api/about/1")
      .then((res) => res.json())
      .then((res) => setContent(res.content));
  }, []);

  const handleImage1Change = (e) => {
    const file = e.target.files[0];
    setImage1(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviousImage1(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviousImage1(null);
    }
  };

  const handleImage2Change = (e) => {
    const file = e.target.files[0];
    setImage2(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviousImage2(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviousImage1(null);
    }
  };

  const handleTextChange = (e) => {
    setContent(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", content);
    formData.append("image_1", image_1);
    formData.append("image_2", image_2);

    fetch("https://api.hill.az/api/about", {
      method: "POST",
      body: formData,
    }); 

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="mainEditModal">
      <div className="editModal">
        <form onSubmit={handleUpload}>
          <textarea
            value={content || ""}
            onChange={handleTextChange}
            cols="60"
            rows="15"
            type="text"
          />
          <div className="imgagesFiles">
            <div>
              <h3>Big Image 1</h3>
              {previousImage1 && (
                <img src={previousImage1} alt="Previous Image 1" />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImage1Change}
              />
            </div>
            <div>
              <h3>Small Image 2</h3>
              {previousImage2 && (
                <img src={previousImage2} alt="Previous Image 2" />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImage2Change}
              />
            </div>
          </div>
          <button style={{ padding: "8px", cursor: "pointer" }} type="submit">
            Yadda saxla
          </button>
        </form>
        <span onClick={() => setEditPage(false)} className="closeModal">
          X
        </span>
      </div>
    </div>
  );
};

export default EditAbout;
