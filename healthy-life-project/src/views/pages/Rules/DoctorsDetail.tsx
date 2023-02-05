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
  isOpen: boolean,
  setIsOpenModal: Function
}

function DoctorsDetail(props: Props) {
  const { isOpen, setIsOpenModal } = props
  return (
    <Form>
      <Modal isOpen={isOpen} className="modal-dialog-centered modal-lg" backdrop="static">
        <ModalHeader>Thêm bác sĩ</ModalHeader>
        <ModalBody>
          <Row className="pt-1 justify-content-center">
            <Col md={12} xs={12}>
              <Media className="add-user pk2">
                <div className="position-relative d-flex justify-content-center">
                  <img
                    src={"https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-1.jpg"}
                    alt="avatar"
                    height="140"
                    width="140"
                    className="modal-avatar"
                  />
                  <Button className="edit-profile btn-primary" color="primary">
                    <Input id="avatar" name="avatar" type="file" hidden accept="image/*" />
                    <Camera />
                  </Button>
                </div>
              </Media>
            </Col>
          </Row>

          <Row className="pt-0 justify-content-center">
            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="name" className="mb-2">
                  Tên bác sĩ
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Input id="fullName" name="fullName" />
              </FormGroup>
              <FormGroup className="p-2">
                <Label for="gender" className="mb-2">
                  Giới tính
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Select
                  placeholder="Chọn giới tính"
                  options={[
                    { value: 1, label: "Nam" },
                    { vaule: 2, label: "Nữ" },
                  ]}
                />
              </FormGroup>

              <FormGroup className="p-2">
                <Label for="device" className="mb-2">
                  Thiết bị
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Select placeholder="Chọn thiết bị" />
              </FormGroup>
            </Col>
            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="birth" className="mb-2">
                  Ngày sinh
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Input type="date" id="birth" name="birth" />
              </FormGroup>
              <FormGroup className="p-2">
                <Label for="email" className="mb-2">
                  Email
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Input id="email" name="email" />
              </FormGroup>

              <FormGroup className="p-2">
                <Label for="cmnd" className="mb-2">
                  CMND
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Input id="cmnd" name="cmnd" />
              </FormGroup>
            </Col>

            <Col md={4} xs={12}>
              <FormGroup className="p-2">
                <Label for="phone" className="mb-2">
                  SDT
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Input id="phone" name="phone" />
              </FormGroup>
              <FormGroup className="p-2">
                <Label for="department" className="mb-2">
                  Khoa
                  <span className="text-danger">&nbsp;*</span>
                </Label>
                <Select placeholder="Chọn khoa" />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <Button className="btn-primary2" onClick={() => setIsOpenModal(false)}>Thoát</Button>
          <Button color="primary" type="submit">
            Thêm
          </Button>
        </ModalFooter>
      </Modal>
    </Form>
  )
}

export default DoctorsDetail
