import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col, Table } from "react-bootstrap";
import { GrPrevious, GrNext } from "react-icons/gr";
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
      width: "250px",
      position: "relative",
      backgroundColor: "#363636",
      border: "0px",
      color: "#fff",
      fontSize: 18,
      borderRadius: 25,
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

const TransactionSection = styled.div`
  margin: 130px 0 15px;
  @media (max-width: 767px) {
    margin: 30px 0 0;
  }
`;
const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Title = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 800;
  margin: 15px 0 0;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const FilterItem = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    display: none;
  }
`;
const TokenFilter = styled.div``;
const TransactionFilter = styled.div``;
const TransactionTable = styled.div`
  margin-top: 50px;
  .table {
    min-width: 800px;
  }
  & .table thead th {
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 300;
  }
  & .table td {
    border-top: 0;
    border-bottom: 1px solid #414141;
    font-size: 16px;
    font-weight: 300;
    line-height: 18px;
  }
`;
// const TableSmall = styled.span`
//   font-size: 12px;
// `;
// const TableGreen = styled.span`
//   color: #21be1e;
// `;
// const TableSky = styled.span`
//   color: #00f0ff;
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

const Transactions: React.FC<any> = () => {
  const classes = useStyles();
  const [filter, setFilter] = React.useState("");
  const [transactions, setTransactions] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilter(event.target.value);
  };
  const handleTransactions = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTransactions(event.target.value);
  };

  return (
    <TransactionSection>
      <Row>
        <Col className="px-2">
          <FilterSection>
            <Title>my transactions</Title>
            <FilterItem>
              <TokenFilter>
                <FormControl className={classes.margin}>
                  <NativeSelect
                    id="demo-customized-select-native2"
                    value={filter}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                  >
                    <option value="all">all tokens</option>
                    <option value="USDC">USDC</option>
                    <option value="USDT">USDT</option>
                    <option value="DAI">DAI</option>
                    <option value="NFT">NFT</option>
                    <option value="LP">LP</option>
                  </NativeSelect>
                </FormControl>
              </TokenFilter>
              <TransactionFilter>
                <FormControl className={classes.margin}>
                  <NativeSelect
                    id="demo-customized-select-native2"
                    value={transactions}
                    onChange={handleTransactions}
                    input={<BootstrapInput />}
                  >
                    <option value="all">all transactions</option>
                    <option value="DEPOSIT">DEPOSIT</option>
                    <option value="WITHDRAW">WITHDRAW</option>
                  </NativeSelect>
                </FormControl>
              </TransactionFilter>
            </FilterItem>
          </FilterSection>
          <TransactionTable>
            <Table responsive="md">
              <thead>
                <tr>
                  <th width="25%">TRANSACTION TYPE</th>
                  <th width="20%" className="text-center">
                    AMOUNT
                  </th>
                  <th width="20%">ADDRESS</th>
                  <th width="20%">TRANSACTION HASH</th>
                  <th width="20%" className="text-right">
                    TIME
                  </th>
                </tr>
              </thead>
              {/* <tbody>
                <tr>
                  <td>
                    DEPOSIT <br />
                    <TableSmall>USDC_CUTT_UNI_LP</TableSmall>
                  </td>
                  <td className="text-center">
                    <TableGreen>+ 0.0183 </TableGreen>
                    <br />
                    <TableSmall>$255,579.79</TableSmall>
                  </td>
                  <td>
                    <TableSky>0x6f3b...9594</TableSky>
                  </td>
                  <td>
                    <TableSky>0xfd5f...908b</TableSky>
                  </td>
                  <td className="text-right">about 2 hours ago</td>
                </tr>
                <tr>
                  <td>
                    DEPOSIT <br />
                    <TableSmall>USDC_CUTT_UNI_LP</TableSmall>
                  </td>
                  <td className="text-center">
                    <TableGreen>+ 0.0183 </TableGreen>
                    <br />
                    <TableSmall>$255,579.79</TableSmall>
                  </td>
                  <td>
                    <TableSky>0x6f3b...9594</TableSky>
                  </td>
                  <td>
                    <TableSky>0xfd5f...908b</TableSky>
                  </td>
                  <td className="text-right">about 2 hours ago</td>
                </tr>
                <tr>
                  <td>
                    DEPOSIT <br />
                    <TableSmall>USDC_CUTT_UNI_LP</TableSmall>
                  </td>
                  <td className="text-center">
                    <TableGreen>+ 0.0183 </TableGreen>
                    <br />
                    <TableSmall>$255,579.79</TableSmall>
                  </td>
                  <td>
                    <TableSky>0x6f3b...9594</TableSky>
                  </td>
                  <td>
                    <TableSky>0xfd5f...908b</TableSky>
                  </td>
                  <td className="text-right">about 2 hours ago</td>
                </tr>
                <tr>
                  <td>
                    DEPOSIT <br />
                    <TableSmall>USDC_CUTT_UNI_LP</TableSmall>
                  </td>
                  <td className="text-center">
                    <TableGreen>+ 0.0183 </TableGreen>
                    <br />
                    <TableSmall>$255,579.79</TableSmall>
                  </td>
                  <td>
                    <TableSky>0x6f3b...9594</TableSky>
                  </td>
                  <td>
                    <TableSky>0xfd5f...908b</TableSky>
                  </td>
                  <td className="text-right">about 2 hours ago</td>
                </tr>
                <tr>
                  <td>
                    DEPOSIT <br />
                    <TableSmall>USDC_CUTT_UNI_LP</TableSmall>
                  </td>
                  <td className="text-center">
                    <TableGreen>+ 0.0183 </TableGreen>
                    <br />
                    <TableSmall>$255,579.79</TableSmall>
                  </td>
                  <td>
                    <TableSky>0x6f3b...9594</TableSky>
                  </td>
                  <td>
                    <TableSky>0xfd5f...908b</TableSky>
                  </td>
                  <td className="text-right">about 2 hours ago</td>
                </tr>
                <tr>
                  <td>
                    DEPOSIT <br />
                    <TableSmall>USDC_CUTT_UNI_LP</TableSmall>
                  </td>
                  <td className="text-center">
                    <TableGreen>+ 0.0183 </TableGreen>
                    <br />
                    <TableSmall>$255,579.79</TableSmall>
                  </td>
                  <td>
                    <TableSky>0x6f3b...9594</TableSky>
                  </td>
                  <td>
                    <TableSky>0xfd5f...908b</TableSky>
                  </td>
                  <td className="text-right">about 2 hours ago</td>
                </tr>
                <tr>
                  <td>
                    DEPOSIT <br />
                    <TableSmall>USDC_CUTT_UNI_LP</TableSmall>
                  </td>
                  <td className="text-center">
                    <TableGreen>+ 0.0183 </TableGreen>
                    <br />
                    <TableSmall>$255,579.79</TableSmall>
                  </td>
                  <td>
                    <TableSky>0x6f3b...9594</TableSky>
                  </td>
                  <td>
                    <TableSky>0xfd5f...908b</TableSky>
                  </td>
                  <td className="text-right">about 2 hours ago</td>
                </tr>
                <tr>
                  <td>
                    DEPOSIT <br />
                    <TableSmall>USDC_CUTT_UNI_LP</TableSmall>
                  </td>
                  <td className="text-center">
                    <TableGreen>+ 0.0183 </TableGreen>
                    <br />
                    <TableSmall>$255,579.79</TableSmall>
                  </td>
                  <td>
                    <TableSky>0x6f3b...9594</TableSky>
                  </td>
                  <td>
                    <TableSky>0xfd5f...908b</TableSky>
                  </td>
                  <td className="text-right">about 2 hours ago</td>
                </tr>
                <tr>
                  <td>
                    DEPOSIT <br />
                    <TableSmall>USDC_CUTT_UNI_LP</TableSmall>
                  </td>
                  <td className="text-center">
                    <TableGreen>+ 0.0183 </TableGreen>
                    <br />
                    <TableSmall>$255,579.79</TableSmall>
                  </td>
                  <td>
                    <TableSky>0x6f3b...9594</TableSky>
                  </td>
                  <td>
                    <TableSky>0xfd5f...908b</TableSky>
                  </td>
                  <td className="text-right">about 2 hours ago</td>
                </tr>
                <tr>
                  <td>
                    DEPOSIT <br />
                    <TableSmall>USDC_CUTT_UNI_LP</TableSmall>
                  </td>
                  <td className="text-center">
                    <TableGreen>+ 0.0183 </TableGreen>
                    <br />
                    <TableSmall>$255,579.79</TableSmall>
                  </td>
                  <td>
                    <TableSky>0x6f3b...9594</TableSky>
                  </td>
                  <td>
                    <TableSky>0xfd5f...908b</TableSky>
                  </td>
                  <td className="text-right">about 2 hours ago</td>
                </tr>
              </tbody> */}
            </Table>
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
          </TransactionTable>
        </Col>
      </Row>
    </TransactionSection>
  );
};
export default Transactions;
