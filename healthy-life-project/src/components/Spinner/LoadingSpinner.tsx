import { Modal } from "reactstrap"

const ComponentSpinner = () => {
  return (
    <Modal isOpen={true} className="modal-dialog-centered" backdrop="static">
      <div className="fallback-spinner">
        <div className="loading loading--request component-loader">
          <div className="effect-1 effects"></div>
          <div className="effect-2 effects"></div>
          <div className="effect-3 effects"></div>
        </div>
      </div>
    </Modal>
  )
}

export default ComponentSpinner
