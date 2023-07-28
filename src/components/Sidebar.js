import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return <>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<a className="sidebar-brand d-flex align-items-center justify-content-center" href="javascript(void)">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SCHOOL</div>
</a>

<hr className="sidebar-divider my-0"/>

<li className="nav-item active">
    <Link to='/dashboard' className="nav-link">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></Link>
</li>

<hr className="sidebar-divider"/>
<div className="sidebar-heading">
    Interface
</div>

<li className="nav-item">
    <Link to='/add-student' className="nav-link">
        <i className="fas fa-fw fa-cog"></i>
        <span>Add Student</span>
    </Link>
</li>
<li className="nav-item">
    <Link to='/add-teacher' className="nav-link">
        <i className="fas fa-fw fa-cog"></i>
        <span>Add Teacher</span>
    </Link>
</li>
<li className="nav-item">
    <Link to='/details' className="nav-link">
        <i className="fas fa-fw fa-cog"></i>
        <span>Details</span>
    </Link>
</li>
    </ul>
  </>
}

export default Sidebar