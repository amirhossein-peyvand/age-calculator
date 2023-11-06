import Form from "./components/Form";
import "./sass/App.scss";
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
          <span>{day ? day : "--"}</span> years
        </p>
        <p className="months">
          <span>{month ? month : "--"}</span> months
        </p>
        <p className="days">
          <span>{year ? year : "--"}</span> days
        </p>
      </section>
    </article>
  );
}

export default App;
