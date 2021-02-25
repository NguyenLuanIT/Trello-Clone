import { combineReducers } from "redux";
import listsReducer from "./listReducer";

const rootReducer = combineReducers({
    lists: listsReducer
});
export default rootReducer;