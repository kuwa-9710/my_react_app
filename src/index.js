import ReactDOM from "react-dom";

const App = () => {
  return (
    // JSXは一つのタグで囲んであげる必要がある
    <div>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
