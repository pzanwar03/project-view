import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProfilePic from "../../../assets/img/profile.png";
import { FormGroup } from "react-bootstrap";
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      width: "100%",
      borderRadius: 30,
      position: "relative",
      backgroundColor: "#272727",
      border: "0px",
      color: "#fff",
      fontSize: 18,

      padding: "15px 70px 15px 30px",
      textTransform: "uppercase",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:focus": {
        borderRadius: 30,
        borderColor: "#fff",
        boxShadow: "0 0 0 1px rgba(255,255,255,.1)",
      },
    },
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  })
);

const ProfileInfo = styled.div``;
const UserInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
`;
const UserImg = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  margin-right: 20px;
  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
  }
`;
const UserName = styled.div`
  font-size: 18px;
  margin-top: 5px;
  font-weight: 300;
  @media (max-width: 480px) {
    font-size: 16px;
  }
  & span {
    font-weight: 700;
    font-size: 24px;
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
`;
const TokenNum = styled.div`
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  margin: 25px 0;
  @media (max-width: 480px) {
    font-size: 15px;
  }
  & span {
    font-weight: 400;
    font-size: 24px;
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
`;
const ErcToken = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #646464;
  border-bottom: 1px solid #646464;
  padding: 20px 0;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const ErcLeft = styled.div`
  width: 50%;
  padding-right: 8%;
  border-right: 1px solid #646464;
  @media (max-width: 767px) {
    width: 100%;
    padding-right: 0%;
    border-right: 0;
    border-bottom: 1px solid #646464;
    margin-bottom: 20px;
    padding-bottom: 14px;
  }
`;
const ErcRight = styled.div`
  width: 50%;
  padding-left: 8%;
  @media (max-width: 767px) {
    width: 100%;
    padding-left: 0%;
  }
`;
const FormGroups = styled(FormGroup)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  & label {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 300;
    margin-top: 10px;
    @media (max-width: 420px) {
      font-size: 16px;
    }
  }
  & .inputs-group {
    width: 78%;
    background: #272727;
    border-radius: 30px;
    border: 0;
    padding: 12px 30px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 18px;
    &:focus-visible {
      outline: 0;
    }
  }
`;
const FormControls = styled(FormControl)`
  width: 78%;
  margin: 0 !important;
`;
const InfoTitle = styled.h4`
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 40px;
  margin-top: 20px;
`;
const ErcEnd = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 60px;
  border-bottom: 1px solid #646464;
  padding-bottom: 20px;
`;
const ErcCenter = styled.div`
  width: 50%;
  padding: 0 4%;
  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`;
const SubmitBtnArea = styled.div`
  text-align: center;
`;
const SubmitBtn = styled(Link)`
  background: #be1e2d;
  box-shadow: 0px 0px 10px #be1e2d;
  border-radius: 30px;
  font-weight: 800;
  font-size: 28px;
  line-height: 33px;
  color: #fff;
  text-transform: uppercase;
  padding: 13px 55px;
  display: inline-block;
  &:hover {
    color: #fff;
  }
`;

const Info = () => {
  const classes = useStyles();
  const [token, setToken] = React.useState("");
  const [token2, setToken2] = React.useState("");
  const [token3, setToken3] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setToken(event.target.value as string);
  };
  const handleChange2 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setToken2(event.target.value as string);
  };
  const handleChange3 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setToken3(event.target.value as string);
  };

  return (
    <ProfileInfo>
      <UserInfo>
        <UserImg src={ProfilePic} />
        <UserName>
          OWNED BY: <br />
          <span>0x364..5f5</span>
        </UserName>
      </UserInfo>
      <TokenNum>
        number of token inside: <span>0</span>
      </TokenNum>
      <ErcToken>
        <ErcLeft>
          <InfoTitle>erc20(0)</InfoTitle>
          <FormGroups>
            <label>token</label>
            <FormControls className={classes.margin}>
              <NativeSelect
                id="demo-customized-select-native"
                value={token}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <option value="opt1">opt01</option>
                <option value="opt2">opt02</option>
              </NativeSelect>
            </FormControls>
          </FormGroups>
          <FormGroups>
            <label>amount</label>
            <input type="text" className="inputs-group" name="amount" />
          </FormGroups>
        </ErcLeft>
        <ErcRight>
          <InfoTitle>erc721(0)</InfoTitle>
          <FormGroups>
            <label>token</label>
            <FormControls className={classes.margin}>
              <NativeSelect
                id="demo-customized-select-native"
                value={token2}
                onChange={handleChange2}
                input={<BootstrapInput />}
              >
                <option value="opt1">opt01</option>
                <option value="opt2">opt02</option>
              </NativeSelect>
            </FormControls>
          </FormGroups>
          <FormGroups>
            <label>ID</label>
            <input type="text" className="inputs-group" name="id" />
          </FormGroups>
        </ErcRight>
      </ErcToken>
      <ErcEnd>
        <ErcCenter>
          <InfoTitle>erc20(0)</InfoTitle>
          <FormGroups>
            <label>token</label>
            <FormControls className={classes.margin}>
              <NativeSelect
                id="demo-customized-select-native"
                value={token3}
                onChange={handleChange3}
                input={<BootstrapInput />}
              >
                <option value="opt1">opt01</option>
                <option value="opt2">opt02</option>
              </NativeSelect>
            </FormControls>
          </FormGroups>
          <FormGroups>
            <label>amount</label>
            <input type="text" className="inputs-group" name="amount" />
          </FormGroups>
        </ErcCenter>
      </ErcEnd>
      <SubmitBtnArea>
        <SubmitBtn to="/">view on opensea</SubmitBtn>
      </SubmitBtnArea>
    </ProfileInfo>
  );
};
export default Info;
