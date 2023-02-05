import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar"
import { useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { AiFillDashboard } from "react-icons/ai"
import { GiDoctorFace } from "react-icons/gi"
import { SlUser } from "react-icons/sl"
import { TbDeviceWatchStats2 } from "react-icons/tb"
import { FaVirus, FaHospital, FaUserInjured } from "react-icons/fa"
import { BsFillFileEarmarkRuledFill } from "react-icons/bs"
import { MdSick } from "react-icons/md"
import { Moon, Bell } from "react-feather"

import Logo from "../../assets/images/healthy-life-logo.jpg"

import "../../assets/scss/layout/_index.scss"
import { Card, Col, Row } from "reactstrap"

export default function Layout() {
  const { toggleSidebar, toggled } = useProSidebar()
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/dashboard")
  }, [])
  return (
    <>
      <div className="d-flex h-100" style={{ backgroundColor: "rgba(29,29,29,.5)", overflow: "auto" }}>
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
              component={<Link to={"/dashboard"} />}
            >
              <AiFillDashboard className="menu-item-icon" /> Dashboard
            </MenuItem>
            <MenuItem active={window.location.pathname === "/doctors"} component={<Link to={"/doctors"} />}>
              <GiDoctorFace className="menu-item-icon" /> Quản lí bác sĩ{" "}
            </MenuItem>
            <MenuItem active={window.location.pathname === "/patients"} component={<Link to={"/patients"} />}>
              <FaUserInjured className="menu-item-icon" />
              Quản lí bệnh nhân{" "}
            </MenuItem>
            <MenuItem active={window.location.pathname === "/devices"} component={<Link to={"/devices"} />}>
              <TbDeviceWatchStats2 className="menu-item-icon" /> Quản lí thiết bị
            </MenuItem>
            <MenuItem active={window.location.pathname === "/sicks"} component={<Link to={"/sicks"} />}>
              <FaVirus className="menu-item-icon" /> Quản lí mầm bệnh
            </MenuItem>
            <MenuItem active={window.location.pathname === "/rules"} component={<Link to={"/rules"} />}>
              <BsFillFileEarmarkRuledFill className="menu-item-icon" /> Quản lí tập luật y tế
            </MenuItem>
            <MenuItem active={window.location.pathname === "/hospitals"} component={<Link to={"/hospitals"} />}>
              <FaHospital className="menu-item-icon" /> Quản lí bệnh viện
            </MenuItem>
            <MenuItem active={window.location.pathname === "/documents"} component={<Link to={"/documents"} />}>
              <MdSick className="menu-item-icon" /> Quản lí bệnh án
            </MenuItem>
          </Menu>
        </Sidebar>
        <div className="d-flex flex-column" style={{ width: "100vw" }}>
          <Card className="card-header">
            <Row className="justify-content-end">
              <Col md={1} xs={2} className="justify-content-end icon" style={{ maxWidth: "50px" }}>
                <Moon />
              </Col>
              <Col md={1} xs={2} className="justify-content-end icon" style={{ maxWidth: "50px" }}>
                <Bell />
              </Col>
              <Col md={1} xs={2} className="justify-content-end icon" style={{ maxWidth: "50px" }}>
                <img src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-1.jpg" alt="avatar" className="avatar" />
              </Col>
            </Row>
          </Card>
          <Outlet />
        </div>
      </div>
    </>
  )
}
