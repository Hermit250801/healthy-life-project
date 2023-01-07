import React from "react"
import { Nav, NavItem, NavLink, Container, Row, Button, Col } from "reactstrap"
import { Link } from "react-router-dom"

//import scss
import "../../../assets/scss/Error/_index.scss"

//import image
import PageNotFound from "../../../assets/images/PageNotFoundImage.gif"
import Logo from "../../../assets/images/healthy.png"

export default function Error() {
  return (
    <Container className="page-not-found">
      <Nav className="d-flex align-items-center justify-content-between">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="img-logo" />
        </Link>

        <div className="d-flex ">
          <NavItem>
            <NavLink className="nav-link">Quản lý bác sĩ</NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link">Quản lý bệnh nhân</NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link">Quản lý thiết bị</NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link">Quản lý mầm bệnh</NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link">Quản lý tập luật y tế</NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link">Quản lý bệnh viện</NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link">Quản lý bệnh án</NavLink>
          </NavItem>
        </div>
        <Link to={"/login"}>
          <Button color="primary">Đăng nhập</Button>
        </Link>
      </Nav>

      <Row className="body">
        <Col md={6}>
          <div className="body-left">
            <h1>Không tìm thấy trang web?</h1>
            <p>
              Bạn có vẻ đang lạc được, người lạ. Bạn biết cái gì giúp bạn ngay lúc này không? Một tô mì nóng hổi. Ngồi
              đi, chúng tôi đang làm việc điên cuồng ở đây để nấu một cái gì đó tốt. Oh, bạn cần một cái gì đó để đọc?
              Những điều này có thể giúp ích bạn:{" "}
            </p>

            <Nav className="nav">
              <NavItem className="nav-item">
                <NavLink className="nav-link">Dashboard</NavLink>
              </NavItem>

              <NavItem className="nav-item">
                <NavLink className="nav-link">@Healthy life</NavLink>
              </NavItem>

              <NavItem className="nav-item">
                <NavLink className="nav-link">Hỗ trợ</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Col>

        <Col md={6}>
          <img src={PageNotFound} alt="Page-Not-Found" className="page-not-found-img" />
        </Col>
      </Row>

      <Row className="footer"></Row>
    </Container>
  )
}
