import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components'
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import SignIn from './pages/signPage/sign-page.component'
import { auth } from './components/firebase/firebase.utils'


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      current: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user})

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
    <div className="main">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignIn}/>
      </Switch>
    </div>
  );}
}

export default App;
