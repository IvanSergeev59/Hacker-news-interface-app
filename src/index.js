import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './styles/index.sass';
import './styles/css/index.css';
import { Provider } from "react-redux";
import HackerNewsService from './services';
import { HackerNewsServiceProvider } from './components/hacker-news-service-context';
import store from './store';

const hackerNewsService = new HackerNewsService();
console.log(store)
ReactDOM.render(
  <Provider store={store}>
    <HackerNewsServiceProvider value={hackerNewsService}>
      <App />
    </HackerNewsServiceProvider>
  </Provider>,
  document.getElementById('root')
);
