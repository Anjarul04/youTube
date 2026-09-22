import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chacheSlice from "./chacheSlice";
import chatSlice from "./chatSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    chache: chacheSlice,  
    chat: chatSlice,
  },
});
export default store;