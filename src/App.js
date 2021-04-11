import "./App.css";
import Header from './Header'; 
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './Checkout'; 
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe('pk_test_51IbjNRSAnkY5sVA6LULiMDkff4mKQ1gUmcdv91p2NRPfWaNk4fBwDUBeNvvFdfy7di0Uwzmutxcu0d2mRXEG2GQP00NQ7uzUbY');


function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
    // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }else  {
      // the user is logged out
          dispatch({
            type: "SET_USER",
            user: null,
          });
      }
    });
  }, []);
  return (
    //BEM
      <Router>
        <div className="app">
          <Switch>
          <Route path='/login'>
              <Login />
            </Route>
            <Route path='/orders'>
              <Header />
              <Orders />
            </Route>
            <Route path='/checkout'>
              <Header />          
              <Checkout />
            </Route>
            <Route path='/payment'>
                <Header /> 
                <Elements stripe={promise}>
                  <Payment />  
                </Elements>                   
            </Route>
            <Route path='/'>
              <Header />
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>     
  );
}

export default App;
