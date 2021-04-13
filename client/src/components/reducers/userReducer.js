export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOG":
      return [
        {
          id: action.user.id,
          token: action.user.token,
          username: action.user.username,
        },
      ];
    case "UNLOG":
      return [
        {
          user: action.id,
        },
      ];
    default:
      return state;
  }
};
