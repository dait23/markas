import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import {MainApi} from './config/Api/';
import registerServiceWorker from './registerServiceWorker';


// Containers
import Full from './containers/Full/'

const networkInterface = createNetworkInterface({ uri: MainApi })

networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }

    // get the authentication token from local storage if it exists
    if (localStorage.getItem('graphcoolToken')) {
      req.options.headers.authorization = `Bearer ${localStorage.getItem('graphcoolToken')}`
    }
    next()
  },
}])


const client = new ApolloClient({ networkInterface })

//const history = createBrowserHistory();

ReactDOM.render((
<ApolloProvider client={client}>
  <Router>
    <Switch>
      <Route path="/" name="Home" component={Full}/>
    </Switch>
  </Router>
</ApolloProvider>
), document.getElementById('root'))
registerServiceWorker();
