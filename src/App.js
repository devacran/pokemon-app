import React from "react";
import { connect } from "react-redux";
import Intro from "./containers/Intro";
import Pokemon from "./containers/Pokemon";
import MyList from "./containers/MyList.js";
import { Switch, Route, withRouter } from "react-router-dom";

const App = props => {
  props.history.listen((location, action) => {
    const previousLocation = window.sessionStorage.getItem("historyPage");
    window.sessionStorage.setItem("historyPage", previousLocation);
  });
  const historyPage = window.sessionStorage.getItem("historyPage");
  window.sessionStorage.setItem("historyPage", window.location.pathname);
  return (
    <>
      <Switch>
        <Route path="/">
          <Route
            exact
            path="/"
            component={props => (
              <Intro main historyPage={historyPage} {...props} />
            )}
          />
          <Route
            exact
            path="/pokemon"
            component={routeProps => {
              return (
                <>
                  <Pokemon historyPage={historyPage} main {...routeProps} />
                  {historyPage === "/mylist" ? (
                    <MyList historyPage={historyPage} {...routeProps} />
                  ) : (
                    <Intro historyPage={historyPage} {...routeProps} />
                  )}
                </>
              );
            }}
          />
          <Route
            exact
            path="/mylist"
            component={routeProps => (
              <>
                <MyList historyPage={historyPage} main {...routeProps} />
                <Pokemon historyPage={historyPage} {...routeProps} />
              </>
            )}
          />
        </Route>
      </Switch>
    </>
  );
};

export default withRouter(App);
