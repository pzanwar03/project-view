import React from 'react';
import BigNumber from 'bignumber.js';

import { useReload } from 'hooks/useReload';
import { useAsyncEffect } from 'hooks/useAsyncEffect';
import { useWallet } from 'wallets/wallet';
import Web3Contract from 'web3/contract';

export const CONTRACT_CUTTIES_ADDR = String(process.env.REACT_APP_CONTRACT_CUTTIES_ADDR);

type CuttiesContractData = {
  totalSupply?: BigNumber;
  cuttyList?: Array<number>;
};

export type CuttiesContract = CuttiesContractData & {
  contract: Web3Contract;
  reload: () => void;
  mintCuttiesSend: (count: number, amount: BigNumber) => void;
}

const InitialData: CuttiesContractData = {
  totalSupply: undefined,
  cuttyList: undefined,
};

export function useCuttiesContract(): CuttiesContract {
  const [reload] = useReload();
  const wallet = useWallet();

  const contract = React.useMemo<Web3Contract>(() => {
    return new Web3Contract(
      require('web3/abi/cutties.json'),
      CONTRACT_CUTTIES_ADDR,
      'CUTTIES',
    );
  }, []);

  const [data, setData] = React.useState<CuttiesContractData>(InitialData);

  useAsyncEffect(async () => {
    let [totalSupply] = await contract.batch([
      {
        method: 'totalSupply',
        transform: (value: string) => new BigNumber(value),
      },
    ]);

    setData(prevState => ({
      ...prevState,
      totalSupply
    }));

  }, [reload]);

  useAsyncEffect(async () => {
    if (wallet.account) {
      let [cuttyList] = await contract.batch([
        {
          method: 'tokensOfOwner',
          methodArgs: [wallet.account],
          transform: (values: BigNumber[]) => values.map((value, key) => new BigNumber(value).toNumber()),
        },
      ]);

      setData(prevState => ({
        ...prevState,
        cuttyList
      }));
      setData(prevState => ({
        ...prevState,
      }));
    }
  }, [reload, wallet.account]);

  const mintCuttiesSend = React.useCallback(async (count: number, amount: BigNumber) => {
    if (!wallet.account) {
      return Promise.reject();
    }

    return await contract.send('mintCutties', [
      wallet.account,
      count
    ], {
      from: wallet.account,
      value: amount.times(new BigNumber(10).pow(18))
    }).then( (res) => {
      reload()
      return res;
    });    
  }, [reload, contract, wallet.account]);

  return React.useMemo<CuttiesContract>(() => ({
    ...data,
    contract,
    reload,
    mintCuttiesSend,
  }), [
    data,
    contract,
    reload,
    mintCuttiesSend,
  ]);
}
