import React, { useState } from "react";
import { useWallet } from 'wallets/wallet'
import { useWeb3Contracts } from 'web3/contracts';
import { useAsyncEffect } from 'hooks/useAsyncEffect';
import ReactPaginate from 'react-paginate';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import CuttieImg from "../../assets/img/placeholder.gif";

const ItemSection = styled.div``;
const Items = styled.div`
  border: 1px solid #646464;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 30px;
`;
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
const DetailsBody = styled.div`
  margin: 0 0 80px;
`;

const MyItems: React.FC<any> = () => {
  const wallet = useWallet();
  const { cutties } = useWeb3Contracts();

  const perPage = 8;
  const [pageNum, setPageNum] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  useAsyncEffect(async () => {
    if (wallet.account && cutties.cuttyList) {
      setPageCount(Math.ceil(cutties.cuttyList.length / perPage));
      setPageNum(0);
    }
  }, [wallet, cutties])

  const handlePageClick = async (data: any) => {
    setPageNum(data.selected);
  }

  return (
    <MainSection>
      <MainContainer>

        <DetailsBody>
          <ItemSection>
            <Row>
              {cutties.cuttyList && cutties.cuttyList.map((id, key) => {
                if (key >= pageNum * perPage && key < (pageNum + 1) * perPage)
                  return (
                    <Col xs={12} sm={6} md={4} lg={3} >
                      <Items>
                        <ItemImage src={CuttieImg} />
                        <ItemFooter>
                          <ItemTitle to="/items/details/info">Cutties #{id}</ItemTitle>
                        </ItemFooter>
                      </Items>
                    </Col>
                  )
                return (<></>)
              })}
            </Row>
          </ItemSection>

          {
            cutties && cutties.cuttyList && cutties.cuttyList.length > 0 &&
            <ReactPaginate
              previousLabel={<FaChevronLeft />}
              nextLabel={<FaChevronRight />}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={1}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
              forcePage={pageNum}
            />
          }
        </DetailsBody>
      </MainContainer>


    </MainSection >
  );
};
export default MyItems;
