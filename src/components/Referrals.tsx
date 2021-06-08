import { useState } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import { useWallet } from "wallets/wallet";
import { useAsyncEffect } from "hooks/useAsyncEffect";
const CryptoJS = require("crypto-js");

const Stats = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
`;
const ReferrsBonus = styled.p`
  text-align: center;
  font-weight: 300;
  margin: 40px 0 30px;
`;
const TextArea = styled.textarea`
  border-radius: 40px;
  width: 100%;
  padding: 25px 30px;
  background: #373636;
  border: 1.5px solid #e5e5e5;
  color: #fff;
  font-weight: 300;
`;
const CopyArea = styled.div`
  text-align: center;
  margin: 45px 0 10px;
  -webkit-scrollbar {
    display: none;
  }
`;
const CopyLink = styled.button`
  background: #be1e2d;
  box-shadow: 0px 0px 10px #be1e2d;
  border-radius: 30px;
  border: 0;
  padding: 10px;
  width: 230px;
  font-weight: 800;
  font-size: 20px;
  color: #fff;
`;

const CRYPTO_KEY = process.env.REACT_APP_CRYPTO_KEY;

const Referrals: React.FC<any> = (props) => {
  const wallet = useWallet();

  const [buttonText, setButtonText] = useState<string>("COPY LINK");
  const [generatedReferralLink, setGeneratedReferralLink] = useState<string>("");

  useAsyncEffect(async () => {
    if (wallet.account) {
      const cipheredAddress = CryptoJS.AES.encrypt(JSON.stringify(wallet.account), CRYPTO_KEY).toString();
      const chiperedReferralLink = `${process.env.REACT_APP_PUBLIC_URL}/?w=${encodeURIComponent(cipheredAddress)}`;
      setGeneratedReferralLink(chiperedReferralLink);
    }
  }, [wallet]);

  const copyToClipboard = (str: any) => {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);

    const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    const success = document.execCommand("copy");
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
    return success;
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">YOUR REFERRAL LINK</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Stats>MY REFERRAL STATS: {props.referralAmount} ETH</Stats>
        <ReferrsBonus>You will receive 10% of all referrs as bonus.</ReferrsBonus>
        <TextArea rows={6} id="myInput" value={generatedReferralLink} disabled></TextArea>
        <CopyArea>
          <CopyLink
            onClick={() => {
              copyToClipboard(generatedReferralLink);
              setButtonText("COPYED");
            }}
          >
            {buttonText}
          </CopyLink>
        </CopyArea>
      </Modal.Body>
    </Modal>
  );
};
export default Referrals;
