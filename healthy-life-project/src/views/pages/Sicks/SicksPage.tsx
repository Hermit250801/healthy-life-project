import React, { Fragment, useState } from "react"
import { Input, Row, Col, Button, Card, UncontrolledTooltip, InputGroupText, InputGroup, Modal, Form } from "reactstrap"
import { ChevronDown, Edit, Trash, Search, Plus } from "react-feather"
import DataTable from "react-data-table-component"
import { GiDoctorFace } from "react-icons/gi"
import "../../../assets/scss/Doctors/_index.scss"
import DoctorsDetail from "./SicksDetail"
import { FaVirus } from "react-icons/fa"
import Select from "react-select"

function SicksPage() {
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
      name: "Tên mầm bệnh",
      selector: "name",
      minWidth: "180px",
      sortable: true,
    },
    {
      name: "Mô tả",
      selector: "desc",
      minWidth: "180px",
      sortable: true,
    },
    {
      name: "Tên tập luật",
      selector: "ruleName",
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
      name: "Sốt xuất huyết",
      ruleName: "Luật sốt xuất huyết",
      desc: "Bệnh sốt xuất huyết",
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
      name: "Sốt siêu vi",
      ruleName: "Luật sốt siêu vi",
      desc: "Bệnh sốt siêu vi",
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
  ]

  return (
    <Fragment>
      <Card className="m-4 p-0 ">
        <Row className="align-items-center  p-2" style={{ zIndex: 99 }}>
          <Col>
            <FaVirus className="menu-item-icon" /> Quản lí mầm bệnh
          </Col>
          <Col lg={2} md={3} className="mb-1 d-flex justify-content-end">
            <Select placeholder="Chọn tập luật" className="w-100" />
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

      <DoctorsDetail isOpen={isOpenModal} setIsOpenModal={setIsOpenModal} isEdit={isEdit} setIsEdit={setIsEdit}  />
    </Fragment>
  )
}

export default SicksPage
