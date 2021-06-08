import { useState } from "react";
import styled from "styled-components";
import Fill from "../../assets/img/fill.webp";
import { GrFormCheckmark } from "react-icons/gr";

const Progress = styled.div`
  position: relative;
  height: 110px;
  padding: 50px 0px;
`;
const ProgressNumber = styled.div`
  background-color: #be1e2d;
  position: absolute;
  top: 38px;
  z-index: 10;
  display: flex;
  width: 100px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  justify-content: center;
  padding: 6px 0;
  margin: 0px auto;
  left: 0;
  right: 0;
  font-weight: 700;
  &:after {
    content: "";
    position: absolute;
    left: -3px;
    background-color: #be1e2d;
    top: 3px;
    bottom: 3px;
    width: 3px;
  }
  &:before {
    content: "";
    position: absolute;
    right: -3px;
    background-color: #be1e2d;
    top: 3px;
    bottom: 3px;
    width: 3px;
  }
`;
const ProgressBar = styled.div`
  &.show {
    background: url(${Fill}) repeat-x;
    transition: 0.2s;
    -webkit-animation: moveBackground 1s linear infinite;
    animation: moveBackground 1s linear infinite;
  }

  border-top: 3px solid #ccc;
  border-bottom: 3px solid #ccc;
  height: 11px;
`;

const ProgressActive = styled.div`
  display: none;
  position: absolute;
  top: 38px;
  left: 0;
  right: 0;
  margin: 0px auto;
  justify-content: end;
  text-align: center;
  & span {
    background-color: #be1e2d;
    display: inline-block;
  }
`;

const Item: React.FunctionComponent<any> = (props) => {
  const { totalSupply, name, price, rangeMin, rangeMax, image, minSupply, maxSupply } = props;

  const [active, setActive] = useState("transform");

  return (
    <div
      className={(totalSupply < minSupply ? "" : totalSupply >= maxSupply ? "done" : "done active") + " " + active}
      onClick={() => setActive(active ? "" : "transform")}
    >
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={image} alt="Avatar" className={totalSupply < 0 ? "" : "active"} />
            <div className={totalSupply < rangeMin ? 'overlay-soon' : totalSupply >= rangeMax ? 'overlay-closed' : 'overlay-open'} />
          </div>
          <div className="flip-card-back">
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p>#{rangeMin} - #{rangeMax}</p>
          </div>
        </div>
      </div>
      <Progress>
        <ProgressBar className={totalSupply < minSupply ? "progressbar" : "progressbar show"}></ProgressBar>
        <ProgressNumber className="progress-number">
          <span>{minSupply - totalSupply} left</span>
        </ProgressNumber>
        <ProgressActive className="progress-active">
          <span>
            <GrFormCheckmark size={30} />
          </span>
        </ProgressActive>
      </Progress>
    </div>
  );
};

export default Item;
