import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"

const Dashboard = () => {
  const [show, setShow] = useState(false)
  const [componentName, setComponentName] = useState("")

  const {loading, isAuthenticated, error, user} = useSelector((state) => state.user)

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogout = () => {
    
  }
  return (
    <div>
      
    </div>
  )
}

export default Dashboard
