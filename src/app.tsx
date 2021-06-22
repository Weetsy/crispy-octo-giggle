import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { AutoDocker } from './components/AutoDocker';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function render() {
  ReactDOM.render(
    <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/autodocker" component={AutoDocker} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
    </Router>,
    document.body
  );
}

render();
