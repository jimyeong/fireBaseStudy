import { createStore } from "redux";
import reducer from "./redux/reducer";

const Store = createStore(reducer);

export default Store;

