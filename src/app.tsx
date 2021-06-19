import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/Home';

function render() {
  ReactDOM.render(
    <div>
      <Navigation />
      <Home />
      <Footer />
    </div>,
    document.body,
  );
}

render();
