export const ColoredMessage = (props) => {
  // propsを分割代入する
  const { color, children } = props;

  const contentStyle = {
    // 分割代入をすることにより、props.~の記法じゃなくてよくなる
    // color: color,
    color, //省略記法を使用することができる
    fontSize: "40px",
  };

  //   return <p style={contentStyle}>{props.message}</p>;
  return <p style={contentStyle}>{children}</p>;
};
