import { useState, useEffect, lazy, Suspense } from "react";
import "./adminAbout.scss";

const EditAbout = lazy(() => import("./editAbout/EditAbout"));

const AdminAbout = () => {
  const [aboutData, setAboutData] = useState([]);
  const [editPage, setEditPage] = useState(false);

  useEffect(() => {
    fetch("https://api.hill.az/api/about/1")
      .then((res) => res.json())
      .then((res) => setAboutData(res));
  }, []);

  const handleAboutEdit = () => {
    setEditPage(true);
  };

  return (
    <div className="adminAboout">
      <h1>Haqqımızda</h1>
      <div className="mainContent">
        <div key={aboutData.id}>
          {/* {aboutData.content && (
            <div>
              <div>
                {aboutData.content.split("\n").map((data) => (
                  <p key={data} style={{ marginBottom: "30px" }}>
                    {data}
                  </p>
                ))}
              </div>
              <img style={{ marginRight: "20px" }} src={aboutData.image_1} alt="" />
              <img src={aboutData.image_2} alt="" />
            </div>
          )} */}
          <h1>Content</h1>
        </div>
        <div>
          <button onClick={handleAboutEdit} className="aboutEdit">
            Redakte et
          </button>
          {editPage && (
            <Suspense fallback={<div>Loading...</div>}>
              <EditAbout aboutData={aboutData} setEditPage={setEditPage} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAbout;
