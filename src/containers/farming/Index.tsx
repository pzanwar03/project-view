import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Pools from "./Pools";
import Transactions from "./Transactions";
import Alert from "@material-ui/lab/Alert";

const MainSection = styled.div`
  margin: 60px 0 0;
  @media (max-width: 767px) {
    margin: 30px 0;
  }
`;
const MainContainer = styled(Container)`
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 30px;
    padding-left: 30px;
  }
`;
const FarmingSection = styled.div`
  margin: 70px 0 85px;
  @media (max-width: 767px) {
    margin: 40px 0 10px;
  }
`;
const SummeryInfo = styled.div`
  background-color: #363636;
  padding: 25px 50px;
  border-radius: 20px;
  height: 170px;
  text-transform: uppercase;
  @media (max-width: 767px) {
    padding: 25px 30px;
    margin-bottom: 30px;
  }
  & p {
    font-size: 15px;
    text-align: center;
    margin-bottom: 40px;
  }
  & h5 {
    font-size: 22px;
    font-weight: 700;
  }
  & span {
    font-size: 12px;
  }
  & .red {
    color: #be1e2d;
  }
`;
const PoolSection = styled.div``;
const SectionTitle = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
  margin-bottom: 60px;
  color: #fff;
  @media (max-width: 767px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;
const AlertArea = styled.div`
  margin: 10px auto 50px;
  text-align: center;
  & .MuiAlert-outlinedInfo {
    color: #fff;
    border: 1px solid #fff;
  }
  & .MuiAlert-root {
    padding: 10px 16px;
    background-color: #363636;
  }
  & .MuiAlert-icon {
    border-right: 1px solid #c0c0c0;
    padding-right: 15px;
  }
  & .MuiAlert-outlinedInfo .MuiAlert-icon {
    color: #fff;
    padding: 4px 15px 4px 0;
  }
  & .MuiAlert-message {
    padding: 5px 0;
    text-align: left;
  }
`;

const Farming: React.FC<any> = (props) => {
  return (
    <MainSection>
      <MainContainer>
        <FarmingSection>
          <AlertArea>
            <Alert variant="outlined" severity="info">
              This page will be available right after the end of the sale. For now, all data will be displayed as
              mock-up to test.
            </Alert>
          </AlertArea>
          <Row>
            <Col md={4} className="px-2">
              <SummeryInfo>
                <p>total value locked</p>
                <h5>$0.00 </h5>
              </SummeryInfo>
            </Col>
            <Col md={4} className="px-2">
              <SummeryInfo>
                <p>cutt rewards</p>
                <h5>$0.00</h5>
              </SummeryInfo>
            </Col>
            <Col md={4} className="px-2">
              <SummeryInfo>
                <p>cutt price</p>
                <h5>$0.00</h5>
              </SummeryInfo>
            </Col>
          </Row>
        </FarmingSection>

        <PoolSection>
          <SectionTitle>pools</SectionTitle>
          <Pools />
        </PoolSection>

        <Transactions />
      </MainContainer>
    </MainSection>
  );
};

export default Farming;
