import "../sass/Form.scss";
import { FieldValues, useForm } from "react-hook-form";
import arrow from "../assets/icon-arrow.svg";
import useStore from "../store";

interface FormData {
  day: string;
  month: string;
  year: string;
}

const Form = () => {
  const currentDate = new Date();
  const { register, handleSubmit } = useForm<FormData>();
  const { setDay, setMonth, setYear } = useStore();
  const onSubmit = (event: FieldValues) => {
    setDay(event.day);
    setMonth(event.month);
    setYear(event.year);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <section className="formGroupsContainer">
        <div className="formGroup">
          <label htmlFor="day">DAY</label>
          <input
            {...register("day")}
            id="day"
            max={31}
            min={1}
            placeholder="DD"
            required
            type="number"
          />
          <span>Must be a valid day</span>
        </div>
        <div className="formGroup">
          <label htmlFor="month">MONTH</label>
          <input
            {...register("month")}
            id="month"
            max={12}
            min={1}
            placeholder="MM"
            required
            type="number"
          />
          <span>Must be a valid month</span>
        </div>
        <div className="formGroup">
          <label htmlFor="year">YEAR</label>
          <input
            {...register("year")}
            id="year"
            max={currentDate.getFullYear()}
            min={1900}
            placeholder="YYYY"
            required
            type="number"
          />
          <span>Must be a valid year</span>
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
