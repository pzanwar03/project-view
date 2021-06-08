import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";
import { GrPrevious } from "react-icons/gr";
import { FaPlusCircle } from "react-icons/fa";
import ProfilePic from "../../assets/img/profile.png";

const OptionBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 30px;
  @media (max-width: 767px) {
    margin: 30px 0 20px;
  }
`;
const BackBtn = styled(Link)`
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  display: inline-block;
  margin-top: 16px;
`;
const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 2rem;
  padding-top: 10px;
  font-size: 24px;
  text-transform: uppercase;
  @media (max-width: 767px) {
    padding-top: 2rem;
    font-size: 18px;
  }
`;
const RecProposal = styled.div`
  margin-top: 30px;
`;
const Panel = styled.div`
  background: #363636;
  box-shadow: 0px 2px 4px rgb(16 21 24 / 5%);
  border-radius: 4px;
  margin-bottom: 1.33rem;
`;
const PanelHead = styled.div`
  display: flex;
  flex-flow: inherit;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
  padding: 1rem 1.75rem;
  border-bottom: 1px solid #414141;
  & h4 {
    font-size: 20px;
    text-transform: uppercase;
    margin: 0;
    font-weight: 500;
    @media (max-width: 767px) {
      font-size: 17px;
    }
  }
  @media (max-width: 767px) {
    padding: 1rem 0.75rem;
  }
`;
const PanelBody = styled.div``;
const PanelLable = styled.div`
  display: flex;
  padding: 1rem 1.75rem;
  border-bottom: 1px solid #414141;
  align-items: center;
  @media (max-width: 767px) {
    padding: 0.5rem 0;
    & .text-right {
      text-align: center !important;
    }
  }
  & label {
    cursor: inherit;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #aab8c1;
    margin-bottom: 0;
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
`;
const AddressList = styled.div``;

const AddressLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #414141;
  padding: 1.25rem 1.75rem;
  border-left: 2px solid transparent;
  text-transform: none;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0;
  transition: none;
  color: #fff;
  @media (max-width: 767px) {
    padding: 1rem 0;
    font-size: 12px;
    & .text-right {
      text-align: center !important;
    }
  }
  &:hover {
    color: #fff;
    border-left: 2px solid #be1e2d;
    color: #fff;
  }
`;
const SummaryDetails = styled.div`
  display: flex;
  align-items: center;
  & label {
    margin-bottom: 0;
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
`;
const DetailsRank = styled.div`
  flex-shrink: 0;
  width: 2rem;
  height: auto;
  & label {
    color: #fff;
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 0;
  }
`;
const ProfileImage = styled.div`
  position: relative;
  display: inline-block;
  margin-top: -0.25rem;
  margin-right: 1.33rem;
  & img {
    width: 40px;
    border-radius: 50%;
    height: 40px;
    @media (max-width: 767px) {
      width: 30px;
      height: 30px;
    }
  }
`;
const ProposerIcon = styled.div`
  position: absolute;
  top: 25px;
  right: 0px;
  @media (max-width: 767px) {
    top: 16px;
  }
`;
// const PanelFooter = styled(Link)`
//   padding: 1.145rem 1.9375rem;
//   border-bottom: none;
//   border-radius: 0 0 4px 4px;
//   display: flex;
//   justify-content: center;
//   color: #fff;
//   letter-spacing: 1px;
//   font-size: 14px;
//   font-weight: 700;
//   text-transform: uppercase;
//   text-decoration: none;
//   cursor: pointer;
//   &:hover {
//     color: #fff;
//   }
//   @media (max-width: 767px) {
//     font-size: 12px;
//   }
// `;

const Leaderboard = () => {
  return (
    <Container>
      <OptionBar>
        <BackBtn to="/governance">
          <GrPrevious size={28} /> &nbsp; BACK
        </BackBtn>
        <Title>Leaderboard</Title>
      </OptionBar>

      <RecProposal>
        <Panel>
          <PanelHead>
            <h4>Addresses by Voting Weight</h4>
          </PanelHead>
          <PanelBody>
            <PanelLable>
              <Col xs={9} sm={6}>
                <label>Rank</label>
              </Col>
              <Col xs={3} sm={2} className="text-right mobile-hide">
                <label>Votes</label>
              </Col>
              <Col xs={3} sm={2} className="text-right">
                <label>Vote Weight</label>
              </Col>
              <Col xs={3} sm={2} className="text-right mobile-hide">
                <label>Proposals Voted</label>
              </Col>
            </PanelLable>
            <AddressList>
              <AddressLink to="">
                <Col xs={9} sm={6}>
                  <SummaryDetails>
                    <DetailsRank>
                      <label className="delegatee-summary__details__rank">1</label>
                    </DetailsRank>
                    <ProfileImage>
                      <img src={ProfilePic} alt="profile pic"/>
                      <ProposerIcon>
                        <FaPlusCircle size={11} color={"#be1e2d"} />
                      </ProposerIcon>
                    </ProfileImage>
                    <label>a16z</label>
                  </SummaryDetails>
                </Col>
                <Col xs={3} sm={2} className="text-right mobile-hide">
                  345,000.7207
                </Col>
                <Col xs={3} sm={2} className="text-right ">
                  13.74%
                </Col>
                <Col xs={3} sm={2} className="text-right mobile-hide">
                  7
                </Col>
              </AddressLink>
              <AddressLink to="">
                <Col xs={9} sm={6}>
                  <SummaryDetails>
                    <DetailsRank>
                      <label className="delegatee-summary__details__rank">2</label>
                    </DetailsRank>
                    <ProfileImage>
                      <img src={ProfilePic} alt="profile pic"/>
                      <ProposerIcon>
                        <FaPlusCircle size={11} color={"#be1e2d"} />
                      </ProposerIcon>
                    </ProfileImage>
                    <label>a16z</label>
                  </SummaryDetails>
                </Col>
                <Col xs={3} sm={2} className="text-right mobile-hide">
                  345,000.7207
                </Col>
                <Col xs={3} sm={2} className="text-right ">
                  13.74%
                </Col>
                <Col xs={3} sm={2} className="text-right mobile-hide">
                  7
                </Col>
              </AddressLink>
              <AddressLink to="">
                <Col xs={9} sm={6}>
                  <SummaryDetails>
                    <DetailsRank>
                      <label className="delegatee-summary__details__rank">3</label>
                    </DetailsRank>
                    <ProfileImage>
                      <img src={ProfilePic} alt="profile pic"/>
                      <ProposerIcon>
                        <FaPlusCircle size={11} color={"#be1e2d"} />
                      </ProposerIcon>
                    </ProfileImage>
                    <label>a16z</label>
                  </SummaryDetails>
                </Col>
                <Col xs={3} sm={2} className="text-right mobile-hide">
                  345,000.7207
                </Col>
                <Col xs={3} sm={2} className="text-right ">
                  13.74%
                </Col>
                <Col xs={3} sm={2} className="text-right mobile-hide">
                  7
                </Col>
              </AddressLink>
              <AddressLink to="">
                <Col xs={9} sm={6}>
                  <SummaryDetails>
                    <DetailsRank>
                      <label className="delegatee-summary__details__rank">4</label>
                    </DetailsRank>
                    <ProfileImage>
                      <img src={ProfilePic} alt="profile pic"/>
                      <ProposerIcon>
                        <FaPlusCircle size={11} color={"#be1e2d"} />
                      </ProposerIcon>
                    </ProfileImage>
                    <label>a16z</label>
                  </SummaryDetails>
                </Col>
                <Col xs={3} sm={2} className="text-right mobile-hide">
                  345,000.7207
                </Col>
                <Col xs={3} sm={2} className="text-right ">
                  13.74%
                </Col>
                <Col xs={3} sm={2} className="text-right mobile-hide">
                  7
                </Col>
              </AddressLink>
              <AddressLink to="">
                <Col xs={9} sm={6}>
                  <SummaryDetails>
                    <DetailsRank>
                      <label className="delegatee-summary__details__rank">5</label>
                    </DetailsRank>
                    <ProfileImage>
                      <img src={ProfilePic} alt="profile pic"/>
                      <ProposerIcon>
                        <FaPlusCircle size={11} color={"#be1e2d"} />
                      </ProposerIcon>
                    </ProfileImage>
                    <label>a16z</label>
                  </SummaryDetails>
                </Col>
                <Col xs={3} sm={2} className="text-right mobile-hide">
                  345,000.7207
                </Col>
                <Col xs={3} sm={2} className="text-right ">
                  13.74%
                </Col>
                <Col xs={3} sm={2} className="text-right mobile-hide">
                  7
                </Col>
              </AddressLink>
            </AddressList>
          </PanelBody>
        </Panel>
      </RecProposal>
    </Container>
  );
};
export default Leaderboard;
