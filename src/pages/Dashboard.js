import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='dashboard'>
        <h2>Dashboard</h2>
        <nav>
            <Link className='link' to='profile'>Profile</Link>
            <Link className='link' to='setting'>Setting</Link>
            <Link className='link' to='analytics'>Analytics</Link>
        {/* <NavLink to="profile" activeClassName="active-link">Profile</NavLink>
        <NavLink to="setting" activeClassName="active-link">Settings</NavLink>
        <NavLink to="analytics" activeClassName="active-link">Analytics</NavLink> */}
        </nav>
          {/* Outlet renders the nested route components */}
        <Outlet/>  
    </div>
  )
}

export default Dashboard