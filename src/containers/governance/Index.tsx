import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Proposals from "./Proposals";
import Addresses from "./Addresses";
import GovIlloSVG from "../../assets/img/gov-illo.svg";
import Alert from "@material-ui/lab/Alert";

const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 2rem;
  padding-top: 4rem;
  font-size: 30px;
  text-transform: uppercase;
  @media (max-width: 767px) {
    padding-top: 2rem;
    font-size: 24px;
  }
`;
const LegacyPanel = styled.div`
  background: #141e27;
  border: 1px solid #070a0e;
  margin-bottom: 0;
  border-radius: 3px;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 4%);
  margin-bottom: 0.625rem;
`;
const DesPanel = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: normal;
  text-transform: none;
  font-size: inherit;
  cursor: pointer;
  padding: 1.6rem;
  @media (max-width: 767px) {
    padding: 1.3rem;
  }
`;
const DesHead = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.39rem;
  line-height: 1.39rem;
  font-weight: 300;
  color: #ffffff;
`;
const CompRemaining = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2.62rem;
  width: 50%;
`;
const CompRemainingBar = styled.div`
  margin-bottom: 1px;
  width: 100%;
  height: 4px;
  background-color: rgba(190, 30, 45, 0.2);
  border-radius: 4px;
  & div {
    height: 4px;
    border-radius: 4px;
    background-color: #be1e2d;
  }
`;
const ViewAction = styled.div`
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  margin-left: auto;
  & span {
    color: #be1e2d;
    margin-right: 10px;
  }
`;
const DesLable = styled.label`
  cursor: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #aab8c1;
  margin: 0;
`;
const Content = styled.div`
  padding: 1.6rem;
`;
const Educational = styled.div`
  background: #363636;
  border-radius: 3px;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 4%);
  margin-bottom: 1.33rem;
`;
const GovDescription = styled.div`
  padding: 1.75rem;
  & h4 {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
    color: #fff;
  }
`;
const GovIllo = styled.div`
  & img {
    width: 100%;
  }
`;
const LMore = styled(Link)``;
const AlertArea = styled.div`
  margin: 20px auto 0;
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

const Governance = () => {
  return (
    <Container>
      <AlertArea>
        <Alert variant="outlined" severity="info">
          This page will be available right after the end of the sale. For now, all data will be displayed as mock-up to
          test.
        </Alert>
      </AlertArea>
      <Title>Governance Overview</Title>
      <Row>
        <Col xs={12} md={6}>
          <LegacyPanel>
            <DesPanel to="/">
              <div>
                <DesHead>----</DesHead>
                <DesLable>CUTT Remaining</DesLable>
              </div>
              <CompRemaining>
                <ViewAction>
                  <span>View</span>
                  <BsArrowRight size={20} color={"#be1e2d"} />
                </ViewAction>
                <CompRemainingBar>
                  <div style={{ width: "0%" }}></div>
                </CompRemainingBar>
              </CompRemaining>
            </DesPanel>
          </LegacyPanel>
        </Col>
        <Col xs={6} md={3} className="pr-xs-1">
          <LegacyPanel>
            <Content>
              <DesHead>---</DesHead>
              <DesLable>Votes Delegated</DesLable>
            </Content>
          </LegacyPanel>
        </Col>
        <Col xs={6} md={3} className="pl-xs-1">
          <LegacyPanel>
            <Content>
              <DesHead>---</DesHead>
              <DesLable>Voting Addresses</DesLable>
            </Content>
          </LegacyPanel>
        </Col>
      </Row>

      <Proposals />

      <Addresses />

      <Educational>
        <Row>
          <Col md={6}>
            <GovDescription>
              <h4>Cutties Governance</h4>
              <p>
                Cutties is managed by a decentralized community of CUTT token-holders and their delegates, who propose
                and vote on upgrades to the protocol.
              </p>
              <LMore to="">
                <ViewAction>
                  <span> Learn more</span>
                  <BsArrowRight size={20} color={"#be1e2d"} />
                </ViewAction>
              </LMore>
            </GovDescription>
          </Col>
          <Col md={6}>
            <div className="gov-image">
              <GovIllo>
                <img src={GovIlloSVG} alt="profile pic" />
              </GovIllo>
            </div>
          </Col>
        </Row>
      </Educational>
    </Container>
  );
};
export default Governance;
