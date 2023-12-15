import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./adminGallery.scss";
import { FiUploadCloud } from "react-icons/fi";

const AdminGallery = () => {
  const [badDataImgs, setBadDataImgs] = useState("");

  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("fayl seçin", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("https:/api.edal-et.az/api/gallery", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Şəkil əlavə olundu");
        window.location.reload();
      } else {
        alert("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  useEffect(() => {
    fetch("https:/api.edal-et.az/api/gallery")
      .then((res) => res.json())
      .then((res) => {
        setBadDataImgs(res);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https:/api.edal-et.az/api/gallery/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          setBadDataImgs((prevImg) =>
            prevImg.filter((image) => image.id !== id)
          );
        }
        window.location.reload();
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="adminAmburan">
      <h1>Qalareya</h1>
      <div className="content">
        <div className="imgContent">
          {badDataImgs &&
            badDataImgs.map((img, index) => (
              <>
                <div className="imgBox" key={index}>
                  <img style={{objectFit:"cover"}} key={index} src={img.image} />
                  <span
                    onClick={() => handleDelete(img.id)}
                    className="deleteImg"
                  >
                    X
                  </span>
                </div>
              </>
            ))}
        </div>
      </div>

      <div className="amburanForms">
        <form onSubmit={handleSubmit}>
          <div className="chooseFile">
            <label htmlFor="img" className="labelBox">
              <span>
                <FiUploadCloud /> <span>Şəkil yüklə</span>
              </span>
              <input
                id="img"
                name="img"
                className="custom-file-input"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Selected Preview"
              style={{
                maxWidth: "100px",
                maxHeight: "100px",
                objectFit: "cover",
              }}
            />
          )}
          <button type="submit">Əlavə et</button>
        </form>
      </div>
    </div>
  );
};

export default AdminGallery;
