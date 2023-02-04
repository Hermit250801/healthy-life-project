import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar"
import { useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { AiFillDashboard } from "react-icons/ai"
import { GiDoctorFace } from "react-icons/gi"
import { SlUser } from "react-icons/sl"
import { TbDeviceWatchStats2 } from "react-icons/tb"
import { FaVirus, FaHospital, FaUserInjured } from "react-icons/fa"
import { BsFillFileEarmarkRuledFill } from "react-icons/bs"
import { MdSick } from "react-icons/md"

import Logo from "../../assets/images/healthy-life-logo.jpg"

import "../../assets/scss/layout/_index.scss"

export default function Layout() {
  const { toggleSidebar, toggled } = useProSidebar()
  const navigate = useNavigate()
  return (
    <div className="d-flex h-100">
      <Sidebar className="h-100" backgroundColor="#000">
        <div className="logo-container" onClick={() => navigate("/dashboard")}>
          <img src={Logo} alt="Logo" className="logo-img" />
          ealthy Life
        </div>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }: any) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? "#f5d9ff" : "#fff",
                  backgroundColor: active ? "#76b24f" : undefined,
                }
            },
          }}
        >
          <MenuItem
            className="menu-item"
            active={window.location.pathname === "/dashboard"}
            routerLink={<Link to={"/dashboard"} />}
          >
            <AiFillDashboard className="menu-item-icon" /> Dashboard
          </MenuItem>
          <MenuItem active={window.location.pathname === "/doctors"} routerLink={<Link to={"/doctors"} />}>
            <GiDoctorFace className="menu-item-icon" /> Quản lí bác sĩ{" "}
          </MenuItem>
          <MenuItem active={window.location.pathname === "/patients"} routerLink={<Link to={"/patients"} />}>
            <FaUserInjured className="menu-item-icon" />
            Quản lí bệnh nhân{" "}
          </MenuItem>
          <MenuItem active={window.location.pathname === "/devices"} routerLink={<Link to={"/devices"} />}>
            <TbDeviceWatchStats2 className="menu-item-icon" /> Quản lí thiết bị
          </MenuItem>
          <MenuItem active={window.location.pathname === "/sicks"} routerLink={<Link to={"/sicks"} />}>
            <FaVirus className="menu-item-icon" /> Quản lí mầm bệnh
          </MenuItem>
          <MenuItem active={window.location.pathname === "/rules"} routerLink={<Link to={"/rules"} />}>
            <BsFillFileEarmarkRuledFill className="menu-item-icon" /> Quản lí tập luật y tế
          </MenuItem>
          <MenuItem active={window.location.pathname === "/hospitals"} routerLink={<Link to={"/hospitals"} />}>
            <FaHospital className="menu-item-icon" /> Quản lí bệnh viện
          </MenuItem>
          <MenuItem active={window.location.pathname === "/documents"} routerLink={<Link to={"/documents"} />}>
            <MdSick className="menu-item-icon" /> Quản lí bệnh án
          </MenuItem>
        </Menu>
      </Sidebar>
      <Outlet />
    </div>
  )
}
