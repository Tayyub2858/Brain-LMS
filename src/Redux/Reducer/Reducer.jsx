

const formReducer = (state = { title: "No Course Done Yet" }, action) => {
    switch (action.type) {
      case "UPDATE_FORM_TITLE":
        return { ...state, title: action.payload };
      default:
        return state;
    }
  };
  export default formReducer;