import React, { Fragment, useState } from "react"
import { Input, Row, Col, Button, Card, UncontrolledTooltip, InputGroupText, InputGroup, Modal, Form } from "reactstrap"
import { ChevronDown, Edit, Trash, Search, Plus } from "react-feather"
import DataTable from "react-data-table-component"
import { GiDoctorFace } from "react-icons/gi"
import "../../../assets/scss/Doctors/_index.scss"
import DoctorsDetail from "./DoctorsDetail"

function DocumentsPage() {
  const accountColumns = [
    {
      name: "Mã bác sĩ",
      selector: "id",
      minWidth: "150px",
      sortable: true,
    },
    {
      name: "Tên bác sĩ",
      selector: "name",
      minWidth: "180px",
      sortable: true,
    },
    {
      name: "Giới tính",
      selector: "gender",
      minWidth: "180px",
      sortable: true,
    },
    {
      name: "Ngày sinh",
      selector: "birth",
      minWidth: "180px",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      minWidth: "180px",
      sortable: true,
    },
    {
      name: "SDT",
      selector: "phone",
      minWidth: "180px",
      sortable: true,
    },
    {
      name: "Khoa",
      selector: "department",
      minWidth: "160px",
      maxWidth: "160px",
      sortable: true,
    },
    {
      name: "CMND",
      selector: "identify",
      minWidth: "150px",
      maxWidth: "150px",
      sortable: true,
      center: true,
    },
    {
      name: "Thiết bị",
      selector: "device",
      minWidth: "180px",
      sortable: true,
    },
    {
      name: "Hành động",
      selector: "action",
      minWidth: "140px",
      maxWidth: "140px",
      sortable: true,
    },
  ]

  const fakeData = [
    {
      id: "1",
      name: "Mai Văn Trường",
      gender: "Nam",
      birth: "25/08/2001",
      email: "mvantruong.dev@gmail.com",
      department: "Đa khoa",
      identify: "1234556789",
      device: "Thiết bị 36",
      action: (
        <div className="d-flex">
            <>
              <Button
                className="btn-icon"
                color="flat"
              >
                <Edit size={20} />
              </Button>
            </>
            <>
              <Button
                className="btn-icon"
                color="flat"
              >
                <Trash size={20} />
              </Button>
            </>
        </div>
      ),
    },
    {
      id: "1",
      name: "Mai Văn Trường",
      gender: "Nam",
      birth: "25/08/2001",
      email: "mvantruong.dev@gmail.com",
      department: "Đa khoa",
      identify: "1234556789",
      device: "Thiết bị 36",
      action: (
        <div className="d-flex">
            <>
              <Button
                className="btn-icon"
                color="flat"
              >
                <Edit size={20} />
              </Button>
            </>
            <>
              <Button
                className="btn-icon"
                color="flat"
              >
                <Trash size={20} />
              </Button>
            </>
        </div>
      ),
    },
    {
      id: "1",
      name: "Mai Văn Trường",
      gender: "Nam",
      birth: "25/08/2001",
      email: "mvantruong.dev@gmail.com",
      department: "Đa khoa",
      identify: "1234556789",
      device: "Thiết bị 36",
      action: (
        <div className="d-flex">
            <>
              <Button
                className="btn-icon"
                color="flat"
              >
                <Edit size={20} />
              </Button>
            </>
            <>
              <Button
                className="btn-icon"
                color="flat"
              >
                <Trash size={20} />
              </Button>
            </>
        </div>
      ),
    },
    {
      id: "1",
      name: "Mai Văn Trường",
      gender: "Nam",
      birth: "25/08/2001",
      email: "mvantruong.dev@gmail.com",
      department: "Đa khoa",
      identify: "1234556789",
      device: "Thiết bị 36",
      action: (
        <div className="d-flex">
            <>
              <Button
                className="btn-icon"
                color="flat"
              >
                <Edit size={20} />
              </Button>
            </>
            <>
              <Button
                className="btn-icon"
                color="flat"
              >
                <Trash size={20} />
              </Button>
            </>
        </div>
      ),
    }
  ]
  
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Fragment>
      <Card className="m-4 p-0 ">
        <Row className="align-items-center  p-2" style={{ zIndex: 99 }}>
          <Col>
          <GiDoctorFace className="menu-item-icon" /> Quản lí bác sĩ{" "}
          </Col>
          <Col lg={2} md={3} className="mb-1 d-flex justify-content-end">
            {/* Search */}
            <InputGroup className="input-group-merge">
              <div className="input-group-append">
                <InputGroupText>
                  <Search size={14} />
                </InputGroupText>
              </div>
              <Input className="search-input" type="search" bsSize="sm" id="search-input" placeholder={"Tìm kiếm"} />
            </InputGroup>
          </Col>
          <Col md="auto" className="mb-1">
            <Button color="primary" className="btn-default btn-add " onClick={() => setIsOpenModal(true)}>
              <Plus size={24} />
            </Button>
          </Col>
        </Row>
        <Row style={{ minHeight: "694px" }}>
        <Col lg={12} md={12} className="mb-50">
          <DataTable
            noHeader
            pagination
            striped
            highlightOnHover
            paginationServer
            className="react-dataTable hover height-minus230px"
            columns={accountColumns}
            data={fakeData}
            sortIcon={<ChevronDown size={10} />}
          />
        </Col>
      </Row>
      </Card>

      <DoctorsDetail isOpen={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </Fragment>
      
  )
}

export default DocumentsPage
