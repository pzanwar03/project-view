import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Transactions from "./Transactions";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

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
const DetailsSection = styled.div``;
const DetailsType = styled.div`
  margin-bottom: 30px;
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    @media (max-width: 480px) {
      justify-content: space-between;
    }
    & li {
      margin-right: 40px;
      @media (max-width: 480px) {
        margin-right: 0;
      }
      & a {
        font-size: 20px;
        text-transform: uppercase;
        color: #fff;
        font-weight: 400;
        display: block;
        line-height: 35px;
        &.active:after {
          height: 2px;
          display: block;
          width: 100%;
          background: #be1e2d;
          content: "";
        }
      }
    }
  }
`;
const DetailsBody = styled.div``;

const Details: React.FC<any> = ({ match }) => {
  return (
    <MainSection>
      <MainContainer>
        <FarmingSection>
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

        <DetailsSection>
          <DetailsType>
            <ul>
              <li>
                <Link className={match.params.type === "deposit" ? "active" : ""} to={`/farming/details/deposit/${match.params.target}`}>
                  Deposit
                </Link>
              </li>
              <li>
                <Link className={match.params.type === "withdraw" ? "active" : ""} to={`/farming/details/withdraw/${match.params.target}`}>
                  Withdraw
                </Link>
              </li>
            </ul>
          </DetailsType>
          <DetailsBody>
            <Switch>
              <Route path="/farming/details/deposit/:target" component={Deposit} />
              <Route path="/farming/details/withdraw/:target" component={Withdraw} />
            </Switch>
          </DetailsBody>
        </DetailsSection>

        <Transactions />
      </MainContainer>
    </MainSection>
  );
};

export default Details;
