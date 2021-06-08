import React, { useState } from "react";
import { useWallet } from "wallets/wallet";
import { useHistory } from "react-router-dom";
import { shortenAddr } from "web3/utils";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlinePoweroff } from "react-icons/ai";

import logo from "../assets/img/logo.svg";
import DiscordPng from "../assets/img/social/discord.svg";
import OpenseaPng from "../assets/img/social/opensea.svg";
import MediumPng from "../assets/img/social/medium.svg";
import TwitterPng from "../assets/img/social/twitter.svg";
import GithubPng from "../assets/img/social/github.svg";

interface IHeaderProps {
  page: string;
}

const MainContainer = styled(Container)`
  width: 90%;
  padding: 25px 0;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 20px 0;
  }
  @media (max-width: 991px) {
    padding: 5px 0;
  }
  @media (max-width: 767px) {
    padding: 10px 0;
  }
`;
const MenuLink = styled(Link)`
  font-size: 18px;
  font-weight: 400;
  color: #f1f1f1 !important;
  text-transform: uppercase;
  margin-right: 20px;
  position: relative;
  text-shadow: 0px 3px 14px #000;
  @media (max-width: 1200px) {
    margin-right: 15px;
    text-align: center;
  }
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: yellow !important;
  }
  @media (max-width: 991px) {
    margin: 0;
  }
`;
const MenuALink = styled.a`
  font-size: 18px;
  font-weight: 400;
  color: #f1f1f1 !important;
  text-transform: uppercase;
  margin-right: 20px;
  position: relative;
  text-shadow: 0px 3px 14px #000;
  @media (max-width: 1200px) {
    margin-right: 15px;
    text-align: center;
  }
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: yellow !important;
  }
  @media (max-width: 991px) {
    margin: 0;
  }
`;

const Dropdown = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #f1f1f1 !important;
  text-transform: uppercase;
  margin-right: 45px;
  margin-top: 8px;
  position: relative;
  text-shadow: 0px 3px 14px #000;
  cursor: pointer;
  @media (max-width: 1200px) {
    margin-right: 30px;
  }
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: yellow !important;
  }
  @media (max-width: 991px) {
    margin: 5px 0 15px;
    text-align: center;
  }
`;

const LogoImg = styled.img`
  width: 200px;
  @media (max-width: 767px) {
    width: 125px;
  }
`;
const NavBtn = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: block;
    margin: 0 auto 30px;
  }
`;
const NavI = styled(Nav)`
  margin: auto !important;
  @media (max-width: 991px) {
    margin: 40px auto 0 !important;
  }
  & .nav-link:last-child {
    margin-right: 0;
  }
`;
const NavLogo = styled.a``;
const RightMenu = styled.div`
  display: flex;
  width: 260px;
  margin-top: -5px;
  @media (max-width: 991px) {
    display: none;
  }
`;
// const SoonLable = styled.span`
//   font-size: 9px;
//   position: absolute;
//   border: 1px solid #fff;
//   padding: 0 5px;
//   border-radius: 20px;
//   top: 0px;
// `;
const ContacthBtn = styled(Button)`
  background-color: transparent;
  font-size: 18px;
  border-radius: 84px;
  padding: 10px 35px;
  border: 1px solid #fff;
  width: 250px;
  text-shadow: 0px 3px 14px #000;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
  }
  &:focus {
    color: #fff;
    background-color: transparent;
    box-shadow: 0 0 0 0 rgb(38 143 255 / 50%);
    border: 1px solid #fff;
  }
  &:not(:disabled):not(.disabled):active {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
  }
  &:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 0.2rem rgb(0 0 0 / 5%);
  }
`;
const ContacthLink = styled.div`
  background-color: transparent;
  font-size: 18px;
  border-radius: 84px;
  padding: 10px 35px;
  border: 1px solid #fff;
  width: 250px;
  text-align: center;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  text-shadow: 0px 3px 14px #000;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
  }
  &:focus {
    color: #fff;
    background-color: transparent;
    box-shadow: 0 0 0 0 rgb(38 143 255 / 50%);
    border: 1px solid #fff;
  }
`;

const Header: React.FC<IHeaderProps> = (params) => {
  const { page } = params;
  // const [connectShow, setConnectShow] = useState(false);
  // const [showSideMenu, setShowSideMenu] = useState("CONNECT WALLET");

  const [expanded, setExpanded] = useState<any>(false);

  let history = useHistory();
  const wallet = useWallet();

  function handleWalletConnect() {
    wallet.showWalletsModal();
  }

  function handleWalletDisconnect() {
    wallet.disconnect();
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);

  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleDisconnect = () => {
    handleWalletDisconnect();
    handleClose2();
    history.push("/");
  };

  const ITEM_HEIGHT = 48;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      expanded={expanded}
      className="menu-area navbar-dark bg-darks"
      style={{ zIndex: 10 }}
    >
      <MainContainer fluid>
        <Row style={{ width: "100%" }} className="m-0">
          <Col lg={2}>
            <NavLogo href="/">
              <LogoImg src={logo} />
            </NavLogo>
          </Col>
          <Col lg={8} className="pt-0">
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <NavI>
                <MenuALink
                  href="https://docs.google.com/document/d/1KGt4OaIm0ThCBL-8g4EZ5OLPsz3EE8Z9yXZGXTrkmfg"
                  className={"nav-link " + (page === "/about" ? "active" : "")}
                  onClick={() => setExpanded(false)}
                  target="_blank"
                >
                  ABOUT
                </MenuALink>
                <MenuLink
                  to="/gallery"
                  className={"nav-link " + (page === "/gallery" ? "active" : "")}
                  onClick={() => setExpanded(false)}
                >
                  GALLERY
                </MenuLink>
                <MenuLink
                  to="/farming"
                  className={"nav-link " + (page === "/farming" ? "active" : "")}
                  onClick={() => setExpanded(false)}
                >
                  Farming
                </MenuLink>
                <MenuLink
                  to="/governance"
                  className={"nav-link " + (page === "/governance" ? "active" : "")}
                  onClick={() => setExpanded(false)}
                >
                  Governance
                </MenuLink>
                <Dropdown onClick={handleClick}>COMMUNITY</Dropdown>
                {wallet.account && (
                  <MenuLink
                    to="/items"
                    className={"nav-link " + (page === "/items" ? "active" : "")}
                    onClick={() => setExpanded(false)}
                  >
                    MY ITEMS
                  </MenuLink>
                )}
                <NavBtn>
                  {!wallet.isActive ? (
                    <ContacthBtn onClick={handleWalletConnect}>CONNECT WALLET</ContacthBtn>
                  ) : (
                    <ContacthLink onClick={handleClick2}>
                      {shortenAddr(wallet.account ? wallet.account : "")}
                    </ContacthLink>
                  )}
                </NavBtn>
              </NavI>
            </Navbar.Collapse>
          </Col>
          <Col lg={2} className="pt-0">
            <RightMenu>
              {!wallet.isActive ? (
                <ContacthBtn onClick={handleWalletConnect}>CONNECT WALLET</ContacthBtn>
              ) : (
                <ContacthLink onClick={handleClick2}>{shortenAddr(wallet.account ? wallet.account : "")}</ContacthLink>
              )}
            </RightMenu>
          </Col>
        </Row>
        {/* <ConnectWallet
          show={connectShow}
          setConnectShow={setConnectShow}
          setShowSideMenu={setShowSideMenu}
          onHide={() => setConnectShow(false)}
        /> */}
      </MainContainer>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            background: "rgba(54, 54, 54, 0.99)",
            marginTop: "40px",
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "150px",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href="https://twitter.com/CuttiesOfficial" target="_blank" rel="noreferrer" style={{ color: "white" }}>
            <img src={TwitterPng} style={{ width: "22px" }} alt="Twitter" />
            &nbsp;&nbsp;Twitter
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="https://discord.gg/fr9Zqx3HgV" target="_blank" rel="noreferrer" style={{ color: "white" }}>
            <img src={DiscordPng} style={{ width: "22px" }} alt="Discord" />
            &nbsp;&nbsp;Discord
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="https://" target="_blank" rel="noreferrer" style={{ color: "white" }}>
            <img src={MediumPng} style={{ width: "22px" }} alt="Medium" />
            &nbsp;&nbsp;Medium
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="https://github.com/CuttiesOfficial" target="_blank" rel="noreferrer" style={{ color: "white" }}>
            <img src={GithubPng} style={{ width: "22px" }} alt="Github" />
            &nbsp;&nbsp;Github
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="https://" target="_blank" rel="noreferrer" style={{ color: "white" }}>
            <img src={OpenseaPng} style={{ width: "22px" }} alt="Opensea" />
            &nbsp;&nbsp;Opensea
          </a>
        </MenuItem>
      </Menu>

      <Menu
        id="connect-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={open2}
        onClose={handleClose2}
        PaperProps={{
          style: {
            background: "rgba(54, 54, 54, 0.99)",
            color: "white",
            marginTop: "60px",
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "150px",
          },
        }}
      >
        <MenuItem onClick={handleDisconnect}>
          <AiOutlinePoweroff size={22} color="#FF0000" />
          &nbsp;&nbsp;Disconnect
        </MenuItem>
      </Menu>
    </Navbar>
  );
};

export default Header;
