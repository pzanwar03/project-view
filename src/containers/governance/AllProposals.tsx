import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { GrPrevious } from "react-icons/gr";

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
  margin: 30px 0 60px;
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
const ProposalContent = styled(Link)`
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
  justify-content: space-between;
  &:hover {
    border-left: 2px solid #be1e2d;
    color: #be1e2d;
  }
  @media (max-width: 767px) {
    padding: 0.5rem 0.75rem;
  }
`;
const ProposalDetails = styled.div`
  width: 75%;
  @media (max-width: 767px) {
    width: 70%;
  }
`;
const ProposalDescription = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.35;
  color: #fff;
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 16px;
  }
`;
const DescriptionDetails = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.75rem;
  margin-top: 0.5625rem;
  @media (max-width: 767px) {
    margin-top: 5px;
  }
`;
const DesTag = styled.div`
  flex-shrink: 0;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0.1rem 0;
  color: #657786;
  width: 4.25rem;
  text-align: center;
  border-color: #be1e2d;
  color: #be1e2d;
  @media (max-width: 767px) {
    font-size: 10px;
    width: auto;
    padding: 0 8px;
  }
`;
const DesText = styled.div`
  font-style: normal;
  font-weight: 600;
  color: #aab8c1;
  margin-left: 0.625rem;
  display: flex;
  & span {
    margin-left: 0.3125rem;
  }
  @media (max-width: 767px) {
    font-size: 10px;
  }
`;
const StateView = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  margin: 0;
  justify-content: center;
  @media (max-width: 767px) {
    width: 30%;
  }
`;
const Executed = styled.div`
  flex-direction: row;
  align-content: flex-start;
  min-width: 5.875rem;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  align-content: flex-start;
  min-width: 5.875rem;
  @media (max-width: 767px) {
    display: block;
    text-align: center;
  }
  &:before {
    transform: translate(0%, -50%);
    left: -12px;
    top: 12px;
    position: absolute;
    content: " ";
    border-radius: 50%;
    background: #be1e2d;
    height: 24px;
    width: 24px;
    background-size;
    @media (max-width: 767px) {
      left: 0;
      right: 0;
      margin: auto;
    }
  }
  &:after {
    content: " ";
    display: block;
    width: 4.8px;
    height: 9.6px;
    border: solid white;
    border-width: 0 1.6px 1.6px 0;
    position: absolute;
    margin-top: -3.2px;
    transform: rotate(45deg);
    left: -2px;
    top: 9px;
    @media (max-width: 767px) {
      left: 0;
      right: 0;
      margin: auto;
      top: 7px;
    }
  }
  & p {
    padding-top: 0;
    padding-left: 2rem;
    color: #fff;
    margin: 0;
    @media (max-width: 767px) {
      padding-left: 0;
      padding-top: 2rem;
      font-size: 12px;
    }
  }
`;

const AllProposals = () => {
  return (
    <Container>
      <OptionBar>
        <BackBtn to="/governance">
          <GrPrevious size={28} /> &nbsp; BACK
        </BackBtn>
        <Title>Governance Overview</Title>
      </OptionBar>

      <RecProposal>
        <Panel>
          <PanelHead>
            <h4>All Proposals</h4>
          </PanelHead>
          <PanelBody>
            <ProposalContent to="/">
              <ProposalDetails>
                <ProposalDescription>Add LINK Support</ProposalDescription>
                <DescriptionDetails>
                  <DesTag>Passed</DesTag>
                  <DesText>
                    <span>046</span>
                    <span>•</span>
                    <span>Executed May 23rd, 2021</span>
                  </DesText>
                </DescriptionDetails>
              </ProposalDetails>
              <StateView>
                <Executed>
                  <p>Executed</p>
                </Executed>
              </StateView>
            </ProposalContent>
            <ProposalContent to="/">
              <ProposalDetails>
                <ProposalDescription>Add LINK Support</ProposalDescription>
                <DescriptionDetails>
                  <DesTag>Passed</DesTag>
                  <DesText>
                    <span>046</span>
                    <span>•</span>
                    <span>Executed May 23rd, 2021</span>
                  </DesText>
                </DescriptionDetails>
              </ProposalDetails>
              <StateView>
                <Executed>
                  <p>Executed</p>
                </Executed>
              </StateView>
            </ProposalContent>
            <ProposalContent to="/">
              <ProposalDetails>
                <ProposalDescription>Add LINK Support</ProposalDescription>
                <DescriptionDetails>
                  <DesTag>Passed</DesTag>
                  <DesText>
                    <span>046</span>
                    <span>•</span>
                    <span>Executed May 23rd, 2021</span>
                  </DesText>
                </DescriptionDetails>
              </ProposalDetails>
              <StateView>
                <Executed>
                  <p>Executed</p>
                </Executed>
              </StateView>
            </ProposalContent>
            <ProposalContent to="/">
              <ProposalDetails>
                <ProposalDescription>Add LINK Support</ProposalDescription>
                <DescriptionDetails>
                  <DesTag>Passed</DesTag>
                  <DesText>
                    <span>046</span>
                    <span>•</span>
                    <span>Executed May 23rd, 2021</span>
                  </DesText>
                </DescriptionDetails>
              </ProposalDetails>
              <StateView>
                <Executed>
                  <p>Executed</p>
                </Executed>
              </StateView>
            </ProposalContent>
            <ProposalContent to="/">
              <ProposalDetails>
                <ProposalDescription>Add LINK Support</ProposalDescription>
                <DescriptionDetails>
                  <DesTag className="cancel-tag">Failed</DesTag>
                  <DesText>
                    <span>046</span>
                    <span>•</span>
                    <span>Executed May 23rd, 2021</span>
                  </DesText>
                </DescriptionDetails>
              </ProposalDetails>
              <StateView>
                <Executed className="cancel-info">
                  <p>Failed</p>
                </Executed>
              </StateView>
            </ProposalContent>
            <ProposalContent to="/">
              <ProposalDetails>
                <ProposalDescription>Add LINK Support</ProposalDescription>
                <DescriptionDetails>
                  <DesTag className="cancel-tag">Canceled</DesTag>
                  <DesText>
                    <span>046</span>
                    <span>•</span>
                    <span>Executed May 23rd, 2021</span>
                  </DesText>
                </DescriptionDetails>
              </ProposalDetails>
              <StateView>
                <Executed className="cancel-info">
                  <p>Canceled</p>
                </Executed>
              </StateView>
            </ProposalContent>
          </PanelBody>
        </Panel>
      </RecProposal>
    </Container>
  );
};
export default AllProposals;
