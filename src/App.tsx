import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "./Routes";
import Web3WalletProvider from "wallets/wallet";
import Web3ContractsProvider from "web3/contracts";

import Home from "./containers/Home";
import Gallery from "./containers/Gallery";
import Farming from "./containers/farming/Index";
import Details from "./containers/farming/Details";
import ItemDetails from "./containers/items/Details";
import Items from "./containers/items/Index";
import Governance from "./containers/governance/Index";
import AllProposals from "./containers/governance/AllProposals";
import Leaderboard from "./containers/governance/Leaderboard";
import Loading from "./components/Loading";
import ReactNotification from "react-notifications-component";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";

function App(props: any) {
  const { loading } = props;

  return (
    <Web3WalletProvider>
      <Web3ContractsProvider>
        <Router>
          <Switch>
            <PublicRoute path="/" exact component={Home} />
            <PublicRoute path="/gallery" exact component={Gallery} />
            <PublicRoute path="/farming" exact component={Farming} />
            <PublicRoute path="/farming/details/:type/:target" exact component={Details} />
            <PublicRoute path="/items" exact component={Items} />
            <PublicRoute path="/items/details/:info" exact component={ItemDetails} />
            <PublicRoute path="/governance" exact component={Governance} />
            <PublicRoute path="/governance/proposals" exact component={AllProposals} />
            <PublicRoute path="/governance/leaderboard" exact component={Leaderboard} />

            <PublicRoute path="*">
              <p>Page not found</p>
            </PublicRoute>
          </Switch>
          <ReactNotification />
        </Router>
        <Loading loading={loading} />
      </Web3ContractsProvider>
    </Web3WalletProvider>
  );
}

export default App;
