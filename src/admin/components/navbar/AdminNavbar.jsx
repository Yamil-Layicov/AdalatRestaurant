import './adminNavbar.scss'
import {useAuth} from '../../../context/AuthContext'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const AdminNavbar = () => {
  const navigate = useNavigate();
  const {setUser} = useAuth()

  const[showLog, setShowLog] = useState(false)

  const handleLogout = () => {
    setUser(false)
    navigate('/')
  }

  return (
    <div className="adminNavbar">
    <div className="logo">
      <img src="/logo.svg" alt="" />
      <span>Ədalət restoran</span>
    </div>
    <div className="icons">
      <img src="/expand.svg" className="icon"></img>
      <div className="notification">
        <img src="/notifications.svg" alt="" />
        <span>1</span>
      </div>
      <div className="user">
        <img src="/noavatar.png" alt="" />
        <span>marketing</span>
      </div>
    </div>
  </div>
  )
}

export default AdminNavbar