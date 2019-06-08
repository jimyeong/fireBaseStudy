const Action = {
  Type: {
    GET_SCROLL: "GET_SCROLL",
    SIDEBAR_OPEN: "SIDEBAR_OPEN"
  },
  Creator: {
    SIDEBAR_OPEN: () => {
      return {
        type: Action.Type.SIDEBAR_OPEN
      };
    },
    GET_SCROLL: () => {
      return {
        type: Action.Type.GET_SCROLL
      };
    }
  }
};

export default Action;
