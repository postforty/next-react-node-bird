import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

// const initialState = {
//   user: {},
//   post: {},
// };

// const changeNickname = {
//   type: "CHANGE_NICKNAME",
//   data: "Lee",
// };

// 동적 액션 생성기(action creator)
// const changeNickname = (data) => {
//   return {
//     type: "CHANGE_NICKNAME",
//     data,
//   };
// };
// changeNickname("Lee");
// dispatch(changeNickname("Jung"));

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  // SSR을 위해 index 추가
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
