import axios from 'axios';

const API_KEY = 'KBMHQZPTBTN3ACAV'; //api key for Alpha Vantage
const ROOT_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&apikey=${API_KEY}`;

export const FETCH_STOCK = 'FETCH_STOCK';
export function fetchStock(stockSymbol) {
    const url = `${ROOT_URL}&symbol=${stockSymbol}`;
    const request = axios.get(url);
    
    return {
        type: FETCH_STOCK,
        payload: request
    };
}