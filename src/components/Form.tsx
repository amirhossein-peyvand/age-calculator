import arrow from "../assets/icon-arrow.svg";
import "../sass/Form.scss";

const Form = () => {
  return (
    <form className="form">
      <section className="formGroupsContainer">
        <div className="formGroup">
          <label htmlFor="day">DAY</label>
          <input id="day" type="number" placeholder="DD" required />
          <span>ERR</span>
        </div>
        <div className="formGroup">
          <label htmlFor="month">MONTH</label>
          <input id="month" type="number" placeholder="MM" required />
          <span>ERR</span>
        </div>
        <div className="formGroup">
          <label htmlFor="year">YEAR</label>
          <input id="year" type="number" placeholder="YYYY" required />
          <span>ERR</span>
        </div>
      </section>
      <section className="buttonContainer">
        <hr />
        <button>
          <img src={arrow} alt="arrow" />
        </button>
      </section>
    </form>
  );
};

export default Form;
