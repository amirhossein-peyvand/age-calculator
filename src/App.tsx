import Form from "./components/Form";
import "./sass/App.scss";

function App() {
  return (
    <article className="calculator">
      <section className="top">
        <Form />
      </section>
      <section className="bottom"></section>
    </article>
  );
}

export default App;
