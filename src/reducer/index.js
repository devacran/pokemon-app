const reducer = (state, action) => {
  switch (action.type) {
    case "SET_HISTORY_PAGE":
      return {
        ...state,
        historyPage: action.payload
      };
      break;
    case "SET_FAVORITE":
      const isSet =
        state.myList.filter(item => item.id === action.payload.id).length > 0;
      if (isSet) {
        return {
          ...state,
          myList: state.myList.filter(item => item.id !== action.payload.id)
        };
      } else {
        return {
          ...state,
          myList: [...state.myList, action.payload]
        };
      }

      break;
    default:
      return state;
  }
};
export default reducer;
