import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components'
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import SignIn from './pages/signPage/sign-page.component';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      // currentUser to null
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
    <div className="main">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={SignIn} render={() => this.props.currentUser ? (
          <Redirect to="/" />) 
          : 
          (<SignIn/>
          )}/>
      </Switch>
    </div>
  );
  }
}

const mapStateToProps = ({ user }) =>({
  currentUser: user.currentUser
});

const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchProps)(App);
