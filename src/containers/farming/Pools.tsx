import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { BsQuestionCircle } from "react-icons/bs";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import UserGuideModal from 'components/user-guide-modal';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 12,
    borderRadius: 10,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#BE1E2D",
  },
}))(LinearProgress);

const PoolItem = styled.div`
  background-color: #363636;
  padding: 30px 50px;
  border-radius: 20px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;
const PoolType = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
// const PoolStatus = styled.div`
//   margin-left: -30px;
//   & span {
//     font-size: 13px;
//     border: 1px solid #be1e2d;
//     padding: 0px 7px 2px;
//     border-radius: 20px;
//     display: inline-block;
//     line-height: 14px;
//     color: #be1e2d;
//   }
// `;
const PoolName = styled.p`
  font-size: 15px;
  text-transform: uppercase;
  margin: 0;
`;
const PoolQuestion = styled.span`
  line-height: 18px;
  cursor: pointer;
`;
const PoolInfo = styled.div`
  border-bottom: 1px solid #272727;
  padding: 30px 0 0;
  & h5 {
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 12px;
    font-weight: 300;
  }
  & h4 {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 20px;
  }
  &:last-child {
    border-bottom: 0;
  }
`;
const ProgressBar = styled.div`
  margin-bottom: 30px;
`;
const Stake = styled.div`
  text-align: center;
  padding: 10px 0;
`;
const StakeButton = styled(Link)`
  background: #be1e2d;
  box-shadow: 0px 0px 10px #be1e2d;
  border-radius: 30px;
  width: 184px;
  display: inline-block;
  padding: 9px 20px;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  font-weight: 900;
  &:hover {
    color: #fff;
  }
`;

const Pools: React.FC<any> = (props) => {
  const [userGuideVisible, setUserGuideVisible] = React.useState<boolean>(false);
  const [helpTarget, setHelpTarget] = React.useState<string>('');

  return (
    <Row>
      <Col md={4} className="px-2">
        <PoolItem>
          <PoolType>
            {/* <PoolStatus>
              <span>soon</span>
            </PoolStatus> */}
            <PoolName>SMART YIELD POOL</PoolName>
            <PoolQuestion onClick={() => {
              setHelpTarget('SMART YIELD POOL')
              setUserGuideVisible(true)
            }}>
              <BsQuestionCircle size={12} />
            </PoolQuestion>
          </PoolType>
          <div>
            <PoolInfo>
              <h5>TOTAL REWARD</h5>
              <h4>$0.00 cutt/DAY</h4>
            </PoolInfo>
            <PoolInfo>
              <h5>my rewards</h5>
              <h4>$0.00</h4>
            </PoolInfo>
            <PoolInfo>
              <h5>TOTAL pools balance</h5>
              <h4>$0.00</h4>
              <ProgressBar>
                <BorderLinearProgress variant="determinate" value={0} />
              </ProgressBar>
            </PoolInfo>
            <PoolInfo>
              <h5>my pools balance</h5>
              <h4>$0.00</h4>
              <ProgressBar>
                <BorderLinearProgress variant="determinate" value={0} />
              </ProgressBar>
            </PoolInfo>
          </div>
          <Stake>
            <StakeButton to="/farming/details/deposit/yield">STAKE</StakeButton>
          </Stake>
        </PoolItem>
      </Col>
      <Col md={4} className="px-2">
        <PoolItem>
          <PoolType>
            {/* <PoolStatus>
              <span>soon</span>
            </PoolStatus> */}
            <PoolName>nft staking pool</PoolName>
            <PoolQuestion onClick={() => {
              setHelpTarget('NFT STAKING POOL')
              setUserGuideVisible(true)
            }}>
              <BsQuestionCircle size={12} />
            </PoolQuestion>
          </PoolType>
          <div>
            <PoolInfo>
              <h5>TOTAL REWARD</h5>
              <h4>$0.00 cutt/DAY</h4>
            </PoolInfo>
            <PoolInfo>
              <h5>my rewards</h5>
              <h4>$0.00</h4>
            </PoolInfo>
            <PoolInfo>
              <h5>TOTAL pools balance</h5>
              <h4>$0.00</h4>
              <ProgressBar>
                <BorderLinearProgress variant="determinate" value={0} />
              </ProgressBar>
            </PoolInfo>
            <PoolInfo>
              <h5>my pools balance</h5>
              <h4>$0.00</h4>
              <ProgressBar>
                <BorderLinearProgress variant="determinate" value={0} />
              </ProgressBar>
            </PoolInfo>
          </div>
          <Stake>
            <StakeButton to="/farming/details/deposit/nft">STAKE</StakeButton>
          </Stake>
        </PoolItem>
      </Col>
      <Col md={4} className="px-2">
        <PoolItem>
          <PoolType>
            {/* <PoolStatus>
              <span>soon</span>
            </PoolStatus> */}
            <PoolName>cutt uni-v3 lp staking pool</PoolName>
            <PoolQuestion onClick={() => {
              setHelpTarget('CUTT UNI-V3 LP STAKING POOL')
              setUserGuideVisible(true)
            }}>
              <BsQuestionCircle size={12} />
            </PoolQuestion>
          </PoolType>
          <div>
            <PoolInfo>
              <h5>TOTAL REWARD</h5>
              <h4>$0.00 cutt/DAY</h4>
            </PoolInfo>
            <PoolInfo>
              <h5>my rewards</h5>
              <h4>$0.00</h4>
            </PoolInfo>
            <PoolInfo>
              <h5>TOTAL pools balance</h5>
              <h4>$0.00</h4>
              <ProgressBar>
                <BorderLinearProgress variant="determinate" value={0} />
              </ProgressBar>
            </PoolInfo>
            <PoolInfo>
              <h5>my pools balance</h5>
              <h4>$0.00</h4>
              <ProgressBar>
                <BorderLinearProgress variant="determinate" value={0} />
              </ProgressBar>
            </PoolInfo>
          </div>
          <Stake>
            <StakeButton to="/farming/details/deposit/univ3">STAKE</StakeButton>
          </Stake>
        </PoolItem>
      </Col>
      <UserGuideModal
        show={userGuideVisible}
        helpTarget={helpTarget}
        onHide={() => setUserGuideVisible(false)}
      />
    </Row>
  );
};

export default Pools;
