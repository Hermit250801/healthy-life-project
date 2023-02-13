import React from "react"
import { Camera } from "react-feather"
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Media,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Form,
} from "reactstrap"

import Select from "react-select"

interface Props {
  isOpen: boolean
  setIsOpenModal: Function
  isEdit: boolean
  setIsEdit: Function
}

function DoctorsDetail(props: Props) {
  const { isOpen, setIsOpenModal, isEdit, setIsEdit } = props
  return (
    <Form>
      <Modal isOpen={isOpen || isEdit} className="modal-dialog-centered modal-lg" backdrop="static">
        <ModalHeader
          toggle={() => {
            setIsOpenModal(false)
            setIsEdit(false)
          }}
        >
          {(isEdit && "Sửa bệnh án") || "Thêm bệnh án"}
        </ModalHeader>
        <ModalBody>
          <Row className="pt-0 justify-content-center">
            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="name" className="mb-2">
                  Bệnh nhân
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Select placeholder="Chọn bệnh nhân" />
              </FormGroup>
            </Col>

            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="name" className="mb-2">
                  Bác sĩ
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Select placeholder="Chọn bác sĩ" />
              </FormGroup>
            </Col>

            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="name" className="mb-2">
                  Thiết bị
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Select placeholder="Chọn thiết bị" />
              </FormGroup>
            </Col>
          </Row>
          <Row className="pt-0 justify-content-center">
            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="name" className="mb-2">
                  Trạng thái thiết bị
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Select placeholder="Chọn trạng thái" />
              </FormGroup>
            </Col>

            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="name" className="mb-2">
                  Nhiệt độ
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Input type="text" name="temp" />
              </FormGroup>
            </Col>

            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="name" className="mb-2">
                  Chuẩn đoán
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Input type="text" name="diagnose" />
              </FormGroup>
            </Col>
          </Row>
          <Row className="pt-0 justify-content-center">
            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="name" className="mb-2">
                  Ngày lập bệnh án
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Input type="date" id="startDate" name="startDate" />
              </FormGroup>
            </Col>

            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="name" className="mb-2">
                  Ngày kết bệnh án
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Input type="date" id="endDate" name="endDate" />
              </FormGroup>
            </Col>

            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="name" className="mb-2">
                  Tình trạng bệnh án
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Select placeholder="Chọn tình trạng" />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <ModalFooter>
            <Button
              className="btn-primary2"
              onClick={() => {
                setIsOpenModal(false)
                setIsEdit(false)
              }}
            >
              Thoát
            </Button>
            <Button color="primary" type="submit">
              {(isEdit && "Sửa") || "Thêm"}
            </Button>
          </ModalFooter>
        </ModalFooter>
      </Modal>
    </Form>
  )
}

export default DoctorsDetail
