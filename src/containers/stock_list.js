import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class StockList extends Component {
  renderStock(stockData) {

    const dates = Object.entries(stockData['Monthly Time Series']).map(e => e[0]);
    const opens = Object.entries(stockData['Monthly Time Series']).map(e => parseFloat(e[1]['1. open']));
    const closes = Object.entries(stockData['Monthly Time Series']).map(e => parseFloat(e[1]['4. close']));
    const volumes = Object.entries(stockData['Monthly Time Series']).map(e => parseFloat(e[1]['5. volume']));
 
    console.log('opens ', opens);

    return (
      <tr key={stockData['Meta Data']['2. Symbol']}>
        {/* <td><GoogleMap lat={stockData.city.coord.lat} lon={stockData.city.coord.lon} /></td> */}
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
