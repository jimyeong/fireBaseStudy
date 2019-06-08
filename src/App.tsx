import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/base/style.less";
import { MainPage, PortfolioPage } from "./pages";
import { Header, SideBar } from "./components";
import { connect } from "react-redux";

class App extends React.Component<any, any> {
  public home = "/";
  public portfolio = "/Portfolio";
  public makeGroup = "/add-group";
  public render() {
    return (
      <>
        <Router>
          <Header />
          <SideBar />
          <Switch>
            <Route exact path={this.home} render={() => <MainPage />} />
            <Route exact path={this.portfolio} render={() => <PortfolioPage />} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default connect(
  state => ({ ...state }),
  dispatch => ({
    dispatch
  })
)(App);
