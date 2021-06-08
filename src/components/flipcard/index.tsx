import React from "react";
import "./index.css";
import styled from "styled-components";
import { default as Sliders } from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";
import tier1Image from "../../assets/img/products/cats/1.png";
import tier2Image from "../../assets/img/products/dogs/1.png";
import tier3Image from "../../assets/img/products/rabbits/1.png";
import tier4Image from "../../assets/img/products/cats/2.png";
import tier5Image from "../../assets/img/products/dogs/2.png";
import tier6Image from "../../assets/img/products/rabbits/2.png";
import tier7Image from "../../assets/img/products/cats/3.png";
import tier8Image from "../../assets/img/products/dogs/3.png";

import Item from "./item";

const SlidersM = styled(Sliders)`
  & .slick-arrow {
    top: 40%;
  }
`;

var settings = {
  dots: false,
  infinite: false,
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

const FlipCard: React.FunctionComponent<any> = ({ totalSupply }) => {
  return (
    <SlidersM {...settings}>
      <Item
        totalSupply={totalSupply}
        name={"Tier 1"}
        price={"0.02ETH"}
        rangeMin={0}
        rangeMax={199}
        image={tier1Image}
        minSupply={200}
        maxSupply={1200}
      />
      <Item
        totalSupply={totalSupply}
        name={"Tier 2"}
        price={"0.04ETH"}
        rangeMin={200}
        rangeMax={1199}
        image={tier2Image}
        minSupply={1200}
        maxSupply={3200}
      />
      <Item
        totalSupply={totalSupply}
        name={"Tier 3"}
        price={"0.08ETH"}
        rangeMin={1200}
        rangeMax={3199}
        image={tier3Image}
        minSupply={3200}
        maxSupply={6700}
      />
      <Item
        totalSupply={totalSupply}
        name={"Tier 4"}
        price={"0.16ETH"}
        rangeMin={3200}
        rangeMax={6699}
        image={tier4Image}
        minSupply={6700}
        maxSupply={8900}
      />
      <Item
        totalSupply={totalSupply}
        name={"Tier 5"}
        price={"0.32ETH"}
        rangeMin={6700}
        rangeMax={8899}
        image={tier5Image}
        minSupply={8900}
        maxSupply={9900}
      />
      <Item
        totalSupply={totalSupply}
        name={"Tier 6"}
        price={"0.48ETH"}
        rangeMin={8900}
        rangeMax={9899}
        image={tier6Image}
        minSupply={9900}
        maxSupply={9990}
      />
      <Item
        totalSupply={totalSupply}
        name={"Tier 7"}
        price={"0.64ETH"}
        rangeMin={9900}
        rangeMax={9989}
        image={tier7Image}
        minSupply={9990}
        maxSupply={10000}
      />
      <Item
        totalSupply={totalSupply}
        name={"Tier 8"}
        price={"1ETH"}
        rangeMin={9990}
        rangeMax={9999}
        image={tier8Image}
        minSupply={10000}
        maxSupply={10001}
      />
    </SlidersM>
  );
};

export default FlipCard;
