import { ThirdwebProvider, ConnectWallet } from '@3rdweb/react';

import './App.css';
//import ListMynft from './wallet copy';
//import  Component  from './wallet';
//import myListingsMarket from './listings';
import TokenComponent from './tokencomponent';

//import ListMarketButton from './ListMarketButton';
//import TokenComponent from './tokencomponent';
const supportedChainIds = [1, 4, 137, 250, 43114, 80001];

const connectors = {
  injected: {},
  magic: {

  },
  walletconnect: {},
  walletlink: {
    appName: "thirdweb - demo",
    url: "https://thirdweb.com",
    darkMode: false,
  },
};


function ExampleApp() {

  return (
    <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <ConnectWallet />
      {/* <ListMarketButton />
      <Component /> */}
      <TokenComponent />
    </ThirdwebProvider>
  );
}

export default ExampleApp;