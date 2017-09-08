import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class StockList extends Component {
  renderStock(stockData) {

    //MDN "The Object.entries() method returns an array of a given object's own 
    //enumerable property [key, value] pairs, in the same order as that provided by a for...in loop"
    const data = Object.entries(stockData['Monthly Time Series']);
    
    const dates = data.map(date => date[0]);
    const opens = data.map(date => parseFloat(date[1]['1. open']));
    const closes = data.map(date => parseFloat(date[1]['4. close']));
    const volumes = data.map(date => parseFloat(date[1]['5. volume']));

    return (
      <tr key={stockData['Meta Data']['2. Symbol']}>
        <td>{stockData['Meta Data']['2. Symbol'].toUpperCase()}</td>
        <td>from {dates[0]} <br /> to {dates[dates.length - 1]}</td>
        <td><Chart data={opens} color='blue' /></td>
        <td><Chart data={closes} color='red' /></td>
        <td><Chart data={volumes} color='black' /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Dates</th>
            <th>Open</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>{this.props.stock.map(this.renderStock)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ stock }) {
  return { stock: stock };
}

export default connect(mapStateToProps)(StockList);
