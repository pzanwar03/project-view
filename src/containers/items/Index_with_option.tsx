import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { GrPrevious, GrNext } from "react-icons/gr";
import { Container } from "react-bootstrap";
import { createStyles, makeStyles, withStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

import CatImg01 from "../../assets/img/products/cats/1.png";
import CatImg02 from "../../assets/img/products/cats/2.png";
import CatImg03 from "../../assets/img/products/cats/3.png";
import CatImg04 from "../../assets/img/products/cats/4.png";
import CatImg05 from "../../assets/img/products/cats/5.png";
import CatImg06 from "../../assets/img/products/cats/6.png";
import CatImg07 from "../../assets/img/products/cats/7.png";
import CatImg08 from "../../assets/img/products/cats/8.png";

import DogImg01 from "../../assets/img/products/dogs/1.png";
import DogImg02 from "../../assets/img/products/dogs/2.png";
import DogImg03 from "../../assets/img/products/dogs/3.png";
import DogImg04 from "../../assets/img/products/dogs/4.png";
import DogImg05 from "../../assets/img/products/dogs/5.png";
import DogImg06 from "../../assets/img/products/dogs/6.png";
import DogImg07 from "../../assets/img/products/dogs/7.png";
import DogImg08 from "../../assets/img/products/dogs/8.png";

import RabbitImg01 from "../../assets/img/products/rabbits/1.png";
import RabbitImg02 from "../../assets/img/products/rabbits/2.png";
import RabbitImg03 from "../../assets/img/products/rabbits/3.png";
import RabbitImg04 from "../../assets/img/products/rabbits/4.png";
import RabbitImg05 from "../../assets/img/products/rabbits/5.png";
import RabbitImg06 from "../../assets/img/products/rabbits/6.png";
import RabbitImg07 from "../../assets/img/products/rabbits/7.png";
import RabbitImg08 from "../../assets/img/products/rabbits/8.png";


const ItemSection = styled.div``;
const Items = styled.div`
  border: 1px solid #646464;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 30px;
`;
// const ItemHead = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
// const ItemLock = styled.div`
//   width: 25%;
//   display: flex;
//   justify-content: space-between;
// `;
// const ItemMenu = styled.div``;
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
// const ItemLike = styled.div`
//   margin: 5px 0;
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

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      width: "250px",
      borderRadius: 20,
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
  margin: 60px 0 0;
  @media (max-width: 767px) {
    margin: 30px 0;
  }
`;
const MainContainer = styled(Container)`
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 30px;
    padding-left: 30px;
  }
`;
const OptionBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 30px;
  @media (max-width: 580px) {
    margin: 30px 0 20px;
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;
const DetailsType = styled.div`
  margin-top: 15px;
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    @media (max-width: 480px) {
      justify-content: space-between;
    }
    & li {
      margin-right: 40px;
      @media (max-width: 480px) {
        margin-right: 0;
      }
      & a {
        font-size: 20px;
        text-transform: uppercase;
        color: #fff;
        font-weight: 400;
        display: block;
        line-height: 35px;
        &.active:after {
          height: 2px;
          display: block;
          width: 100%;
          background: #be1e2d;
          content: "";
        }
      }
    }
  }
`;
const SelectMenu = styled.div`
  @media (max-width: 580px) {
    text-align: right;
  }
`;
const DetailsBody = styled.div`
  margin: 0 0 80px;
`;

const MyItems: React.FC<any> = ({ match }) => {
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
          <DetailsType>
            {/* <ul>
              <li>
                <Link className={match.params.items ==== "all-items" ? "active" : ""} to="/items/all-items">
                  all items
                </Link>
              </li>
              <li>
                <Link className={match.params.items ==== "on-sale" ? "active" : ""} to="/items/on-sale">
                  on sale
                </Link>
              </li>
            </ul> */}
          </DetailsType>
          <SelectMenu>
            <FormControl className={classes.margin}>
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
            </FormControl>
          </SelectMenu>
        </OptionBar>

        <DetailsBody>
          <ItemSection>
            <Row>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Items>
                  <ItemImage src={object === 'Cat' ? CatImg01 : object === 'Dog' ? DogImg01 : RabbitImg01} />
                  <ItemFooter>
                    <ItemTitle to="/items/details/info">{object} #1</ItemTitle>
                  </ItemFooter>
                </Items>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Items>
                  <ItemImage src={object === 'Cat' ? CatImg02 : object === 'Dog' ? DogImg02 : RabbitImg02} />
                  <ItemFooter>
                    <ItemTitle to="/items/details/info">{object} #2</ItemTitle>
                  </ItemFooter>
                </Items>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Items>
                  <ItemImage src={object === 'Cat' ? CatImg03 : object === 'Dog' ? DogImg03 : RabbitImg03} />
                  <ItemFooter>
                    <ItemTitle to="/items/details/info">{object} #3</ItemTitle>
                  </ItemFooter>
                </Items>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Items>
                  <ItemImage src={object === 'Cat' ? CatImg04 : object === 'Dog' ? DogImg04 : RabbitImg04} />
                  <ItemFooter>
                    <ItemTitle to="/items/details/info">{object} #4</ItemTitle>
                  </ItemFooter>
                </Items>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Items>
                  <ItemImage src={object === 'Cat' ? CatImg05 : object === 'Dog' ? DogImg05 : RabbitImg05} />
                  <ItemFooter>
                    <ItemTitle to="/items/details/info">{object} #5</ItemTitle>
                  </ItemFooter>
                </Items>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Items>
                  <ItemImage src={object === 'Cat' ? CatImg06 : object === 'Dog' ? DogImg06 : RabbitImg06} />
                  <ItemFooter>
                    <ItemTitle to="/items/details/info">{object} #6</ItemTitle>
                  </ItemFooter>
                </Items>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Items>
                  <ItemImage src={object === 'Cat' ? CatImg07 : object === 'Dog' ? DogImg07 : RabbitImg07} />
                  <ItemFooter>
                    <ItemTitle to="/items/details/info">{object} #7</ItemTitle>
                  </ItemFooter>
                </Items>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Items>
                  <ItemImage src={object === 'Cat' ? CatImg08 : object === 'Dog' ? DogImg08 : RabbitImg08} />
                  <ItemFooter>
                    <ItemTitle to="/items/details/info">{object} #8</ItemTitle>
                  </ItemFooter>
                </Items>
              </Col>
            </Row>
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
          </ItemSection>
          {/* <Switch>
            <Route path="/items/all-items" component={AllItems} />
            <Route path="/items/on-sale" component={OnSale} />
          </Switch> */}
        </DetailsBody>
      </MainContainer>
    </MainSection>
  );
};
export default MyItems;
