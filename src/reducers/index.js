import  {combineReducers} from 'redux';
import HotelReducers from './hotel-reducers';

const CombinedReducers =  combineReducers({
        HotelReducers
   });

export default CombinedReducers;
