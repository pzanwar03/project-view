import React from 'react';
import { Modal } from "react-bootstrap";
import { BsQuestionCircle } from "react-icons/bs";
import styled from "styled-components";

const Content = styled.div`
  text-align: justify;
  text-justify: auto;
`;

const UserGuideModal: React.FunctionComponent<any> = props => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <BsQuestionCircle size={22} color="red"/> {props.helpTarget}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        {props.helpTarget === 'SMART YIELD POOL' &&
            <Content>25% of total supply will go to this pool and be distributed within 24 months.
            Be able to stake stable coins such as USDC, USDT or DAI, which will go to the secondary market to be compounded.
            During the first 24 months, 100% of the interest earned by the Cutties platform's secondary-market USDC position will be burned.
          When a user unstakes early, they will be charged with 20% of earned CUTT reward tokens as a penalty fee.</Content>
        }
        {props.helpTarget === 'NFT STAKING POOL' &&
            <Content>In Cutties' NFT staking pool, staked currency will be locked and inaccessible for a specified period. At the end of this set time, users can withdraw all CUTT tokens as rewards and transfer them into their own wallets. 15% of the total supply will go into this staking pool as rewards.
            When a user unstakes early, they will be charged with 20% of earned CUTT reward tokens as a penalty fee.
Rewards will be distributed within 24 months.</Content>
        }
        {props.helpTarget === 'CUTT UNI-V3 LP STAKING POOL' &&
            <Content>With Uniswap V3 LP (NFT) staking, users can stake with ETH and directly swap ERC20 tokens without a third party.
            If users put in ETH, then Smart Contract will exchange CUTT tokens with half of the amount on V3 and add it to V3 as liquidity. Further, Uni V3 NFT, as an LP token, will be owned by contract. As a result, the user doesn't need to wait for a counterparty to exchange with or worry about specifying a sell or purchase price.
When a user unstakes early, they will be charged with 20% of earned CUTT reward tokens as a penalty fee.</Content>
        }
      </Modal.Body>
    </Modal>
  );
};

export default UserGuideModal;
