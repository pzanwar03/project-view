import React from 'react';

import { Modal } from "react-bootstrap";
import styled from "styled-components";

import { WalletConnector } from 'wallets/types';
import { useWallet, WalletConnectors } from 'wallets/wallet';

// import LedgerDerivationPathModal from 'components/ledger-deriviation-path-modal';

const Wallet = styled.button`
  text-align: left;
  padding-left: 30px;
  color: white;
  background: #363636;
  border-radius: 20px;
  border: 0;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
`;

const ConnectWalletModal: React.FunctionComponent<any> = (props) => {
  const wallet = useWallet();

  // const [ledgerModal, setLedgerModal] = React.useState<boolean>(false);

  function handleConnectorSelect(connector: WalletConnector) {
    if (wallet.isActive) {
      return;
    }

    if (connector.id === 'ledger') {
      // return setLedgerModal(true);
    }

    return wallet.connect(connector);
  }

  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">CONNECT WALLET</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <h5>Please select chosen type of wallet</h5>
          {WalletConnectors.map(connector => (
            <Wallet
              key={connector.id}
              onClick={() => handleConnectorSelect(connector)}
            >
              <img src={connector.logo} alt={connector.name} width={32} />&nbsp;&nbsp;
              <span>{connector.name}</span>
            </Wallet>
          ))}
        </Modal.Body>
      </Modal>
      {/* <LedgerDerivationPathModal
        show={ledgerModal}
        onHide={() => setLedgerModal(false)} /> */}
    </>
  );
};

export default ConnectWalletModal;
