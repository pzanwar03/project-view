import { Container, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Web3 from "web3";
import BigNumber from "bignumber.js";
import axios from "axios";

import { useWallet } from "wallets/wallet";
import { useWeb3Contracts } from "web3/contracts";
import { useAsyncEffect } from "hooks/useAsyncEffect";
import { getHumanValue } from "web3/utils";
import { getWSRpcUrl } from "web3/utils";

import styled from "styled-components";
import { RiMenu2Fill } from "react-icons/ri";
import { GrPrevious, GrNext } from "react-icons/gr";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { default as Sliders } from "react-slick";
import FlipCard from "components/flipcard";

import Img01 from "../assets/img/products/homepage/cat1.png";
import Img02 from "../assets/img/products/homepage/dog1.png";
import Img03 from "../assets/img/products/homepage/rabbit1.png";
import Img04 from "../assets/img/products/homepage/cat2.png";
import Img05 from "../assets/img/products/homepage/dog2.png";
import Img06 from "../assets/img/products/homepage/rabbit2.png";

import Banner01 from "../assets/img/silder/cutties_slide_1.gif";
import Banner02 from "../assets/img/silder/cutties_slide_2.gif";
import Banner03 from "../assets/img/silder/cutties_slide_3.gif";
import Banner04 from "../assets/img/silder/cutties_slide_4.gif";
import Banner05 from "../assets/img/silder/cutties_slide_5.gif";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Referrals from "../components/Referrals";
import LaunchAlert from "../components/LaunchAlert";
import Reveal from "react-reveal/Reveal";

const CryptoJS = require("crypto-js");

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 300 + theme.spacing(3) * 2,
//   },
//   margin: {
//     height: theme.spacing(3),
//   },
// }));

const PrettoSlider = withStyles({
  root: {
    color: "#BE1E2D",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#BE1E2D",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
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

// const BorderLinearProgress = withStyles((theme) => ({
//   root: {
//     height: 15,
//     borderRadius: 5,
//   },
//   colorPrimary: {
//     backgroundColor: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
//   },
//   bar: {
//     borderRadius: 5,
//     backgroundColor: "#BE1E2D",
//   },
// }))(LinearProgress);

const bannerSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: <GrPrevious />,
  nextArrow: <GrNext />,
};

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <GrPrevious />,
  nextArrow: <GrNext />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const HomeBody = styled.div``;
const BannerBg = styled.div`
  & img {
    width: 100%;
    height: 100vh;
    @media (max-width: 767px) {
      margin-top: 0;
      height: 60vh;
    }
  }
`;
const Banner = styled.div`
  margin-top: -125px;
  position: relative;
  @media (max-width: 767px) {
    margin-top: -75px;
  }
`;
// const BannerInfo = styled.div`
//   position: absolute;
//   top: 150px;
//   width: 100%;
//   @media (max-width: 991px) {
//     position: relative;
//     top: 0px;
//   }
// `;
// const BannerContent = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   position: relative;
//   margin-top: 35px;
//   margin-bottom: 45px;
//   @media (max-width: 767px) {
//   }
// `;
// const BannerText = styled.div`
//   width: 50%;
//   font-size: 18px;
//   margin-bottom: 20px;
//   text-transform: uppercase;
//   text-shadow: 0px 3px 14px #000;
//   &:nth-child(even) {
//     text-align: right;
//     @media (max-width: 530px) {
//       text-align: center;
//     }
//   }
//   @media (max-width: 767px) {
//     font-size: 14px;
//   }
//   @media (max-width: 530px) {
//     width: 100%;
//     text-align: center;
//   }
// `;
const ProductInfo = styled.div`
  background: rgba(54, 54, 54, 0.99);
  box-shadow: 0px 0px 40px #363636;
  padding: 30px 80px 15px;
  margin-bottom: 70px;
  border-radius: 40px;
  position: relative;
  @media (max-width: 767px) {
    padding: 15px;
    margin-bottom: 70px;
    border-radius: 15px;
  }
`;
const AmountSlider = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
const AmountQty = styled.div`
  width: 50%;
  // text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 5px;
    font-size: 14px;
  }
  & .qty {
    margin: 0 20px;
    font-weight: 400;
    font-size: 22px;
    position: relative;
    display: inline-block;
    padding: 0 10px;
    color: yellow;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  & .eth {
    font-size: 20px;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
`;
const MiSlider = styled.div`
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const TotalAmount = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0;
  position: relative;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
const ActionButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0 0;
  position: relative;
  @media (max-width: 767px) {
    justify-content: space-between;
    margin: 20px 0 0;
  }
`;
const BuyButton = styled.button`
  background-color: #be1e2d;
  border: 0;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  border-radius: 84px;
  padding: 8px 30px;
  box-shadow: 0px 0px 10px #be1e2d;
  width: 300px;
  display: inline-block;
  margin: auto;
  text-align: center;

  :disabled {
    background-color: #888;
    box-shadow: 0px 0px 10px #888;
  }

  &:hover {
    color: #fff;
  }
  @media (max-width: 767px) {
    font-size: 12px;
    width: 120px;
    padding: 8px 10px;
  }
`;
const MyReferrals = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  border-radius: 84px;
  padding: 8px 30px;
  margin: auto;
  width: 300px;
  display: inline-block;
  text-align: center;
  &:hover {
    color: #fff;
  }
  @media (max-width: 767px) {
    font-size: 12px;
    width: 120px;
    padding: 8px 10px;
  }
`;

const Progression = styled.div`
  margin: 70px 0;
`;
const ProgressionTitle = styled.h2`
  font-size: 34px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Minted = styled.div`
  text-align: right;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    display: none;
  }
  & span {
    width: 290px;
    height: 65px;
    display: inline-block;
    background: #363636;
    border-radius: 20px;
    text-align: center;
    padding: 15px;
    font-size: 24px;
  }
`;
// const ProgressionChart = styled.div`
//   height: 450px;
//   padding-top: 230px;
//   @media (max-width: 767px) {
//     height: 340px;
//     padding-top: 165px;
//     transform: rotate(90deg);
//     margin-top: 25%;
//     margin-bottom: 30%;
//   }
// `;
// const ProgressInfo = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   display: flex;
//   justify-content: space-between;
//   & li {
//     position: relative;
//     font-size: 24px;
//     @media (max-width: 767px) {
//       font-size: 16px;
//     }
//     & span {
//       @media (max-width: 767px) {
//         transform: rotate(-90deg);
//       }
//     }
//   }
//   & li:nth-child(odd) {
//     & span:nth-child(1) {
//       display: block;
//       width: 125px;
//       position: absolute;
//       top: 50px;
//       left: -62px;
//       text-align: center;
//       @media (max-width: 767px) {
//         width: 100px;
//         top: 70px;
//         left: -66px;
//       }
//     }
//     & span:nth-child(2) {
//       display: block;
//       width: 125px;
//       position: absolute;
//       top: 105px;
//       left: -62px;
//       text-align: center;
//       @media (max-width: 767px) {
//         width: 100px;
//         top: 54px;
//         left: -31px;
//       }
//     }
//     &:after {
//       height: 50px;
//       display: block;
//       width: 8px;
//       background: #f1f1f1;
//       content: "";
//       position: absolute;
//       left: 0;
//       top: -15px;
//       border-radius: 10px;
//     }
//     &.bgred {
//       &:after {
//         background: #be1e2d;
//       }
//     }
//   }
//   & li:nth-child(even) {
//     margin-top: -40px;
//     & span:nth-child(1) {
//       display: block;
//       width: 125px;
//       position: absolute;
//       top: -55px;
//       left: -62px;
//       text-align: center;
//       @media (max-width: 767px) {
//         width: 100px;
//         top: -70px;
//         left: -66px;
//       }
//     }
//     & span:nth-child(2) {
//       display: block;
//       width: 125px;
//       position: absolute;
//       top: -105px;
//       left: -62px;
//       text-align: center;
//       @media (max-width: 767px) {
//         width: 100px;
//         top: -55px;
//         left: -31px;
//       }
//     }
//     &:after {
//       height: 50px;
//       display: block;
//       width: 8px;
//       background: #f1f1f1;
//       content: "";
//       position: absolute;
//       left: 0;
//       top: -10px;
//       border-radius: 10px;
//     }
//     &.bgred {
//       &:after {
//         background: #be1e2d;
//       }
//     }
//   }
//   & li:last-child {
//     &:after {
//       left: -8px;
//     }
//   }
// `;
const WelcomeCutties = styled.div`
  margin-bottom: 120px;
  @media (max-width: 767px) {
    margin-bottom: 50px;
  }
`;
const WelcomeTitle = styled.h2`
  font-size: 34px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 50px;
  color: #fff;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;
const AboutUs = styled.p`
  font-size: 24px;
  line-height: 36px;
  margin-top: 50px;
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 24px;
    margin-top: 30px;
    text-align: justify;
  }
`;
const MainCection = styled.div`
  margin-bottom: 90px;
  @media (max-width: 767px) {
    margin-bottom: 50px;
  }
`;

const Item = styled.div`
  padding: 0 2px;
`;
const ItemPic = styled.div`
  position: relative;
`;
const ItemImg = styled.img`
  width: 100%;
`;
const ContainerSticky = styled(Container)`
  bottom: 20px;
  opacity: 0.9;
`;

const SlidersI = styled(Sliders)`
  & .slick-arrow:before {
    z-index: 11;
  }
`;

const DEFAULT_CONTRACT_PROVIDER = new Web3.providers.WebsocketProvider(getWSRpcUrl());
const web3 = new Web3(DEFAULT_CONTRACT_PROVIDER);
const CRYPTO_KEY = process.env.REACT_APP_CRYPTO_KEY;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = (props: any) => {
  const query = useQuery();
  const referralLink = decodeURIComponent(query.get("w") || "");
  let referralOwner = "";
  if (referralLink) {
    const address = CryptoJS.AES.decrypt(referralLink, CRYPTO_KEY).toString(CryptoJS.enc.Utf8);
    referralOwner = address.slice(1, -1);
  }

  // const classes = useStyles();
  const [value, setValue] = useState<number>(1);
  const [ethBalance, setEthBalance] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentMaxAmount, setCurrentMaxAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState("");
  const [referralAmount, setReferralAmount] = useState(0);
  const [inProgress, setInProgress] = useState(false);
  const [getSticky, setSticky] = useState("unset");
  const [referralShow, setReferralShow] = useState<boolean>(false);
  const [alertShow, setAlertShow] = useState<boolean>(true);
  const { cutties } = useWeb3Contracts();
  const wallet = useWallet();
  const [marks, setMarks] = useState([
    {
      value: 1,
      label: "1",
    },
    {
      value: 20,
      label: "20",
    },
  ]);

  function handleWalletConnect() {
    wallet.showWalletsModal();
  }

  const scrollPage = () => {
    if (window.pageYOffset > 0) {
      setSticky("sticky");
    }
  };
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", scrollPage);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", scrollPage);
    };
  });

  const getCurrentTierInfo = (totalSupply: number) => {
    if (totalSupply < 200) {
      setCurrentPrice(0.02);
      setValue(Math.min(value, 200 - totalSupply));
      setCurrentMaxAmount(Math.min(20, 200 - totalSupply));
    } else if (totalSupply < 1200) {
      setCurrentPrice(0.04);
      setValue(Math.min(value, 1200 - totalSupply));
      setCurrentMaxAmount(Math.min(20, 1200 - totalSupply));
    } else if (totalSupply < 3200) {
      setCurrentPrice(0.08);
      setValue(Math.min(value, 3200 - totalSupply));
      setCurrentMaxAmount(Math.min(20, 3200 - totalSupply));
    } else if (totalSupply < 6700) {
      setCurrentPrice(0.16);
      setValue(Math.min(value, 6700 - totalSupply));
      setCurrentMaxAmount(Math.min(20, 6700 - totalSupply));
    } else if (totalSupply < 8900) {
      setCurrentPrice(0.32);
      setValue(Math.min(value, 8900 - totalSupply));
      setCurrentMaxAmount(Math.min(20, 8900 - totalSupply));
    } else if (totalSupply < 9900) {
      setCurrentPrice(0.48);
      setValue(Math.min(value, 9900 - totalSupply));
      setCurrentMaxAmount(Math.min(20, 9900 - totalSupply));
    } else if (totalSupply < 9990) {
      setCurrentPrice(0.64);
      setValue(Math.min(value, 9990 - totalSupply));
      setCurrentMaxAmount(Math.min(20, 9990 - totalSupply));
    } else if (totalSupply < 10000) {
      setCurrentPrice(1);
      setValue(Math.min(value, 10000 - totalSupply));
      setCurrentMaxAmount(Math.min(20, 10000 - totalSupply));
    }
  };

  useAsyncEffect(async () => {
    if (cutties && cutties.totalSupply) {
      getCurrentTierInfo(cutties.totalSupply.toNumber());
    }
  }, [cutties]);

  useAsyncEffect(async () => {
    handleSliderChange(null, value);
  }, [value, currentPrice]);

  useAsyncEffect(async () => {
    setMarks([
      {
        value: 1,
        label: "1",
      },
      {
        value: currentMaxAmount,
        label: currentMaxAmount.toString(),
      },
    ]);
  }, [currentMaxAmount]);

  useAsyncEffect(async () => {
    if (wallet.account) {
      try {
        const balance = getHumanValue(new BigNumber(await web3.eth.getBalance(wallet.account)), 18);
        if (balance) {
          setEthBalance(parseFloat(balance.toFormat(4)));
        }

        if (cutties.cuttyList && cutties.cuttyList.length > 0) {
          axios
            .get(`${process.env.REACT_APP_BACKEND_BASE_URL}/rewardAmount?address=${wallet.account}`)
            .then(function (response) {
              // handle success
              setReferralAmount(response.data.data.amount);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setEthBalance(0);
    }
  }, [wallet, cutties]);

  const handleSliderChange = (event: any, newValue: any) => {
    setValue(Number(newValue));
    setTotalPrice(new BigNumber(newValue).times(currentPrice).toFormat(2));
  };

  const handleBuyNow = async () => {
    setInProgress(true);
    try {
      const res: any = await cutties.mintCuttiesSend(value, new BigNumber(totalPrice));
      await axios
        .post(`${process.env.REACT_APP_BACKEND_BASE_URL}/mint`, {
          hash: res.transactionHash,
          amount: new BigNumber(totalPrice).times(10 ** 18).toString(),
          address: wallet.account,
          to: "",
          referee: referralOwner,
          count: value,
        })
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (e) {}
    setInProgress(false);
  };

  return (
    <HomeBody>
      <Banner>
        <SlidersI {...bannerSettings} className="slider-h">
          <BannerBg>
            <img src={Banner01} alt="Banner01" />
          </BannerBg>
          <BannerBg>
            <img src={Banner02} alt="Banner02" />
          </BannerBg>
          <BannerBg>
            <img src={Banner03} alt="Banner03" />
          </BannerBg>
          <BannerBg>
            <img src={Banner04} alt="Banner04" />
          </BannerBg>
          <BannerBg>
            <img src={Banner05} alt="Banner05" />
          </BannerBg>
        </SlidersI>
        {/* <BannerInfo>
          <Container>
            <Reveal effect="fadeInUp">
              <BannerContent>
                <BannerText>Lorem ipsum dolor sit amet</BannerText>
                <BannerText>Lorem ipsum dolor sit amet</BannerText>
                <BannerText>Lorem ipsum dolor sit amet</BannerText>
                <BannerText>Lorem ipsum dolor sit amet</BannerText>
                <BannerText>Lorem ipsum dolor sit amet</BannerText>
                <BannerText>Lorem ipsum dolor sit amet</BannerText>
              </BannerContent>
            </Reveal>
          </Container>
        </BannerInfo> */}
      </Banner>
      <Container>
        <WelcomeCutties>
          <Reveal effect="fadeInUp">
            <WelcomeTitle>welcome to cutties</WelcomeTitle>
          </Reveal>
          <Reveal effect="fadeInUp">
            <AboutUs>
              Do you want to buy an NFT and get benefit without having to sell it? Do you want to have access to ERC20
              realted finance instruments like staking, vesting etc... with your NFT? Welcome to the Cutties. The
              Cutties is the project that simply combines ERC20 and NFT in one platform. It comes as a unique NFT but
              using it's embedded CUTT tokens the holders explores all the opportunities ERC20 has.
            </AboutUs>
          </Reveal>
        </WelcomeCutties>

        <MainCection>
          <Sliders {...settings}>
            <Reveal effect="fadeInUp">
              <Item>
                <ItemPic>
                  <ItemImg src={Img01} />
                </ItemPic>
              </Item>
            </Reveal>
            <Reveal effect="fadeInUp">
              <Item>
                <ItemPic>
                  <ItemImg src={Img02} />
                </ItemPic>
              </Item>
            </Reveal>
            <Reveal effect="fadeInUp">
              <Item>
                <ItemPic>
                  <ItemImg src={Img03} />
                </ItemPic>
              </Item>
            </Reveal>
            <Reveal effect="fadeInUp">
              <Item>
                <ItemPic>
                  <ItemImg src={Img04} />
                </ItemPic>
              </Item>
            </Reveal>
            <Reveal effect="fadeInUp">
              <Item>
                <ItemPic>
                  <ItemImg src={Img05} />
                </ItemPic>
              </Item>
            </Reveal>
            <Reveal effect="fadeInUp">
              <Item>
                <ItemPic>
                  <ItemImg src={Img06} />
                </ItemPic>
              </Item>
            </Reveal>
          </Sliders>
        </MainCection>

        <Progression>
          <Reveal effect="fadeInUp">
            <ProgressionTitle>PROGRESSION</ProgressionTitle>
          </Reveal>
          <Reveal effect="fadeInUp">
            <Minted>
              <span>{cutties.totalSupply?.toNumber()} Minted / 10,000</span>
            </Minted>
          </Reveal>

          <FlipCard totalSupply={cutties.totalSupply?.toNumber()} />
          {/* <Reveal effect="fadeInUp">
            <ProgressionChart>
              <BorderLinearProgress variant="determinate" value={percent} />
              <ProgressInfo>
                <li className="bgred">
                  <span>0.02 ETH</span>
                  <span>200</span>
                </li>
                <li className={percent >= 12 ? "bgred" : ""}>
                  <span>0.04 ETH</span>
                  <span>1000</span>
                </li>
                <li className={percent >= 32 ? "bgred" : ""}>
                  <span>0.08 ETH</span>
                  <span>2000</span>
                </li>
                <li className={percent >= 67 ? "bgred" : ""}>
                  <span>0.16 ETH</span>
                  <span>3500</span>
                </li>
                <li className={percent >= 89 ? "bgred" : ""}>
                  <span>0.32 ETH</span>
                  <span>2200</span>
                </li>
                <li className={percent >= 99 ? "bgred" : ""}>
                  <span>0.48 ETH</span>
                  <span>1000</span>
                </li>
                <li className={percent >= 99.9 ? "bgred" : ""}>
                  <span>0.64 ETH</span>
                  <span>90</span>
                </li>
                <li className={percent === 100 ? "bgred" : ""}>
                  <span>1 ETH</span>
                  <span>10</span>
                </li>
              </ProgressInfo>
            </ProgressionChart>
          </Reveal> */}
        </Progression>
      </Container>

      <ContainerSticky style={{ position: `${getSticky}` }}>
        <ProductInfo>
          <Reveal effect="fadeInUp">
            <AmountSlider>
              <AmountQty>
                <span>choose amount:</span>
                <span className="qty">{value}</span>
                <RiMenu2Fill size={24} />
              </AmountQty>
              <MiSlider>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={value}
                  marks={marks}
                  min={1}
                  max={currentMaxAmount}
                  onChange={handleSliderChange}
                />
              </MiSlider>
            </AmountSlider>
            <TotalAmount>
              <AmountQty>
                <span>total price:</span>
                <span className="qty">{totalPrice}</span>
                <span className="eth">eth</span>
              </AmountQty>
              <AmountQty>
                <span>balance:</span>
                <span className="qty">{ethBalance}</span>
                <span className="eth">eth</span>
              </AmountQty>
            </TotalAmount>
            {!wallet.isActive ? (
              <ActionButton>
                <BuyButton onClick={handleWalletConnect}>CONNECT WALLET</BuyButton>
              </ActionButton>
            ) : (
              <ActionButton>
                <BuyButton onClick={() => handleBuyNow()} disabled={inProgress}>
                  {inProgress && (
                    <span>
                      <Spinner animation="border" />
                      &nbsp;&nbsp;&nbsp;
                    </span>
                  )}
                  BUY NOW
                </BuyButton>
                {cutties.cuttyList && cutties.cuttyList.length > 0 && (
                  <MyReferrals onClick={() => setReferralShow(true)}>MY REFERRALS</MyReferrals>
                )}
                <Referrals show={referralShow} onHide={() => setReferralShow(false)} referralAmount={referralAmount} />
              </ActionButton>
            )}
          </Reveal>
        </ProductInfo>
      </ContainerSticky>
      <LaunchAlert show={alertShow} onHide={() => setAlertShow(false)} />
    </HomeBody>
  );
};
export default Home;
