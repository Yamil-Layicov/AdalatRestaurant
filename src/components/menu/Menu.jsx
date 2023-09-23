import "./menu.scss";
import {useNavigate} from 'react-router-dom'

const Menu = () => {

  const navigate = useNavigate()

  const routeLink = () => {
    navigate('/menu')
    window.scrollTo({
      top:0
    })
  }

  return (
    <div className="menu">
      <h1>Gündəlik Menyu</h1>
      <div className="boxContent">
        <div className="boxHeaderMenu">
          <p>SPECIAL OFFER</p>
          <h1>Burgher Menu $18 only</h1>
          <p>Hamburgher, Chips, Mix Sausages</p>
          <button onClick={routeLink}>Daha ətraflı</button>
          <div className="backColor"></div>
        </div>
      </div>
      <div className="menuOptions">
      <div className="food">
          <div className="img">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
          </div>
          <div className="foodTitle">
            <h4>Summer Berry</h4>
            <p>Raspberries, Blackberries</p>
          </div>
          <div className="lineBorder">
          </div>
          <div className="priceFood">12 <small>AZN</small></div>
        </div>
        <div className="food">
          <div className="img">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
          </div>
          <div className="foodTitle">
            <h4>Summer Berry</h4>
            <p>Raspberries, Blackberries</p>
          </div>
          <div className="lineBorder">
          </div>
          <div className="priceFood">12 <small>AZN</small></div>
        </div>
        <div className="food">
          <div className="img">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
          </div>
          <div className="foodTitle">
            <h4>Summer Berry</h4>
            <p>Raspberries, Blackberries</p>
          </div>
          <div className="lineBorder">
          </div>
          <div className="priceFood">12 <small>AZN</small></div>
        </div>
        <div className="food">
          <div className="img">
          <img
            src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          </div>
          <div className="foodTitle">
            <h4>Summer Berry</h4>
            <p>Raspberries, Blackberries</p>
          </div>
          <div className="lineBorder">
          </div>
          <div className="priceFood">12 <small>AZN</small></div>
        </div>
        <div className="food">
          <div className="img">
          <img
            src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          </div>
          <div className="foodTitle">
            <h4>Summer Berry</h4>
            <p>Raspberries, Blackberries</p>
          </div>
          <div className="lineBorder">
          </div>
          <div className="priceFood">12 <small>AZN</small></div>
        </div>
        <div className="food">
          <div className="img">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          </div>
          <div className="foodTitle">
            <h4>Summer Berry</h4>
            <p>Raspberries, Blackberries</p>
          </div>
          <div className="lineBorder">
          </div>
          <div className="priceFood">12 <small>AZN</small></div>
        </div>
        <div className="food">
          <div className="img">
          <img
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          </div>
          <div className="foodTitle">
            <h4>Summer Berry</h4>
            <p>Raspberries, Blackberries</p>
          </div>
          <div className="lineBorder">
          </div>
          <div className="priceFood">12 <small>AZN</small></div>
        </div>
        <div className="food">
          <div className="img">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          </div>
          <div className="foodTitle">
            <h4>Summer Berry</h4>
            <p>Raspberries, Blackberries</p>
          </div>
          <div className="lineBorder">
          </div>
          <div className="priceFood">12 <small>AZN</small></div>
        </div>
      </div>
      <div className="menuBtn">Menyunu Yüklə</div>
    </div>
  );
};

export default Menu;
