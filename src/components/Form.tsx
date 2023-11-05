const Form = () => {
  return (
    <form className="form">
      <section className="formGroupsContainer">
        <div className="formGroup">
          <label htmlFor="day">DAY</label>
          <input id="day" type="number" placeholder="DD" required />
          <p>ERR</p>
        </div>
        <div className="formGroup">
          <label htmlFor="month">MONTH</label>
          <input id="month" type="number" placeholder="MM" required />
          <p>ERR</p>
        </div>
        <div className="formGroup">
          <label htmlFor="year">YEAR</label>
          <input id="year" type="number" placeholder="YYYY" required />
          <p>ERR</p>
        </div>
      </section>
    </form>
  );
};

export default Form;
