import logo from "./logo.svg";
import "./App.css";
import InputArea from "./InputArea/InputArea";

function App() {
  return (
    <div>
      <section className="input-form">
        <InputArea></InputArea>
      </section>

      <section className="output-form"></section>
    </div>
  );
}

export default App;
