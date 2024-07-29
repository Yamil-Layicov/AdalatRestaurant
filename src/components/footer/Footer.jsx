import "./footer.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { useQuery } from "@tanstack/react-query";
import api from '../../admin/api/posts';


const Footer = () => {

  const { isLoading, data } = useQuery({
    queryKey: ["settings"],
    queryFn: () => api.get("settings"),
  });


  return (
    <div className="footer">
      <div className="upFooter">
        <div className="boxFooter">
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <span className="icon">
              <LocationOnOutlinedIcon fontSize="medium" />
            </span>
            <span className="title">Ünvan</span>
          </div>
          <p>{data?.data?.address}</p>
        </div>
        <div className="boxFooter">
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <span className="icon">
              <WifiCalling3OutlinedIcon fontSize="medium" />
            </span>
            <span className="title">Rezervasiya</span>
          </div>
          <p>
            {data?.data?.phone_1}<br /> {data?.data?.phone_2}
            
          </p>
        </div>
        <div className="boxFooter">
          <span className="icon">
            <AccessTimeOutlinedIcon fontSize="medium" />
          </span>
          <span className="title">İş saatları</span>
          <p>Bazar ertəsi: - Bazar: 09:00 - 00:00</p>
        </div>
        <div className="boxFooter">
          <h5>Əlaqə saxlayın</h5>
          <div className="emailSend">
            <input type="text" placeholder="E-poçt" />
            <div className="sendBtn">
              <ChevronRightOutlinedIcon fontSize="medium" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="downFooter">
        <div className="left">© {data?.data?.rights}</div>
        {/* <div className="socials">
          <a href="https://www.facebook.com/nanelounge" target="_blank">
            <img src={fbc} alt="" />
          </a>
          <a href="https://www.instagram.com/naneterrace/" target="_blank">
            <img src={ins} alt="" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
