import { combineReducers } from 'redux';
import StockReducer from './reducer_stock';

const rootReducer = combineReducers({
    stock: StockReducer
});

export default rootReducer;

//====================================================
// import { combineReducers } from 'redux';
// import WeatherReducer from './reducer_weather';

// const rootReducer = combineReducers({
//     weather: WeatherReducer
// });

// export default rootReducer;