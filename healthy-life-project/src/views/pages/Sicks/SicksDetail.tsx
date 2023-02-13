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

function SicksDetail(props: Props) {
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
          {(isEdit && "Sửa tập luật") || "Thêm tập luật"}
        </ModalHeader>
        <ModalBody>
          <Row className="pt-0 justify-content-center">
            <Col md={6} xs={12}>
              <FormGroup className="p-2">
                <Label for="name" className="mb-2">
                  Tên mầm bệnh
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Input id="fullName" name="fullName" />
              </FormGroup>
            </Col>

            <Col md={6} xs={12}>
              <FormGroup className="p-2">
                <Label for="desc" className="mb-2">
                  Tập luật <span className="text-danger">&nbsp;*</span>
                </Label>
                <Select placeholder="Chọn tập luật" />
              </FormGroup>
            </Col>

            <Col md={12} xs={12}>
              <FormGroup className="p-2">
                <Label for="desc" className="mb-2">
                  Mô tả
                  <span className="text-danger">&nbsp;*</span>
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

export default SicksDetail
