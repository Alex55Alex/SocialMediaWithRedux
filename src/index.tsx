import reportWebVitals from './reportWebVitals';
import {rerenderEtireTree} from "./render";
import {state} from "./redux/state";

rerenderEtireTree(state);


reportWebVitals();
