import { useEffect, useState } from "react";
import "./editModal1.scss";

const EditModal1 = ({ setEditPage1 }) => {
  const [footerContent2, setFooterContent2] = useState("");

  useEffect(() => {
    fetch("https://api.hill.az/api/footer/2")
      .then((res) => res.json())
      .then((res) => {
        setFooterContent2(res.content), console.log(res);
      });
  }, []);

  const handleTextChange = (e) => {
    setFooterContent2(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    fetch("https://api.hill.az/api/footer/2", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: footerContent2 }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("PUT response:", res);
        window.location.reload()
      });
  };

  return (
    <div className="mainEditModal1">
      <div className="editModal">
        <form
          onSubmit={handleUpload}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <textarea
            value={footerContent2 || ""}
            onChange={handleTextChange}
            cols="45"
            rows="17"
            type="text"
          />
          <button type="submit">Yadda saxla</button>
        </form>
      </div>
      <div className="after" onClick={() => setEditPage1(false)}></div>
    </div>
  );
};

export default EditModal1;
