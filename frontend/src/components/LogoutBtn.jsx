import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../apppwrite/auth'
import { logout } from '../store/authSlice'
// import { removePost } from '../store/postSlice'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
          //  check oreder of removePost and logoutPost
            // dispatch(removePost())
            dispatch(logout())
        })
    }
  return (
    <button
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn