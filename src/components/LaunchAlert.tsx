import { Modal } from "react-bootstrap";
import styled from "styled-components";

const ReferrsBonus = styled.h4`
  text-align: center;
  font-weight: 300;
  margin: 10px 0 30px;
`;

const LaunchAlert: React.FC<any> = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <ReferrsBonus>The launch date is June/02/2021 Wednesday</ReferrsBonus>
      </Modal.Body>
    </Modal>
  );
};
export default LaunchAlert;
