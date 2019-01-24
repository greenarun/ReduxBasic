import {combineReducers} from 'redux';
import DataRetrieveReducer from './DataRetrieveReducer';

export default combineReducers ({
    postData: DataRetrieveReducer
}); 