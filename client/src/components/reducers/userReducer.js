export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOG":
      return [
        {
          id: action.user.id,
          token: action.user.token,
        },
      ];
    case "UNLOG":
      return [
        {
          id: action.id,
        },
      ];
    default:
      return state;
  }
};
