import React from "react"
import { Input, Row, Col, Button, Card, UncontrolledTooltip, InputGroupText, InputGroup } from "reactstrap"
import { ChevronDown, Edit, Trash, Search, Plus } from "react-feather"
import "../../../assets/scss/Doctors/_index.scss"

function Doctors() {
  return (
    <div style={{ width: "100vw" }}>
      <Card className="m-1 p-0 ">
        <Row className="d-flex align-items-center justify-content-end pt-1 pl-1 pr-1" style={{ zIndex: 99 }}>
          <Col lg={2} md={3} className="mb-1">
            {/* Search */}
            <InputGroup className="input-group-merge">
              <div className="input-group-append">
                <InputGroupText>
                  <Search size={14} />
                </InputGroupText>
              </div>
              <Input className="" type="search" bsSize="sm" id="search-input" placeholder={"Tìm kiếm"} />
            </InputGroup>
          </Col>
          <Col md="auto" className="mb-1">
            <Button color="primary" className="p-0 btn-default btn-add">
              <Plus size={24} />
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default Doctors
