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
          {(isEdit && "Sửa bệnh viện") || "Thêm bệnh viện"}
        </ModalHeader>
        <ModalBody>
          <Row className="pt-0 justify-content-center">
            <Col md={12} xs={12}>
              <FormGroup className="p-2">
                <Label for="name" className="mb-2">
                  Tên bệnh viện
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Input id="fullName" name="fullName" />
              </FormGroup>
            </Col>

            <Col md={6} xs={12}>
              <FormGroup className="p-2">
                <Label for="desc" className="mb-2">
                  Tỉnh / Thành phố
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Select placeholder="Chọn tỉnh / thành phố" />
              </FormGroup>
            </Col>

            <Col md={6} xs={12}>
              <FormGroup className="p-2">
                <Label for="desc" className="mb-2">
                Quận / Huyện
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Select placeholder="Chọn quận / huyện" />
              </FormGroup>
            </Col>

            <Col md={6} xs={12}>
              <FormGroup className="p-2">
                <Label for="desc" className="mb-2">
                Phường / Xã
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Select placeholder="Chọn phường / xã" />
              </FormGroup>
            </Col>

            <Col md={6} xs={12}>
              <FormGroup className="p-2">
                <Label for="desc" className="mb-2">
                  Địa chỉ
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Input type="text" id="desc" name="desc" />
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

export default DoctorsDetail
