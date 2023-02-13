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

function DevicesDetail(props: Props) {
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
          {(isEdit && "Sửa thiết bị") || "Thêm thiết bị"}
        </ModalHeader>
        <ModalBody>
          <Row className="pt-0 justify-content-center">
            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="name" className="mb-2">
                  Tên thiết bị
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Input id="fullName" name="fullName" />
              </FormGroup>
            </Col>

            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="mac" className="mb-2">
                  MAC
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Input type="text" id="mac" name="mac" />
              </FormGroup>
            </Col>

            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="department" className="mb-2">
                  Bệnh viện sử dụng
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Select placeholder="Chọn bệnh viện" />
              </FormGroup>

              {isEdit && (
                <FormGroup className="p-2">
                  <Label for="department" className="mb-2">
                    Trạng thái
                    <span className="text-danger">&nbsp;*</span>
                  </Label>
                  <Select placeholder="Chọn trạng thái" />
                </FormGroup>
              )}
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <FormGroup className="p-2">
                <Label for="desc" className="mb-2">
                  Mô tả
                </Label>
                <Input type="textarea" id="desc" name="desc" />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>

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
      </Modal>
    </Form>
  )
}

export default DevicesDetail
