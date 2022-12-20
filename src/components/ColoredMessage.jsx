export const ColoredMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "40px",
  };

//   return <p style={contentStyle}>{props.message}</p>;
  return <p style={contentStyle}>{props.children}</p>;
};
