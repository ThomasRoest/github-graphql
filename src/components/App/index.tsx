import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import client from "../../apollo-client";
import { GlobaStyles } from "../../config/globalstyles";
import Layout from "../Layout";
import Search from "../../pages/Search";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <GlobaStyles />
      <Router>
        <Layout>
          <Switch>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ApolloProvider>
  );
};

export default App;
