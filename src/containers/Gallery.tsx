import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { GrPrevious, GrNext } from "react-icons/gr";
import { createStyles, makeStyles, withStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

import CatImg01 from "../assets/img/products/cats/1.png";
import CatImg02 from "../assets/img/products/cats/2.png";
import CatImg03 from "../assets/img/products/cats/3.png";
import CatImg04 from "../assets/img/products/cats/4.png";


import DogImg01 from "../assets/img/products/dogs/1.png";
import DogImg02 from "../assets/img/products/dogs/2.png";
import DogImg03 from "../assets/img/products/dogs/3.png";
import DogImg04 from "../assets/img/products/dogs/4.png";

import RabbitImg01 from "../assets/img/products/rabbits/1.png";
import RabbitImg02 from "../assets/img/products/rabbits/2.png";
import RabbitImg03 from "../assets/img/products/rabbits/3.png";
import RabbitImg04 from "../assets/img/products/rabbits/4.png";

import catPlaceHolder from '../assets/img/cat.gif';
import dogPlaceHolder from '../assets/img/dog.gif';
import rabbitPlaceHolder from '../assets/img/rabbit.gif';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      width: "100%",
      borderRadius: 4,
      position: "relative",
      backgroundColor: "#363636",
      border: "0px",
      color: "#fff",
      fontSize: 18,
      borderTopLeftRadius: "20px",
      borderEndStartRadius: "20px",
      borderBottomRightRadius: "20px",
      borderTopRightRadius: "20px",
      padding: "12px 70px 12px 30px",
      textTransform: "uppercase",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:focus": {
        borderRadius: 20,
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

const MainSection = styled.div`
  margin: 60px 0;
  @media (max-width: 767px) {
    margin: 30px 0;
  }
`;
const MainContainer = styled(Container)``;
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
const SelectMenu = styled.div``;
const ProductGallery = styled.div``;
const ProductInfo = styled.div`
  margin-bottom: 40px;
`;
const ProductPic = styled.img`
  border-radius: 20px;
  width: 100%;
`;
const ProductName = styled.h5`
  font-size: 16px;
  margin-top: 20px;
`;
// const ProductDes = styled.p`
//   font-size: 14px;
// `;
const Pagination = styled.div`
  margin: 40px 0;
  text-align: center;
`;
const PaginationPage = styled.label`
  text-transform: uppercase;
  margin: 0px 20px;
  font-size: 18px;
  & span {
    position: relative;
    padding: 0 5px;
    &:after {
      height: 1px;
      display: block;
      width: 100%;
      background: #f1f1f1;
      content: "";
      position: absolute;
      left: 0;
    }
  }
`;
const NextPrev = styled(Link)``;
const FormControls = styled(FormControl)`
  width: 280px;
  @media (max-width: 480px) {
    width: 200px;
  }
  @media (max-width: 360px) {
    width: 150px;
  }
`;

const Gallery = () => {
  const classes = useStyles();
  const [filter, setFilter] = React.useState("");
  const [object, setObject] = React.useState("Cat");


  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilter(event.target.value as string);

    var object = event.target.value as string;
    setObject(object.substr(0, object.length - 1));
  };

  return (
    <MainSection>
      <MainContainer>
        <OptionBar>
          <BackBtn to="/">
            <GrPrevious size={28} /> &nbsp; BACK
          </BackBtn>
          <SelectMenu>
            <FormControls className={classes.margin}>
              <NativeSelect
                id="demo-customized-select-native"
                value={filter}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <option value="Cats">Cats</option>
                <option value="Dogs">Dogs</option>
                <option value="Rabbits">Rabbits</option>
              </NativeSelect>
            </FormControls>
          </SelectMenu>
        </OptionBar>

        <ProductGallery>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ProductInfo>
                <ProductPic src={object === 'Cat' ? CatImg01 : object === 'Dog' ? DogImg01 : RabbitImg01} />
                <ProductName>{object} #1</ProductName>
              </ProductInfo>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ProductInfo>
                <ProductPic src={object === 'Cat' ? CatImg02 : object === 'Dog' ? DogImg02 : RabbitImg02} />
                <ProductName>{object} #2</ProductName>
              </ProductInfo>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ProductInfo>
                <ProductPic src={object === 'Cat' ? CatImg03 : object === 'Dog' ? DogImg03 : RabbitImg03} />
                <ProductName>{object} #3</ProductName>
              </ProductInfo>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ProductInfo>
                <ProductPic src={object === 'Cat' ? CatImg04 : object === 'Dog' ? DogImg04 : RabbitImg04} />
                <ProductName>{object} #4</ProductName>
              </ProductInfo>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ProductInfo>
                <ProductPic src={object === 'Cat' ? catPlaceHolder : object === 'Dog' ? dogPlaceHolder : rabbitPlaceHolder} />
                <ProductName>{object} #5</ProductName>
              </ProductInfo>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ProductInfo>
              <ProductPic src={object === 'Cat' ? catPlaceHolder : object === 'Dog' ? dogPlaceHolder : rabbitPlaceHolder} />
                <ProductName>{object} #6</ProductName>
              </ProductInfo>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ProductInfo>
                <ProductPic src={object === 'Cat' ? catPlaceHolder : object === 'Dog' ? dogPlaceHolder : rabbitPlaceHolder} />
                <ProductName>{object} #7</ProductName>
              </ProductInfo>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ProductInfo>
                <ProductPic src={object === 'Cat' ? catPlaceHolder : object === 'Dog' ? dogPlaceHolder : rabbitPlaceHolder} />
                <ProductName>{object} #8</ProductName>
              </ProductInfo>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ProductInfo>
                <ProductPic src={object === 'Cat' ? catPlaceHolder : object === 'Dog' ? dogPlaceHolder : rabbitPlaceHolder} />
                <ProductName>{object} #9</ProductName>
              </ProductInfo>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ProductInfo>
                <ProductPic src={object === 'Cat' ? catPlaceHolder : object === 'Dog' ? dogPlaceHolder : rabbitPlaceHolder} />
                <ProductName>{object} #10</ProductName>
              </ProductInfo>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ProductInfo>
                <ProductPic src={object === 'Cat' ? catPlaceHolder : object === 'Dog' ? dogPlaceHolder : rabbitPlaceHolder} />
                <ProductName>{object} #11</ProductName>
              </ProductInfo>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ProductInfo>
                <ProductPic src={object === 'Cat' ? catPlaceHolder : object === 'Dog' ? dogPlaceHolder : rabbitPlaceHolder} />
                <ProductName>{object} #12</ProductName>
              </ProductInfo>
            </Col>
          </Row>
        </ProductGallery>

        <Pagination>
          <NextPrev to="#">
            <GrPrevious />
          </NextPrev>
          <PaginationPage>
            Page <span>1</span> of &nbsp; 1
          </PaginationPage>
          <NextPrev to="#">
            <GrNext />
          </NextPrev>
        </Pagination>
      </MainContainer>
    </MainSection>
  );
};

export default Gallery;
