import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import client from "../../apollo-client";
import { GlobaStyles } from "../../config/globalstyles";
import Layout from "../Layout";
import Home from "../../pages/Home";

const About = () => <div>About</div>;

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      {/* <ThemeProvider theme={customTheme}> */}
      <GlobaStyles />
      <Router>
        <Layout>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
      {/* </ThemeProvider> */}
    </ApolloProvider>
  );
};

export default App;
