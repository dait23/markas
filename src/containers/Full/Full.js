import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo'
//import 'tachyons'


import {MainApi} from '../../config/Api/'

import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import Home from '../../views/Home/'
import Contact from '../../views/Contact/All/'
import Faq from '../../views/Faq/All/'
import Page404 from '../../views/Eror/All/'
import About from '../../views/About/All/'
import How from '../../views/How/All/'

import Product from '../../views/Product/All/'
import DetailProduct from '../../views/Product/Detail/'



const networkInterface = createNetworkInterface({ uri: MainApi })

const client = new ApolloClient({ networkInterface })
//const history = createBrowserHistory();

class Full extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
            <ApolloProvider client={client}>
             <Router>
              <Switch>
                <Route exact path="/" name="Home" component={Home}/>
                <Route exact path="/contact-us" name="Contact" component={Contact}/>
                <Route exact path="/about-us" name="about" component={About}/>
                 <Route exact path="/how-it-works" name="How" component={How}/>
                <Route exact path="/products" name="product" component={Product}/>
                <Route exact path="/product/:id" name="Detail" component={DetailProduct}/>
                <Route exact path="/faq" name="Faq" component={Faq}/>
                <Route exact path="/404" name="404" component={Page404}/>
                <Redirect from='*' to='/404' />
              </Switch>
            </Router>
           </ApolloProvider>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
