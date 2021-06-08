import React from "react";
import styled from "styled-components";
// import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Radio, { RadioProps } from "@material-ui/core/Radio";

const CustomRadio = withStyles({
  root: {
    color: "#646464",
    fontSize: "30px",
    "&$checked": {
      color: "#BE1E2D",
    },
  },
  checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

const PrettoSlider = withStyles({
  root: {
    color: "#BE1E2D",
    height: 12,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#BE1E2D",
    border: "2px solid currentColor",
    marginTop: -7,
    marginLeft: -12,
    color: "#BE1E2D",
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 12,
    borderRadius: 4,
  },
  rail: {
    height: 12,
    borderRadius: 4,
    opacity: 1,
    backgroundColor: "#C4C4C4",
  },
  mark: {
    backgroundColor: "#fff",
    height: 0,
    width: 0,
    marginTop: -3,
  },
  markLabel: {
    color: "#fff",
    fontSize: "15px",
  },
})(Slider);

const WithdrawContainer = styled.div`
  background-color: #363636;
  padding: 25px 50px 50px;
  border-radius: 20px;
  @media (max-width: 767px) {
    padding: 25px 20px 50px;
  }
`;
const Section = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #646464;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    flex-direction: column;
    padding: 15px 0;
  }
`;
const Title = styled.h4`
  margin: 0;
  font-size: 24px;

  @media (max-width: 991px) {
    font-size: 20px;
  }
`;
const Balance = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
  & span {
    font-size: 24px;
  }
`;
const EnableToken = styled.div`
  text-transform: uppercase;
  font-size: 18px;
`;
const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: 767px) {
    flex-wrap: wrap-reverse;
  }
`;
const Amount = styled.div`
  width: 47%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const GasFee = styled.div`
  width: 47%;
  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
const PriceInput = styled.div`
  background: #272727;
  border-radius: 30px;
  padding: 7px 8px;
  height: 57px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  & input {
    width: 80%;
    background: transparent;
    border: 0;
    padding: 10px 25px;
    font-size: 18px;
    color: #fff;
    font-weight: 300;
    &input:focus {
      outline: none;
    }
    &:focus-visible {
      outline: 0;
    }
  }
`;
const SliderInput = styled.div``;
const MaxButton = styled.button`
  background: #be1e2d;
  box-shadow: 0px 0px 10px #be1e2d;
  border-radius: 30px;
  border: 0;
  width: 92px;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  font-weight: 800;
`;
const WithdrawBtn = styled.button`
  background: #be1e2d;
  box-shadow: 0px 0px 10px #be1e2d;
  border-radius: 30px;
  border: 0;
  font-size: 20px;
  line-height: 24px;
  padding: 8px 20px;
  color: #fff;
  text-transform: uppercase;
  width: 170px;
  margin-top: 15px;
`;
const PriceInfoTitle = styled.h4`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 30px;
`;
const Summery = styled.p`
  font-size: 14px;
  line-height: 17px;
  margin: 40px 0;
  color: #c4c4c4;
`;
const GasOptions = styled.ul`
  margin: 60px 0 0 -15px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  & li {
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 20px;
    &:nth-child(odd) {
      padding-right: 10%;
      border-right: 1px solid #646464;
      @media (max-width: 420px) {
        padding-right: 7%;
      }
    }
    &:nth-child(even) {
      padding-left: 9%;
      @media (max-width: 420px) {
        padding-left: 5%;
      }
    }
    :nth-child(1) {
      border-bottom: 1px solid #646464;
    }
    :nth-child(2) {
      border-bottom: 1px solid #646464;
    }
    & span {
      text-align: right;
      text-transform: uppercase;
      font-size: 18px;
      @media (max-width: 767px) {
        font-size: 16px;
      }
      @media (max-width: 420px) {
        font-size: 14px;
      }
      @media (max-width: 360px) {
        font-size: 13px;
      }
    }
  }
`;

const Withdraw: React.FC<any> = ({ match }) => {
  // const [state, setState] = React.useState({
  //   checkedA: true,
  //   checkedB: true,
  // });
  // const [value, setValue] = useState<number>(10);

  const [type, setType] = React.useState("fast");

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType((event.target as HTMLInputElement).value);
  };

  const handleSliderChange = (event: any, newValue: any) => {
    // setValue(Number(newValue));
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <WithdrawContainer>
      <Section>
        <Title>{match.params.target === 'yield' ? 'USDC/USDT/DAI' : match.params.target === 'nft' ? 'CUTTIES NFT' : 'CUTTIES UNI V3 LP'}</Title>
      </Section>
      <Section>
        <Balance>
          staked balance: <span>0</span>
        </Balance>
        <Balance>
          wallet balance: <span>0</span>
        </Balance>
        <EnableToken>
          {/* <span>enable token</span>
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          /> */}
        </EnableToken>
      </Section>

      <PriceInfo>
        <Amount>
          <PriceInfoTitle>amount</PriceInfoTitle>
          <PriceInput>
            <input type="text" name="" placeholder="0 (max 0)" />
            <MaxButton>MAX</MaxButton>
          </PriceInput>
          <SliderInput>
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={10}
              max={100}
              onChange={handleSliderChange}
            />
          </SliderInput>
          <Summery>
            Withdraws made after an epoch will be considered as pro-rata figures
            in relation to the lenght of the epoch.
          </Summery>
          <WithdrawBtn>withdraw</WithdrawBtn>
        </Amount>
        <GasFee>
          <PriceInfoTitle>gas fee (gwei)</PriceInfoTitle>
          <GasOptions>
            <li>
              <CustomRadio
                checked={type === "v_fast"}
                onChange={handleTypeChange}
                value="v_fast"
                name="select_type"
              />
              <span>
                very fast <br />
                50 gwei
              </span>
            </li>
            <li>
              <CustomRadio
                checked={type === "fast"}
                onChange={handleTypeChange}
                value="fast"
                name="select_type"
              />
              <span>
                fast <br />
                40 gwei
              </span>
            </li>
            <li>
              <CustomRadio
                checked={type === "standard"}
                onChange={handleTypeChange}
                value="standard"
                name="select_type"
              />
              <span>
                standard
                <br />
                38 gwei
              </span>
            </li>
            <li>
              <CustomRadio
                checked={type === "slow"}
                onChange={handleTypeChange}
                value="slow"
                name="select_type"
              />
              <span>
                slow
                <br />
                35 gwei
              </span>
            </li>
          </GasOptions>
        </GasFee>
      </PriceInfo>
    </WithdrawContainer>
  );
};
export default Withdraw;
