import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Info from "./details/Info";
import Deposit from "./details/Deposit";
import Pic from "../../assets/img/item.png";

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
const DetailsSection = styled.div`
  background: #363636;
  border-radius: 20px;
  padding: 50px 60px;
  margin-bottom: 120px;
  @media (max-width: 767px) {
    padding: 30px;
  }
`;
const DetailsType = styled.div`
  margin-bottom: 30px;
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    @media (max-width: 480px) {
      font-size: 22px;
      flex-direction: column;
    }
    @media (max-width: 480px) {
      justify-content: space-between;
    }
    & li {
      margin-right: 40px;
      @media (max-width: 420px) {
        width: 50%;
        text-align: center;
        margin-bottom: 20px;
        margin: 7px auto;
      }
      & a {
        font-size: 18px;
        text-transform: uppercase;
        color: #fff;
        font-weight: 400;
        display: block;
        line-height: 35px;
        @media (max-width: 480px) {
          font-size: 14px;
        }
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
const ItemPicArea = styled.div`
  text-align: center;
  margin: 90px 0;
`;
const ItemPic = styled.img`
  width: 620px;
  @media (max-width: 767px) {
    width: 80%;
  }
`;
const ProductName = styled.h2`
  font-size: 36px;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 35px;
  @media (max-width: 767px) {
    font-size: 28px;
    margin-bottom: 25px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Details: React.FC<any> = ({ match }) => {
  return (
    <MainSection>
      <MainContainer>
        <ItemPicArea>
          <ItemPic src={Pic} />
        </ItemPicArea>
        <DetailsSection>
          <ProductName>CUTTIES(CAT) ID #1</ProductName>
          <DetailsType>
            <ul>
              <li>
                <Link className={match.params.info === "info" ? "active" : ""} to="/items/details/info">
                  Info
                </Link>
              </li>
              <li>
                <Link className={match.params.type === "deposit" ? "active" : ""} to="/items/details/deposit">
                  DEPOSIT
                </Link>
              </li>
              <li>
                <Link className={match.params.type === "withdraw" ? "active" : ""} to="/items/details/withdraw">
                  Withdraw
                </Link>
              </li>
              <li>
                <Link className={match.params.type === "send" ? "active" : ""} to="/items/details/send">
                  Send
                </Link>
              </li>
            </ul>
          </DetailsType>
          <DetailsBody>
            <Switch>
              <Route path="/items/details/info" component={Info} />
              <Route path="/items/details/deposit" component={Deposit} />
            </Switch>
          </DetailsBody>
        </DetailsSection>
      </MainContainer>
    </MainSection>
  );
};

export default Details;
