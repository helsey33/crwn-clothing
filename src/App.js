import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import Homepage from "./pages/homepage/HomePage";
import Shoppage from "./pages/shop/Shop";
import Authentication from "./pages/authentication/Authentication";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/shop" component={Shoppage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.user ? <Redirect to="/" /> : <Authentication />
            }
          />
        </Switch>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

const mapStateToProps = ({ user }) => ({
  user: user.currentUser
});

export default connect(
  mapStateToProps,
  { setCurrentUser }
)(App);
