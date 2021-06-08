import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { BiLock } from "react-icons/bi";
import { GrPrevious, GrNext } from "react-icons/gr";
import { AiOutlineEyeInvisible, AiOutlineHeart } from "react-icons/ai";
import Dropdown from "../../components/Dropdown";

import CatImg01 from "../assets/img/products/cats/1.png";
import CatImg02 from "../assets/img/products/cats/2.png";
import CatImg03 from "../assets/img/products/cats/3.png";
import CatImg04 from "../assets/img/products/cats/4.png";
import CatImg05 from "../assets/img/products/cats/5.png";
import CatImg06 from "../assets/img/products/cats/6.png";
import CatImg07 from "../assets/img/products/cats/7.png";
import CatImg08 from "../assets/img/products/cats/8.png";
import CatImg09 from "../assets/img/products/cats/9.png";
import CatImg10 from "../assets/img/products/cats/10.png";
import CatImg11 from "../assets/img/products/cats/11.png";
import CatImg12 from "../assets/img/products/cats/12.png";

import DogImg01 from "../assets/img/products/dogs/1.png";
import DogImg02 from "../assets/img/products/dogs/2.png";
import DogImg03 from "../assets/img/products/dogs/3.png";
import DogImg04 from "../assets/img/products/dogs/4.png";
import DogImg05 from "../assets/img/products/dogs/5.png";
import DogImg06 from "../assets/img/products/dogs/6.png";
import DogImg07 from "../assets/img/products/dogs/7.png";
import DogImg08 from "../assets/img/products/dogs/8.png";
import DogImg09 from "../assets/img/products/dogs/9.png";
import DogImg10 from "../assets/img/products/dogs/10.png";
import DogImg11 from "../assets/img/products/dogs/11.png";
import DogImg12 from "../assets/img/products/dogs/12.png";

import RabbitImg01 from "../assets/img/products/rabbits/1.png";
import RabbitImg02 from "../assets/img/products/rabbits/2.png";
import RabbitImg03 from "../assets/img/products/rabbits/3.png";
import RabbitImg04 from "../assets/img/products/rabbits/4.png";
import RabbitImg05 from "../assets/img/products/rabbits/5.png";
import RabbitImg06 from "../assets/img/products/rabbits/6.png";
import RabbitImg07 from "../assets/img/products/rabbits/7.png";
import RabbitImg08 from "../assets/img/products/rabbits/8.png";
import RabbitImg09 from "../assets/img/products/rabbits/9.png";
import RabbitImg10 from "../assets/img/products/rabbits/10.png";
import RabbitImg11 from "../assets/img/products/rabbits/11.png";
import RabbitImg12 from "../assets/img/products/rabbits/12.png";

const ItemSection = styled.div``;
const Items = styled.div`
  border: 1px solid #646464;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 30px;
`;
const ItemHead = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ItemLock = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
`;
const ItemMenu = styled.div``;
const ItemImage = styled.img`
  width: 100%;
  margin: 10px 0;
`;
const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ItemTitle = styled(Link)`
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  margin: 5px 0;
  &:hover {
    color: #fff;
  }
`;
const ItemLike = styled.div`
  margin: 5px 0;
`;
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

const OnSale = () => {
  return (
    <ItemSection>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Items>
            <ItemHead>
              <ItemLock>
                <BiLock />
                <AiOutlineEyeInvisible />
              </ItemLock>
              <ItemMenu>
                <Dropdown />
              </ItemMenu>
            </ItemHead>
            <ItemImage src={Img05} />
            <ItemFooter>
              <ItemTitle to="/items/details/info">item #1</ItemTitle>
              <ItemLike>
                <AiOutlineHeart size={20} />
              </ItemLike>
            </ItemFooter>
          </Items>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Items>
            <ItemHead>
              <ItemLock>
                <BiLock />
                <AiOutlineEyeInvisible />
              </ItemLock>
              <ItemMenu>
                <Dropdown />
              </ItemMenu>
            </ItemHead>
            <ItemImage src={Img06} />
            <ItemFooter>
              <ItemTitle to="/items/details/info">item #1</ItemTitle>
              <ItemLike>
                <AiOutlineHeart size={20} />
              </ItemLike>
            </ItemFooter>
          </Items>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Items>
            <ItemHead>
              <ItemLock>
                <BiLock />
                <AiOutlineEyeInvisible />
              </ItemLock>
              <ItemMenu>
                <Dropdown />
              </ItemMenu>
            </ItemHead>
            <ItemImage src={Img07} />
            <ItemFooter>
              <ItemTitle to="/items/details/info">item #1</ItemTitle>
              <ItemLike>
                <AiOutlineHeart size={20} />
              </ItemLike>
            </ItemFooter>
          </Items>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Items>
            <ItemHead>
              <ItemLock>
                <BiLock />
                <AiOutlineEyeInvisible />
              </ItemLock>
              <ItemMenu>
                <Dropdown />
              </ItemMenu>
            </ItemHead>
            <ItemImage src={Img08} />
            <ItemFooter>
              <ItemTitle to="/items/details/info">item #1</ItemTitle>
              <ItemLike>
                <AiOutlineHeart size={20} />
              </ItemLike>
            </ItemFooter>
          </Items>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Items>
            <ItemHead>
              <ItemLock>
                <BiLock />
                <AiOutlineEyeInvisible />
              </ItemLock>
              <ItemMenu>
                <Dropdown />
              </ItemMenu>
            </ItemHead>
            <ItemImage src={Img09} />
            <ItemFooter>
              <ItemTitle to="/items/details/info">item #1</ItemTitle>
              <ItemLike>
                <AiOutlineHeart size={20} />
              </ItemLike>
            </ItemFooter>
          </Items>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Items>
            <ItemHead>
              <ItemLock>
                <BiLock />
                <AiOutlineEyeInvisible />
              </ItemLock>
              <ItemMenu>
                <Dropdown />
              </ItemMenu>
            </ItemHead>
            <ItemImage src={Img10} />
            <ItemFooter>
              <ItemTitle to="/items/details/info">item #1</ItemTitle>
              <ItemLike>
                <AiOutlineHeart size={20} />
              </ItemLike>
            </ItemFooter>
          </Items>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Items>
            <ItemHead>
              <ItemLock>
                <BiLock />
                <AiOutlineEyeInvisible />
              </ItemLock>
              <ItemMenu>
                <Dropdown />
              </ItemMenu>
            </ItemHead>
            <ItemImage src={Img11} />
            <ItemFooter>
              <ItemTitle to="/items/details/info">item #1</ItemTitle>
              <ItemLike>
                <AiOutlineHeart size={20} />
              </ItemLike>
            </ItemFooter>
          </Items>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Items>
            <ItemHead>
              <ItemLock>
                <BiLock />
                <AiOutlineEyeInvisible />
              </ItemLock>
              <ItemMenu>
                <Dropdown />
              </ItemMenu>
            </ItemHead>
            <ItemImage src={Img12} />
            <ItemFooter>
              <ItemTitle to="/items/details/info">item #1</ItemTitle>
              <ItemLike>
                <AiOutlineHeart size={20} />
              </ItemLike>
            </ItemFooter>
          </Items>
        </Col>
      </Row>

      <Pagination>
        <NextPrev to="/">
          <GrPrevious />
        </NextPrev>
        <PaginationPage>
          Page <span>1</span> of &nbsp; 6
        </PaginationPage>
        <NextPrev to="/">
          <GrNext />
        </NextPrev>
      </Pagination>
    </ItemSection>
  );
};
export default OnSale;
