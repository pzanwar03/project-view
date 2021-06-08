import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Reveal from "react-reveal/Reveal";
import DiscordPng from "../assets/img/social/discord.svg";
import OpenseaPng from "../assets/img/social/opensea.svg";
import medium from "../assets/img/social/medium.svg";
import twitter from "../assets/img/social/twitter.svg";
import github from "../assets/img/social/github.svg";

const Footers = styled.footer`
  background-color: #363636;
  padding: 25px 15px;
`;

const FooterLogo = styled.a`
  font-size: 30px;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  margin: 10px 0 20px;
  &:hover {
    color: #fff;
  }
  margin-bottom: 40px;
`;
const FooterMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
const MenuALink = styled.a`
  color: #fff;
  font-size: 18px;
  display: inline-block;
  margin: 10px 0;
  text-transform: uppercase;
  &:hover {
    color: yellow;
  }
`;
const MenuLink = styled(Link)`
  color: #fff;
  font-size: 18px;
  display: inline-block;
  margin: 10px 0;
  text-transform: uppercase;
  &:hover {
    color: yellow;
  }
`;
const FooterRight = styled.div`
  text-align: right;
`;
const FooterButtom = styled.div`
  @media (max-width: 991px) {
  }
`;
const LogoArea = styled.div`
  text-align: center;
  @media (max-width: 991px) {
    height: 60px;
    margin-top: 0px;
  }
`;
const SocialMedia = styled.ul`
  margin: 25px 0 0;
  padding: 0;
  list-style: none;
  @media (max-width: 767px) {
    text-align: center;
    margin: 20px 0 0;
  }
  & > li {
    display: inline-block;
    margin-right: 25px;
    padding: 10px;
    text-align: center;
    :last-child {
      margin-right: 0;
    }
    @media (max-width: 420px) {
      padding: 7px;
      margin-right: 15px;
      & svg {
        width: 30px;
      }
      & img {
        width: 30px !important;
      }
    }
    @media (max-width: 340px) {
      & svg {
        width: 26px;
      }
      & img {
        width: 26px !important;
      }
    }
  }
`;
const CopyWrite = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  margin: 40px 0 0;
`;

const Footer = () => {
  return (
    <Footers>
      <Container>
        <LogoArea>
          <Reveal effect="fadeInUp">
            <FooterLogo href="/" className="navbar-brand">
              cutties
            </FooterLogo>
          </Reveal>
        </LogoArea>
        <FooterButtom>
          <Row>
            <Col md="6">
              <Reveal effect="fadeInUp">
                <FooterMenu>
                  <li>
                    <MenuALink
                      href="https://docs.google.com/document/d/1KGt4OaIm0ThCBL-8g4EZ5OLPsz3EE8Z9yXZGXTrkmfg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      about
                    </MenuALink>
                  </li>
                  <li>
                    <MenuLink to="/gallery">gallery</MenuLink>
                  </li>
                  <li>
                    <MenuLink to="/farming">farming</MenuLink>
                  </li>
                  <li>
                    <MenuLink to="/governance">governance</MenuLink>
                  </li>
                </FooterMenu>
              </Reveal>
            </Col>
            <Col md="6">
              <FooterRight>
                <Reveal effect="fadeInUp">
                  <SocialMedia>
                    <li>
                      <a href="https://github.com/CuttiesOfficial" target="_blank" rel="noreferrer">
                        <img src={github} style={{ width: "35px" }} alt="Github" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://cuttiesofficial.medium.com/cutties-whitepaper-aa70fec4bc27"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={medium} style={{ width: "35px" }} alt="Medium" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/CuttiesOfficial" target="_blank" rel="noreferrer">
                        <img src={twitter} style={{ width: "35px" }} alt="Twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://discord.gg/fr9Zqx3HgV" target="_blank" rel="noreferrer">
                        <img src={DiscordPng} style={{ width: "35px" }} alt="Discord" />
                      </a>
                    </li>
                    <li>
                      <a href="/" target="_blank" rel="noreferrer">
                        <img src={OpenseaPng} style={{ width: "35px" }} alt="Opensea" />
                      </a>
                    </li>
                  </SocialMedia>
                </Reveal>
              </FooterRight>
            </Col>
          </Row>
          <Reveal effect="fadeInUp">
            <CopyWrite>cutties@2021</CopyWrite>
          </Reveal>
        </FooterButtom>
      </Container>
    </Footers>
  );
};

export default Footer;
