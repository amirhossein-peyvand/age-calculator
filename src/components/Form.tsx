import "../sass/Form.scss";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import arrow from "../assets/icon-arrow.svg";
import useStore from "../store";
import { thirtyDays, twentyEightDays } from "../arrDays";

const schema = z.object({
  day: z
    .number({ required_error: "This field is required" })
    .min(1, { message: "Must be a valid day" })
    .max(31, { message: "Must be a valid day" }),
  month: z
    .number({ required_error: "This field is required" })
    .min(1, { message: "Must be a valid month" })
    .max(12, { message: "Must be a valid month" }),
  year: z
    .number({ required_error: "This field is required" })
    .min(1900, { message: "Must be a valid year" })
    .max(Number(new Date().getFullYear()), { message: "Must be a valid year" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const { setDay, setMonth, setYear } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const calculateAge = (day: string, month: string, year: string) => {
    const currentDate = new Date();
    const [dayOfBirth, monthOfBirth, yearOfBirth] = [
      Number(day),
      Number(month) - 1,
      Number(year),
    ];

    if (monthOfBirth === 1 && !twentyEightDays.includes(dayOfBirth)) return;
    if (
      (monthOfBirth === 3 ||
        monthOfBirth === 5 ||
        monthOfBirth === 8 ||
        monthOfBirth === 10) &&
      !thirtyDays.includes(dayOfBirth)
    )
      return;

    const dateOfBirth = new Date(yearOfBirth, monthOfBirth, dayOfBirth);
    let ageInYears = currentDate.getFullYear() - dateOfBirth.getFullYear();
    let ageInMonths = currentDate.getMonth() - dateOfBirth.getMonth();
    let ageInDays = currentDate.getDate() - dateOfBirth.getDate();

    if (ageInDays < 0) {
      ageInMonths -= 1;
      const lastMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      ageInDays += lastMonthDate.getDate();
    }

    if (ageInMonths < 0) {
      ageInYears -= 1;
      ageInMonths += 12;
    }

    setDay(ageInDays);
    setMonth(ageInMonths);
    setYear(ageInYears);
  };

  const onSubmit = (event: FieldValues) =>
    calculateAge(event.day, event.month, event.year);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <section className="formGroupsContainer">
        <div className="formGroup">
          <label htmlFor="day">DAY</label>
          <input
            {...register("day", { valueAsNumber: true })}
            // max={31}
            // min={1}
            className={errors.day && "errorInput"}
            id="day"
            placeholder="DD"
            required
            type="number"
          />
          <span>{errors.day?.message}</span>
        </div>
        <div className="formGroup">
          <label htmlFor="month">MONTH</label>
          <input
            {...register("month", { valueAsNumber: true })}
            // max={12}
            // min={1}
            className={errors.month && "errorInput"}
            id="month"
            placeholder="MM"
            required
            type="number"
          />
          <span>{errors.month?.message}</span>
        </div>
        <div className="formGroup">
          <label htmlFor="year">YEAR</label>
          <input
            {...register("year", { valueAsNumber: true })}
            // max={new Date().getFullYear()}
            // min={1900}
            className={errors.year && "errorInput"}
            id="year"
            placeholder="YYYY"
            required
            type="number"
          />
          <span>{errors.year?.message}</span>
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
