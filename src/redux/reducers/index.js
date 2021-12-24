//tong hop cac reducers con lai

import { combineReducers } from "redux";
import currentUser from './currentUser'
// combineReducers de tong hop lai tat ca ca reducer 
const rootReducers = combineReducers({
    users: currentUser,
});
export default rootReducers;