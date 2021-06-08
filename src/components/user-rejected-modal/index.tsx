import React from 'react';
import { Modal } from "react-bootstrap";
import { RiErrorWarningLine } from 'react-icons/ri';

const UserRejectedModal: React.FunctionComponent<any> = props => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <RiErrorWarningLine size={30} color="red"/> ERROR
          </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <h5>Transaction has rejected by user.</h5>
      </Modal.Body>
    </Modal>
  );
};

export default UserRejectedModal;
