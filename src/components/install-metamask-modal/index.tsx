import React from 'react';
import { Modal, Button } from "react-bootstrap";

const InstallMetaMaskModal: React.FunctionComponent<any> = props => {

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Install MetaMask</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div>You need to have MetaMask installed to continue. Once you have installed it, please refresh the page</div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
          target="_blank"
        >Install MetaMask</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InstallMetaMaskModal;
