export const colorStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#173D77",
    borderRadius: "20px",
    padding: "2px 3px",
    outline: 0,
    border: 0,
    placeholder: {
      color: "white",
    },
    ":placeholder": {
      color: "black",
    },
  }),

  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "black",
      color: "white",
      borderRadius: "10px",
    };
  },

  option: (styles) => {
    return {
      ...styles,
      //   color: "white",
    };
  },
  singleValue: (styles) => ({
    ...styles,
    color: "white",
  }),

  placeholder: (styles) => ({ ...styles, color: "white" }),
  input: (styles) => ({ ...styles, color: "white" }),

  multiValueLabel: (styles, { data }) => {
    return {
      ...styles,
      color: "white",
    };
  },

  multiValueRemove: (styles, { data }) => {
    return {
      ...styles,
      cursor: "pointer",
      backgroundColor: "transparent",
      ":hover": {
        color: "red",
      },
    };
  },
};
