import { useEffect, useState } from "react";
import './editModal.scss'

const EditModal = () => {
  const [footerContent1, setFooterContent1] = useState("");

  useEffect(() => {
    fetch("https://api.hill.az/api/amburan-text/1")
      .then((res) => res.json())
      .then((res) => {
        setFooterContent1(res.content), console.log(res);
      });
  }, []);

  const handleTextChange = (e) => {
    setFooterContent1(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    fetch("https://api.hill.az/api/amburan-text/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: footerContent1 }),
    })
    .then((res) => res.json())
      .then((res) => {
        console.log("PUT response:", res);
        window.location.reload()
      });
  };

  return (
    <div className="amburanEditModal">
      <form
        onSubmit={handleUpload}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <textarea
          style={{ padding: "22px" }}
          value={footerContent1 || ""}
          onChange={handleTextChange}
          cols="30"
          rows="10"
          type="text"
        />
        <button style={{ padding: "8px", cursor: "pointer" }} type="submit">
          Yadda saxla
        </button>
      </form>
    </div>
  );
};

export default EditModal;
