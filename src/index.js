import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; // the piece of code that interacts with the history

import reducers from './reducers';
import promise from 'redux-promise';

//components
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
import App from './components/app';

//style
import styles from './app.css'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Hello extends React.Component {
  render() {
    return <div>Hello</div>
  }
}

class Goodbye extends React.Component {
  render() {
    return <div>Goodbye</div>
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <Switch>
        {/* <Route path="/hello" component={Hello}/>
      <Route path="/goodbye" component={Goodbye}/> */}
        <Route path="/posts/new" component={PostsNew}/>
        <Route path="/" component={PostsIndex}/>
      </Switch>
    </div>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
