// コンポーネントをインストール
import { ColoredMessage } from "./components/ColoredMessage";

// 他のファイルで使用できるようにするためにexportをする
export const App = () => {
  // 関数の作成はreturnの前で行う
  const onClickButton = () => {
    alert();
  };

  // cssを変数に格納してから適用することもできる
  const contentStyle = {
    color: "blue",
    // ハイフンは認められていないので、すべてキャメル型での記述となる
    fontSize: "40px",
  };

  const contentPinkStyle = {
    color: "pink",
    fontSize: "20px",
  };

  return (
    // JSXは一つのタグで囲んであげる必要がある
    <>
      {console.log("TEST")}
      <h1 style={contentStyle}>こんにちは！</h1>
      {/* cssを記述する際は、オブジェクトとして記述する */}
      <p style={{ color: "red" }}>お元気ですか？</p>
      {/* コンポーネントを表示する */}
      <ColoredMessage />
      <p style={contentPinkStyle}>元気です！</p>
      {/* キャメル型で記述する */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
