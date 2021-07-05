import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
const reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    sidebarPage : sidebarReducer
});

const store: any = createStore(reducers);
export default store;