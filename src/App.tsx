import "./sass/App.scss";
import Form from "./components/Form";
import useStore from "./store";

function App() {
  const { day, month, year } = useStore((s) => s.dateQuery);

  return (
    <article className="main">
      <section className="top">
        <Form />
      </section>
      <section className="bottom">
        <p className="years">
          <span>{year ? year : "--"}</span> years
        </p>
        <p className="months">
          <span>{month ? month : "--"}</span> months
        </p>
        <p className="days">
          <span>{day ? day : "--"}</span> days
        </p>
      </section>
    </article>
  );
}

export default App;
