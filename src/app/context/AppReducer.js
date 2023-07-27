const Reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    case "DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "NUMBER":
      return {
        ...state,
        number: action.payload,
      };
    case "REGION":
      return {
        ...state,
        region: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
