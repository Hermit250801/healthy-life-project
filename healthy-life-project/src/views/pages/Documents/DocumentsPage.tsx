import React, { Fragment, useState } from "react"
import { Input, Row, Col, Button, Card, UncontrolledTooltip, InputGroupText, InputGroup, Modal, Form } from "reactstrap"
import { ChevronDown, Edit, Trash, Search, Plus } from "react-feather"
import DataTable from "react-data-table-component"
import { GiDoctorFace } from "react-icons/gi"
import "../../../assets/scss/Doctors/_index.scss"
import DoctorsDetail from "./DocumentsDetail"
import { MdSick } from "react-icons/md"

import Select from "react-select"

function DocumentsPage() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const accountColumns = [
    {
      name: "STT",
      selector: "id",
      minWidth: "150px",
      sortable: true,
    },
    {
      name: "Bệnh nhân điều trị",
      selector: "patient",
      minWidth: "180px",
      sortable: true,
    },
    {
      name: "Bệnh",
      selector: "sick",
      minWidth: "180px",
      sortable: true,
    },
    {
      name: "Bác sĩ theo dõi",
      selector: "doctor",
      minWidth: "180px",
      sortable: true,
    },
    {
      name: "Thiết bị theo dõi",
      selector: "device",
      minWidth: "180px",
      sortable: true,
    },
    {
      name: "Trạng thái thiết bị",
      selector: "status",
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
      patient: "Mai Văn Trường",
      sick: "Sốt xuất huyết",
      doctor: "Nguyễn Hoàng Duy",
      device: "Thiết bị 36",
      status: <div className="color-disable">Đã kết thúc điều trị</div>,
      action: (
        <div className="d-flex">
          <>
            <Button className="btn-icon" color="flat" onClick={() => setIsEdit(true)}>
              <Edit size={20} />
            </Button>
          </>
          <>
            <Button className="btn-icon" color="flat">
              <Trash size={20} />
            </Button>
          </>
        </div>
      ),
    },
    {
      id: "2",
      patient: "Trần Ngọc Hạ Tiên",
      sick: "Sốt xuất huyết",
      doctor: "Nguyễn Quốc Hùng",
      device: "Thiết bị 10",
      status: <div className="color-primary">Đang diều trị</div>,
      action: (
        <div className="d-flex">
          <>
            <Button className="btn-icon" color="flat"  onClick={() => setIsEdit(true)}>
              <Edit size={20} />
            </Button>
          </>
          <>
            <Button className="btn-icon" color="flat">
              <Trash size={20} />
            </Button>
          </>
        </div>
      ),
    },
  ]
  return (
    <Fragment>
      <Card className="m-4 p-0 ">
        <Row className="align-items-center  p-2" style={{ zIndex: 99 }}>
          <Col>
            <MdSick className="menu-item-icon" /> Quản lí bệnh án
          </Col>
          <Col lg={2} md={3} className="mb-1 d-flex justify-content-end">
            <Select placeholder="Chọn bác sĩ điều trị" className="w-100" />
          </Col>
          <Col lg={2} md={3} className="mb-1 d-flex justify-content-end">
            <Select placeholder="Chọn bệnh" className="w-100" />
          </Col>
          <Col lg={3} md={4} className="mb-1 d-flex justify-content-end">
            <Select placeholder="Chọn thiết bị theo dõi" className="w-100" />
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

      <DoctorsDetail isOpen={isOpenModal} setIsOpenModal={setIsOpenModal} isEdit={isEdit} setIsEdit={setIsEdit} />
    </Fragment>
  )
}

export default DocumentsPage
