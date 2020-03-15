//Import
import { createStore, combineReducers } from 'redux';

//Reducers
import firstReducer from './reducers/firstReducer';

const rootReducer = combineReducers({
    first: firstReducer,
    //second: secondReducer,
    //etc
})

//Store
const store = createStore(rootReducer);

//export
export default store;