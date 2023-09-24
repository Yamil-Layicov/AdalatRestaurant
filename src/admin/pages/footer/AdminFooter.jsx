import { useEffect, useState, lazy, Suspense } from "react";
import "./adminFooter.scss";


const EditModal1 = lazy(() => import("./editModal1/EditModal1"));

const AdminFooter = () => {
  const [footerData1, setFootertData1] = useState("");
  const [footerData2, setFootertData2] = useState("");

  const [editPage1, setEditPage1] = useState(false)


  useEffect(() => {
    fetch("https://api.hill.az/api/footer/2")
      .then((res) => res.json())
      .then((res) => {
        setFootertData2(res), console.log(res);
      });
  }, []);

  useEffect(() => {
    fetch("https://api.hill.az/api/footer/1")
      .then((res) => res.json())
      .then((res) => {
        setFootertData1(res), console.log(res);
      });
  }, []);


  const handleAboutEdit1 = () => {
    setEditPage1(true)
  }


  return (
    <>
      <h1 style={{ marginBottom: "40px" }}>Footer</h1>
      <div className="adminFooter">
        <div className="footerBox">
          {/* {footerData1.content && (
              <div>
              <h3 style={{ marginBottom: "20px" }}>Badamdar</h3>
              <div>
                {footerData2.content.split("\n").map((data) => (
                  <p key={data} style={{ marginBottom: "30px" }}>
                    {data}
                  </p>
                ))}
              </div>
            </div>
          )} */}
          <h1>Footer Data</h1>
          <button onClick={handleAboutEdit1} className="aboutEdit">Redakte et</button>
        {editPage1 && (
          <Suspense fallback={<div>Loading...</div>}>
            <EditModal1 setEditPage1={setEditPage1} footerData1={footerData1} footerData2={footerData2}/>
          </Suspense>
        )}
        </div>
      </div>
    </>
  );
};

export default AdminFooter;
