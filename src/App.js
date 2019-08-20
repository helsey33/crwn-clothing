import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage/HomePage";
import Shoppage from "./pages/shop/Shop";
import Authentication from "./pages/authentication/Authentication";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
        console.log(this.state);
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/shop" component={Shoppage} />
          <Route path="/signin" component={Authentication} />
        </Switch>
      </div>
    );
  }
}
export default App;
