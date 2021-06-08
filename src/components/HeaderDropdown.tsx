import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";

const DropdownButtons = styled(DropdownButton)`
  & button#dropdown-item-button {
    background-color: transparent;
    font-size: 18px;
    border-radius: 84px;
    padding: 10px 22px;
    border: 1px solid #fff;
    color: #fff;
    text-transform: uppercase;
    width: 250px;
    text-align: center;
    &:focus {
      box-shadow: 0 0 0 0 rgb(38 143 255 / 50%);
    }
  }
  & .dropdown-menu {
    text-align: center;
    width: 100%;
    font-size: 18px;
    text-transform: uppercase;
    background-color: #363636;
    border-radius: 20px;
    margin-top: 5px !important;
    padding: 15px 0;
  }
  .dropdown-toggle::after {
    display: none;
  }
`;
const Links = styled(Link)`
  font-size: 18px;
  color: #fff;
  font-weight: 400;
  display: block;
  margin: 5px 0;
`;

const HeaderDropdown = () => {
  const [value, setValue] = useState("connect wallet");
  const [show, setShow] = useState(false);
  return (
    <DropdownButtons id="dropdown-item-button" title={value} show={show} onClick={() => setShow(show ? false : true)}>
      <Dropdown.ItemText>
        <Links
          to="/"
          onClick={(e) => {
            setValue("connect wallet");
            setShow(false);
          }}
        >
          connect wallet
        </Links>
      </Dropdown.ItemText>
      <Dropdown.ItemText>
        <Links
          to="/items"
          onClick={(e) => {
            setValue("My Items");
            setShow(false);
          }}
        >
          My Items
        </Links>
      </Dropdown.ItemText>
    </DropdownButtons>
  );
};
export default HeaderDropdown;
