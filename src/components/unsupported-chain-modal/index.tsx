import React from 'react';
import { Modal } from "react-bootstrap";

const UnsupportedChainModal: React.FunctionComponent<any> = props => {

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">WRONG NETWORK</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div>Please switch your wallet network to <b>Mainnet</b> to use the app. If you still encounter problems, you may want to switch to a different wallet</div>
      </Modal.Body>
    </Modal>
  );
};

export default UnsupportedChainModal;
