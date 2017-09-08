import React, { Component } from 'react';
import Header from './header';
import SearchBar from '../containers/search_bar';
import StockList from '../containers/stock_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header title={'Stock Graphs example using React and Redux'}/>
        <SearchBar />
        <StockList />
      </div>
    );
  }
}
