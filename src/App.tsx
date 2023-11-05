import Form from "./components/Form";
import "./sass/App.scss";

function App() {
  return (
    <article className="main">
      <section className="top">
        <Form />
      </section>
      <section className="bottom">
        <p className="years">
          <span>--</span> years
        </p>
        <p className="months">
          <span>--</span> months
        </p>
        <p className="days">
          <span>--</span> days
        </p>
      </section>
    </article>
  );
}

export default App;
